package Intermedia.projekt.HotelProject.Service;


import Intermedia.projekt.HotelProject.entity.Booking;
import Intermedia.projekt.HotelProject.entity.Room;
import Intermedia.projekt.HotelProject.repository.BookRepository;
import Intermedia.projekt.HotelProject.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookRepository bookingrepository;
    @Autowired
    private RoomRepository roomRepository;

    public Booking createBooking(Booking bookingRequest,Long roomId){

        Optional<Room> roomOptional = roomRepository.findById(roomId);

        if(roomOptional.isEmpty()){
            throw new RuntimeException("Dhoma nuk u gjet me ID"+roomId);

        }
        Room room = roomOptional.get();
        bookingRequest.setRoom(room);

        return bookingrepository.save(bookingRequest);

    }
}
