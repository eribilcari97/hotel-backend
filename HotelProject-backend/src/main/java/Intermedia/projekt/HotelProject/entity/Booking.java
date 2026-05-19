package Intermedia.projekt.HotelProject.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name ="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private LocalDate checkIn;
    private LocalDate checkOut;

    @ManyToOne //many booking to one room;
    @JoinColumn(name="room_id")
    private Room room;

    public Booking(){}

    public Booking(LocalDate checkIn, LocalDate checkOut, String email, Long id, String name, Room room) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.email = email;
        this.id = id;
        this.name = name;
        this.room = room;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Room getRoom() {
        return room;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
