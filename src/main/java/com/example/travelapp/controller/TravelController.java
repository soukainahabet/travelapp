package com.example.travelapp.controller;

import com.example.travelapp.entity.Travel;
import com.example.travelapp.services.TravelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/travels")
public class TravelController {
    private final TravelService service;
    public TravelController(TravelService service) {
        this.service = service;
    }

    @GetMapping
    public List<Travel> getAll() { return service.findAll(); }
    @GetMapping("/{id}") public Travel getById(@PathVariable Long id) { return service.findById(id); }
    @PostMapping
    public Travel create(@RequestBody Travel t) { return service.save(t); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { service.delete(id); }
}
