package com.example.travelapp.services;

import com.example.travelapp.entity.Customer;
import com.example.travelapp.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer findById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found with id " + id));
    }

    public Customer save(Customer c) {
        return customerRepository.save(c);
    }

    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    // ← Ajouter cette méthode pour BookingController
    public Customer getCustomerById(Long id) {
        return findById(id);
    }
}
