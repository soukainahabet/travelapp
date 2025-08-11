package com.example.travelapp.repository;
import com.example.travelapp.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DestinationRepository extends JpaRepository<Destination,Long>{
}
