package com.example.travelapp.controller;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import com.example.travelapp.entity.User;
import com.example.travelapp.enums.Role;
import com.example.travelapp.repository.CustomerRepository;
import com.example.travelapp.services.BookingService;
import com.example.travelapp.services.CustomerService;
import com.example.travelapp.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;
    private final CustomerService customerService;
    private final CustomerRepository customerRepository;

    private final UserService userService;

    public BookingController(BookingService bookingService, CustomerService customerService, CustomerRepository customerRepository, UserService userService) {
        this.bookingService = bookingService;
        this.customerService = customerService;
        this.customerRepository = customerRepository;
        this.userService = userService;
    }

    // -------------------- GET BOOKINGS --------------------
    @GetMapping
    public List<Booking> getBookings(@RequestParam(required = false) Long userId) {
        if (userId != null) {
            // Si c'est un utilisateur normal, retourne seulement ses réservations
            Customer customer = customerService.getCustomerById(userId);
            return bookingService.getBookingsByCustomerId(customer.getId());
        }
        // Si pas de userId, c'est un admin → retourne toutes les réservations
        return bookingService.getAllBookings();
    }

    // -------------------- CREATE BOOKING --------------------


    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking booking, Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Utilisateur non connecté !");
        }

        String email = principal.getName(); // récupéré depuis JWT
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
