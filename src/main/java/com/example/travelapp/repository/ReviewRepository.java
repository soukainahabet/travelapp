package com.example.travelapp.repository;
import com.example.travelapp.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ReviewRepository extends JpaRepository<Review,Long>{
}
