package com.erlandaslisauskas.serviceImplementation;

import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.model.Svente;
import com.erlandaslisauskas.repository.SventeRepository;
import com.erlandaslisauskas.service.SventeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SventeServiceImplementation implements SventeService {

    private SventeRepository sventeRepository;

    public SventeServiceImplementation(SventeRepository sventeRepository) {
        this.sventeRepository = sventeRepository;
    }

    @Override
    public Salis getSalisInSvente(String saliesPavadinimas) {
        Svente filteredSvente = sventeRepository.findAll().stream()
                .filter(svente -> svente.getSalis().getPavadinimas().equals(saliesPavadinimas))
                .findAny().orElse(null);
        assert filteredSvente != null;
        return filteredSvente.getSalis();
    }
}
