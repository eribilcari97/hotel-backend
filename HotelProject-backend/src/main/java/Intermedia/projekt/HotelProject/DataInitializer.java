package Intermedia.projekt.HotelProject;

import Intermedia.projekt.HotelProject.entity.Room;
import Intermedia.projekt.HotelProject.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public void run(String... args) {
        // Only seed data if the rooms table is empty
        if (roomRepository.count() == 0) {
            roomRepository.save(new Room(
                    "Standard Single Room",
                    "Single",
                    79.00,
                    "A cozy room for solo travelers with a queen bed, work desk, and city view.",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
                    true
            ));
            roomRepository.save(new Room(
                    "Deluxe Double Room",
                    "Double",
                    129.00,
                    "Spacious room with two double beds, perfect for couples or small families.",
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
                    true
            ));
            roomRepository.save(new Room(
                    "Executive King Suite",
                    "Suite",
                    199.00,
                    "Luxury suite with a king bed, separate living area, and panoramic ocean view.",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                    true
            ));
            roomRepository.save(new Room(
                    "Family Room",
                    "Family",
                    159.00,
                    "Large family room with bunk beds and a king bed — great for a family of four.",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
                    true
            ));

            System.out.println(" Sample rooms added to the database!");
        }
    }
}
