package com.erlandaslisauskas.controller;

import com.erlandaslisauskas.model.Metai;
import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.repository.MetaiRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MetaiController {

    private MetaiRepository metaiRepository;

    public MetaiController(MetaiRepository metaiRepository) {
        this.metaiRepository = metaiRepository;
    }

    @RequestMapping(path = "/metai", method = RequestMethod.GET)
//	@GetMapping("/products")
    public List<Metai> getAllMetai() {
        return metaiRepository.findAll();
    }
}
