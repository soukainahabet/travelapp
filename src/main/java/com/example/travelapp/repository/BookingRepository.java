package com.example.travelapp.repository;
import com.example.travelapp.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BookingRepository extends JpaRepository<Booking,Long> {
}
