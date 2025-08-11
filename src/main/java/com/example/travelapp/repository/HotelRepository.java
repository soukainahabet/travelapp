package com.example.travelapp.repository;
import com.example.travelapp.entity.Hotel;
import  org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
