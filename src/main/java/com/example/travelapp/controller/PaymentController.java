package com.example.travelapp.controller;

import com.example.travelapp.entity.Payment;
import com.example.travelapp.services.PaymentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    private final PaymentService service;
    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Payment> getAll() { return service.findAll(); }
    @GetMapping("/{id}") public Payment getById(@PathVariable Long id) { return service.findById(id); }
    @PostMapping
    public Payment create(@RequestBody Payment p) { return service.save(p); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { service.delete(id); }
}
