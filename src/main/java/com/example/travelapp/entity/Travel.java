package com.example.travelapp.entity;
import com.example.travelapp.enums.TransportType;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity

public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private String operator;
    private String referenceNumber;
    @Enumerated(EnumType.STRING)
    private TransportType transportType;
    public Travel(){}
    public Travel(LocalDateTime departureTime,LocalDateTime arrivalTime,String operator,String referenceNumber,TransportType transportType){
        this.departureTime=departureTime;
        this.arrivalTime=arrivalTime;
        this.operator=operator;
        this.referenceNumber=referenceNumber;
        this.transportType=transportType;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public LocalDateTime getDepartureTime(){
        return departureTime;
    }
    public void setDepartureTime(LocalDateTime departureTime){
        this.departureTime=departureTime;
    }
    public LocalDateTime getArrivalTime(){
        return arrivalTime;
    }
    public void setArrivalTime(LocalDateTime arrivalTime){
        this.arrivalTime=arrivalTime;
    }
    public String getOperator(){
        return operator;
    }
    public void setOperator(String operator){
        this.operator=operator;
    }
    public String getReferenceNumber(){
        return referenceNumber;
    }
    public void setReferenceNumber(String referenceNumber){
        this.referenceNumber=referenceNumber;
    }
    public TransportType getTransportType(){
        return transportType;
    }
    public void setTransportType(TransportType transportType){
        this.transportType=transportType;
    }


    @ManyToOne
    private Destination destination;
    @OneToMany(mappedBy = "travel")
    private List<Booking> bookings;
}
