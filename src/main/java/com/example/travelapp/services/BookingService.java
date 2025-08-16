package com.example.travelapp.services;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import com.example.travelapp.entity.Travel;
import com.example.travelapp.enums.BookingStatus;
import com.example.travelapp.repository.BookingRepository;
import com.example.travelapp.repository.CustomerRepository;
import com.example.travelapp.repository.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TravelRepository travelRepository;



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
    public Booking saveBookingForUser(Booking booking, String userEmail) {
        if (userEmail == null || userEmail.isEmpty()) {
            throw new RuntimeException("Utilisateur non connecté !");
        }

        // Récupérer le client lié à l'utilisateur
        Customer customer = customerRepository.findByUserEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Client introuvable pour cet utilisateur."));

        // Récupérer le voyage choisi
        Travel travel = travelRepository.findById(booking.getTravel().getId())
                .orElseThrow(() -> new RuntimeException("Voyage introuvable."));

        // Lier le client et le voyage à la réservation
        booking.setCustomer(customer);
        booking.setTravel(travel);

        // Définir un statut par défaut si non défini
        if (booking.getStatus() == null) {
            booking.setStatus(BookingStatus.PENDING);
        }

        booking.setBookingDate(LocalDateTime.now());

        return bookingRepository.save(booking);
    }

}
