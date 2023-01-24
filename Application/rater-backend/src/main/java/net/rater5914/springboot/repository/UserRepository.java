package net.rater5914.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.rater5914.springboot.model.*;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
