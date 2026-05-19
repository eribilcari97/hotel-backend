package Intermedia.projekt.HotelProject.controllers;
import Intermedia.projekt.HotelProject.Service.BookingService;
import Intermedia.projekt.HotelProject.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;


    @PostMapping
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking,
            @RequestParam Long roomId) {

        try {
            Booking savedBooking = bookingService.createBooking(booking, roomId);

            return ResponseEntity.ok(savedBooking);
        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().build();
        }
    }
}
