package com.erlandaslisauskas;

import com.erlandaslisauskas.model.Salis;
import com.erlandaslisauskas.model.Svente;
import com.erlandaslisauskas.model.SventesTipas;
import com.erlandaslisauskas.repository.SalisRepository;
import com.erlandaslisauskas.repository.SventeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KodasSpringApplication implements CommandLineRunner {

    private SventeRepository sventeRepository;
    private SalisRepository salisRepository;

    public KodasSpringApplication(SventeRepository sventeRepository, SalisRepository salisRepository) {
        this.sventeRepository = sventeRepository;
        this.salisRepository = salisRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(KodasSpringApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Svente sv1 = new Svente("Nepriklausomybes atkurimo svente",
                "svente skirta pamineti lietuvos nepriklausomybei",
                true, SventesTipas.TAUTINE_RELIGINE);
        sventeRepository.save(sv1);

        Salis lietuva = new Salis("Lietuva",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt7EnHoG4l5GWJTkU7OYP0owpSXfH2_9zYQ&usqp=CAU", "Gitanas Nauseda");
        salisRepository.save(lietuva);

        sv1.setSalis(lietuva);
        lietuva.getSventes().add(sv1);
    }
}
