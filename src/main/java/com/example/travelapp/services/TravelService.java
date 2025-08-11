package com.example.travelapp.services;

import com.example.travelapp.entity.Travel;
import com.example.travelapp.repository.TravelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravelService {
    private final TravelRepository repository;
    public TravelService(TravelRepository repository) {
        this.repository = repository;
    }

    public List<Travel> findAll() { return repository.findAll(); }
    public Travel findById(Long id) { return repository.findById(id).orElse(null); }
    public Travel save(Travel t) { return repository.save(t); }
    public void delete(Long id) { repository.deleteById(id); }
}
