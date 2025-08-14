package com.example.travelapp.repository;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Récupère toutes les réservations d’un client spécifique
    List<Booking> findByCustomer(Customer customer);

    // Si tu veux utiliser directement l'ID du client
    List<Booking> findByCustomerId(Long customerId);
}
