package net.rater5914.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.rater5914.springboot.model.*;
import net.rater5914.springboot.repository.*;


@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {
    
    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public void run(String... args) throws Exception {
        
        this.userRepository.save(new User("Alex", "Book", "abook777@gmail.com"));
        this.ratingRepository.save(new Rating("acting", 8.0));
        
    }
    
}
