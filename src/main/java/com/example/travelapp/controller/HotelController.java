package com.example.travelapp.controller;

import com.example.travelapp.entity.Hotel;
import com.example.travelapp.services.HotelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {
    private final HotelService service;
    public HotelController(HotelService service) {
        this.service = service;
    }

    @GetMapping
    public List<Hotel> getAll() {
        return service.findAll();
    }
    @GetMapping("/{id}")
    public Hotel getById(@PathVariable Long id) {
        return service.findById(id);
    }
    @PostMapping
    public Hotel create(@RequestBody Hotel h) {
        return service.save(h);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
