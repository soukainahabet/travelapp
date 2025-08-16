package com.example.travelapp.entity;

import com.example.travelapp.enums.BookingStatus;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime creationDate;
    private Integer seats;
    private String specialRequests;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Travel travel;

    @ManyToOne
    private Hotel hotel;

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    private Payment payment;

    @OneToMany(mappedBy = "booking")
    private List<Review> reviews;
    @Column(name = "booking_date", nullable = false)
    private LocalDateTime bookingDate;


    // Constructeur par défaut
    public Booking() {}

    // Constructeur avec les champs principaux
    public Booking(LocalDateTime creationDate, Integer seats, String specialRequests, BookingStatus status) {
        this.creationDate = creationDate;
        this.seats = seats;
        this.specialRequests = specialRequests;
        this.status = status;
        this.bookingDate = LocalDateTime.now(); // Par défaut, date actuelle

    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public String getSpecialRequests() {
        return specialRequests;
    }

    public void setSpecialRequests(String specialRequests) {
        this.specialRequests = specialRequests;
    }

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public void setBookingDate(LocalDateTime bookingDate) {
        this.bookingDate = bookingDate;
    }
    public void setBookingDateNow() {
        this.bookingDate = LocalDateTime.now();
    }


}
