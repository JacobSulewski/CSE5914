package net.rater5914.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ratings")

public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "category")
    private String category;
    @Column(name = "val")
    private double val;
    
    public Rating() {

    }

    public Rating(String category, double value) {
        this.category = category;
        this.val = value;
    }

    public String getCategory() {
        return category;
    }

    public double getVal() {
        return val;
    }

    public long getId() {
        return id;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setVal(double value) {
        this.val = value;
    }

    public void setId(long id) {
        this.id = id;
    }

    
    
}
