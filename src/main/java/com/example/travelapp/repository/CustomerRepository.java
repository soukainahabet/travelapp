package com.example.travelapp.repository;

import com.example.travelapp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Recherche par email
    Optional<Customer> findByUserEmail(String email);

    // Vérifie si un client existe déjà avec cet email
    // boolean existsByEmail(String email);
}
