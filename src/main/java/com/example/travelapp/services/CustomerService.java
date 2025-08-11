package com.example.travelapp.services;

import com.example.travelapp.entity.Customer;
import com.example.travelapp.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    private  final CustomerRepository repository;
    public CustomerService(CustomerRepository repository){
        this.repository=repository;
    }
    public List<Customer> findAll(){return  repository.findAll();}
    public Customer findById(Long id){return repository.findById(id).orElse(null);}
    public Customer save(Customer c) { return repository.save(c); }
    public void delete(Long id) { repository.deleteById(id); }


}
