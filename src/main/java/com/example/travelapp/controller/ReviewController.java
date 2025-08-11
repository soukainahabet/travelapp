package com.example.travelapp.controller;

import com.example.travelapp.entity.Review;
import com.example.travelapp.services.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private  final ReviewService service;
    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @GetMapping
    public List<Review> getAll() { return service.findAll(); }
    @GetMapping("/{id}") public Review getById(@PathVariable Long id) { return service.findById(id); }
    @PostMapping
    public Review create(@RequestBody Review r) { return service.save(r); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { service.delete(id); }
}
