package com.example.travelapp.services;

import com.example.travelapp.entity.Booking;
import com.example.travelapp.repository.BookingRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class BookingService {
    private final BookingRepository repository;
    public BookingService(BookingRepository repository) {
        this.repository = repository;
    }

    public List<Booking> findAll() {
        return repository.findAll();
    }
    public Booking findById(Long id) {
        return repository.findById(id).orElse(null);
    }
    public Booking save(Booking b) {
        Long ifexest= b.getId();
        return repository.save(b);
    }
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
