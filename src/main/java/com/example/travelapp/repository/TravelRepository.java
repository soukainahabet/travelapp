package com.example.travelapp.repository;
import com.example.travelapp.entity.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface TravelRepository extends JpaRepository<Travel,Long> {

}
