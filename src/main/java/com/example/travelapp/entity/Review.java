package com.example.travelapp.entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;
    private String comment;
    private LocalDateTime date;

    public Review(){}
    public Review(String comment,LocalDateTime date,int rating){
        this.comment=comment;
        this.date=date;
        this.rating=rating;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public String getComment(){
        return comment;
    }
    public void setComment(String comment){
        this.comment=comment;
    }
    public LocalDateTime getDate(){
        return date;
    }
    public void setDate(LocalDateTime date){
        this.date=date;
    }
    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
    @ManyToOne
    private Booking booking;
    @ManyToOne
    private Customer customer;
}
