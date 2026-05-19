package Intermedia.projekt.HotelProject.repository;

import Intermedia.projekt.HotelProject.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BookRepository extends JpaRepository<Booking,Long> {
}
