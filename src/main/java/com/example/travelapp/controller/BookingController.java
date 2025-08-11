package com.example.travelapp.controller;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.services.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingService service;
    public BookingController(BookingService service) {
        this.service = service;
    }

    @GetMapping
    public List<Booking> getAll() {
        return service.findAll();
    }
    @GetMapping("/{id}") public Booking getById(@PathVariable Long id) {
        return service.findById(id);
    }
    @PostMapping
    public Booking create(@RequestBody Booking b) {
        return service.save(b);
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
