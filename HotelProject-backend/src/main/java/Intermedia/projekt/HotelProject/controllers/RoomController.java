package Intermedia.projekt.HotelProject.controllers;
import Intermedia.projekt.HotelProject.Service.RoomService;
import Intermedia.projekt.HotelProject.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;


    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
        Optional<Room> room = roomService.getRoomById(id);


        if (room.isPresent()) {
            return ResponseEntity.ok(room.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
