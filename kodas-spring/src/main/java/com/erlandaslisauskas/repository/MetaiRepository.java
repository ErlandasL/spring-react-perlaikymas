package com.erlandaslisauskas.repository;

import com.erlandaslisauskas.model.Metai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetaiRepository extends JpaRepository<Metai, Integer> {
}
