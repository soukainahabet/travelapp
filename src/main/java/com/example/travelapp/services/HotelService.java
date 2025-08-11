package com.example.travelapp.services;

import com.example.travelapp.entity.Hotel;
import com.example.travelapp.repository.HotelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {
    private final HotelRepository repository;
    public HotelService(HotelRepository repository) {
        this.repository = repository;
    }

    public List<Hotel> findAll() {
        return repository.findAll();
    }
    public Hotel findById(Long id) {
        return repository.findById(id).orElse(null);
    }
    public Hotel save(Hotel h) {
        return repository.save(h);
    }
    public void delete(Long id) {

        repository.deleteById(id); }
}
