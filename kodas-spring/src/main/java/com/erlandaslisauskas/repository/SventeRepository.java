package com.erlandaslisauskas.repository;

import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.model.Svente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SventeRepository extends JpaRepository<Svente, Long> {
    Svente findByPavadinimas(String pavadinimas);
}
