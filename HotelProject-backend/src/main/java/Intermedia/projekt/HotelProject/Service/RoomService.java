package Intermedia.projekt.HotelProject.Service;

import Intermedia.projekt.HotelProject.entity.Room;
import Intermedia.projekt.HotelProject.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllRooms(){
        return roomRepository.findAll();

    }

    public Optional<Room> getRoomById(Long id){
        return roomRepository.findById(id);
    }
}
