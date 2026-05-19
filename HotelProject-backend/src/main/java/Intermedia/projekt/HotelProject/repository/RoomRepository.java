package Intermedia.projekt.HotelProject.repository;

import Intermedia.projekt.HotelProject.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {

}
