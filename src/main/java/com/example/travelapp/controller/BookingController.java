package com.example.travelapp.controller;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import com.example.travelapp.entity.User;
import com.example.travelapp.enums.Role;
import com.example.travelapp.repository.CustomerRepository;
import com.example.travelapp.repository.UserRepository;
import com.example.travelapp.services.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BookingController {

    private final BookingService bookingService;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;

    public BookingController(BookingService bookingService, CustomerRepository customerRepository, UserRepository userRepository) {
        this.bookingService = bookingService;
        this.customerRepository = customerRepository;
        this.userRepository = userRepository;
    }

    // -------------------- GET BOOKINGS --------------------
    @GetMapping
    public ResponseEntity<List<Booking>> getBookings(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
        }
        String email = userDetails.getUsername();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        if (user.getRole() == Role.ADMIN) {
            return ResponseEntity.ok(bookingService.getAllBookings());
        }

        Customer customer = customerRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Customer not found for user: " + email));

        return ResponseEntity.ok(bookingService.getBookingsByCustomerId(customer.getId()));
    }

    // -------------------- CREATE BOOKING --------------------


    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking booking, @AuthenticationPrincipal UserDetails userDetails, HttpServletRequest request) {
        // --- DIAGNOSTIC LOGGING ---
        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + authHeader);
        System.out.println("UserDetails: " + userDetails);
        // --- END DIAGNOSTIC LOGGING ---

        if (userDetails == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Utilisateur non connecté ou token invalide ! Header: " + authHeader);
        }

        String email = userDetails.getUsername(); // récupéré depuis JWT
        Booking savedBooking = bookingService.saveBookingForUser(booking, email);
        return ResponseEntity.ok(savedBooking);
    }


    // -------------------- DELETE BOOKING --------------------
    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id, @RequestParam Long userId) {
        Booking booking = bookingService.getBookingById(id);
        if (booking == null) {
            throw new RuntimeException("Booking not found");
        }

        User user = booking.getCustomer().getUser();
        if (!user.getId().equals(userId) && user.getRole() != Role.ADMIN) {
            throw new RuntimeException("Not authorized to delete this booking");
        }

        bookingService.deleteBooking(id);
        return "Booking deleted successfully!";
    }
}
