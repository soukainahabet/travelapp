package com.example.travelapp.services;

import com.example.travelapp.entity.Review;
import com.example.travelapp.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository repository;
    public ReviewService(ReviewRepository repository) {
        this.repository = repository;
    }

    public List<Review> findAll() { return repository.findAll(); }
    public Review findById(Long id) { return repository.findById(id).orElse(null); }
    public Review save(Review r) { return repository.save(r); }
    public void delete(Long id) { repository.deleteById(id); }
}
