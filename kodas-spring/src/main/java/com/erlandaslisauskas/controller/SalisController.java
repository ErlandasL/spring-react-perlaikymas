package com.erlandaslisauskas.controller;

import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.repository.SalisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SalisController {

    private SalisRepository salisRepository;

    public SalisController(SalisRepository salisRepository) {
        this.salisRepository = salisRepository;
    }

    @RequestMapping(path = "/salys", method = RequestMethod.GET)
//	@GetMapping("/products")
    public List<Salis> getAllSalys() {
        return salisRepository.findAll();
    }
}
