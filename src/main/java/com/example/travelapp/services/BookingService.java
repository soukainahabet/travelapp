package com.example.travelapp.services;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import com.example.travelapp.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // -------------------- GET ALL BOOKINGS --------------------
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // -------------------- GET BOOKING BY ID --------------------
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id " + id));
    }

    // -------------------- CREATE OR UPDATE BOOKING --------------------
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // -------------------- DELETE BOOKING --------------------
    public void deleteBooking(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new RuntimeException("Booking not found with id " + id);
        }
        bookingRepository.deleteById(id);
    }

    // -------------------- GET BOOKINGS BY CUSTOMER --------------------
    public List<Booking> getBookingsByCustomerId(Long customerId) {
        return bookingRepository.findByCustomerId(customerId);
    }
}
