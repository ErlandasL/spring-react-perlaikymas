package com.erlandaslisauskas.controller;

import com.erlandaslisauskas.exception.ResourceNotFoundException;
import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.model.Svente;
import com.erlandaslisauskas.repository.SventeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SventeController {

    private SventeRepository sventeRepository;

    public SventeController(SventeRepository sventeRepository) {
        this.sventeRepository = sventeRepository;
    }

    // get all products
    @RequestMapping(path = "/sventes", method = RequestMethod.GET)
//	@GetMapping("/products")
    public List<Svente> getAllSventes() {
        return sventeRepository.findAll();
    }

    // create product rest api
    @CrossOrigin(origins = "http://localhost:3000/admin/add-svente")
//	@RequestMapping(path = "/sventes", method = RequestMethod.POST)
    @PostMapping("/sventes")
    public Svente createSvente(@RequestBody Svente svente) {


        return sventeRepository.save(svente);
    }

    //get product rest api
    @CrossOrigin(origins = "http://localhost:3000/details/svente")
    @GetMapping("sventes/{id}")
    public ResponseEntity<Svente> getProductById(@PathVariable Long id) {

        Svente svente = sventeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
        return ResponseEntity.ok(svente);
    }

    // update product rest api
    @CrossOrigin(origins = "http://localhost:3000/admin/update-svente")
    @PutMapping("/sventes/{id}")
    public ResponseEntity<Svente> updateProduct(@PathVariable Long id, @RequestBody Svente sventeDetails) {

        Svente svente = sventeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        svente.setAprasymas(sventeDetails.getAprasymas());
        svente.setMetai(svente.getMetai());
        svente.setSventesTipas(svente.getSventesTipas());
        svente.setSalis(svente.getSalis());
        svente.setVeliavosIskelimas(svente.isVeliavosIskelimas());
        svente.setPavadinimas(svente.getPavadinimas());


        Svente updatedSvente = sventeRepository.save(svente);
        return ResponseEntity.ok(updatedSvente);
    }

    // delete product rest api
    @CrossOrigin(origins = "http://localhost:3000/admin")
    @DeleteMapping("/sventes/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteSvente(@PathVariable Long id) {
        Svente svente = sventeRepository.findById(id).orElseThrow();

        sventeRepository.delete(svente);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//    @GetMapping("/sventes/{saliesPavadinimas}")
//    public String getSaliesPavadinimasVeliava(String saliesPavadinimas) {
//         List<Svente> filteredSvente =
//                 sventeRepository.findAll().stream()
//                         .filter(sv -> sv.getSalis().getPavadinimas().equals(saliesPavadinimas)).collect(Collectors.toList());
//         String url = filteredSvente.stream().map(sv -> sv.getSalis().getVeliavosNuotraukosImgUrl()).findAny().orElse(null);
//         return url;
//    }

}
