package com.erlandaslisauskas.repository;

import com.erlandaslisauskas.model.Salis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalisRepository extends JpaRepository<Salis, String> {
}
