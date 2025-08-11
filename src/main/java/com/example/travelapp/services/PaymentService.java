package com.example.travelapp.services;

import com.example.travelapp.entity.Payment;
import com.example.travelapp.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    private final PaymentRepository repository;
    public PaymentService(PaymentRepository repository) {
        this.repository = repository;
    }

    public List<Payment> findAll() { return repository.findAll(); }
    public Payment findById(Long id) { return repository.findById(id).orElse(null); }
    public Payment save(Payment p) { return repository.save(p); }
    public void delete(Long id) { repository.deleteById(id); }
}
