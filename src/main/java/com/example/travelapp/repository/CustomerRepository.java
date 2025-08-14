package com.example.travelapp.repository;
import com.example.travelapp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CustomerRepository extends JpaRepository<Customer,Long> {
    Customer findByUserId(Long userId);

}
