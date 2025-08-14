package com.example.travelapp.entity;

import jakarta.persistence.*;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private Integer loyaltyPoints;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Customer() {}

    public Customer(String name, String phone, Integer loyaltyPoints, User user) {
        this.name = name;
        this.phone = phone;
        this.loyaltyPoints = loyaltyPoints;
        this.user = user;
    }

    // Getters / Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Integer getLoyaltyPoints() { return loyaltyPoints; }
    public void setLoyaltyPoints(Integer loyaltyPoints) { this.loyaltyPoints = loyaltyPoints; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
