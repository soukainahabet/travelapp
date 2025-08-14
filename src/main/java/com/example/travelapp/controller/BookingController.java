package com.example.travelapp.controller;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import com.example.travelapp.entity.User;
import com.example.travelapp.enums.Role;
import com.example.travelapp.services.BookingService;
import com.example.travelapp.services.CustomerService;
import com.example.travelapp.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;
    private final CustomerService customerService;
    private final UserService userService;

    public BookingController(BookingService bookingService, CustomerService customerService, UserService userService) {
        this.bookingService = bookingService;
        this.customerService = customerService;
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
    public Booking createBooking(@RequestBody Booking booking, @RequestParam Long userId) {
        Customer customer = customerService.getCustomerById(userId);
        booking.setCustomer(customer);
        return bookingService.saveBooking(booking);
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
