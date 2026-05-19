package Intermedia.projekt.HotelProject.entity;
import jakarta.persistence.*;

@Entity
@Table(name="rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String type;
    private double price;
    private String description;
    private String imageUrl;
    private boolean available;

    public Room(){}

    public Room(String name,  String type,  double price,String description, String imageUrl,boolean available) {
        this.available = available;
        this.description = description;
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this.type = type;
    }

    public boolean isAvailable() {
        return available;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getType() {
        return type;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setType(String type) {
        this.type = type;
    }
}
