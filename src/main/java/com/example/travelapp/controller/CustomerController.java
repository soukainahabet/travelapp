package com.example.travelapp.controller;

import com.example.travelapp.entity.Customer;
import com.example.travelapp.services.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private  final CustomerService service;
    public CustomerController(CustomerService service) {
        this.service = service;
    }
    @GetMapping public List<Customer> getAll(){
        return  service.findAll();
    }
    @GetMapping("/{id}") public Customer getById(@PathVariable Long id) {
        return service.findById(id);
    }
    @PostMapping public Customer create(@RequestBody Customer c) {
        return service.save(c);
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) {
        service.delete(id);
    }





}
