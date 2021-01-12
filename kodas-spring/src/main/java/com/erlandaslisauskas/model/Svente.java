package com.erlandaslisauskas.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
@Table(name = "sventes")
public class Svente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Length(min = 3)
    @Column
    private String pavadinimas;

    @Column
    private String aprasymas;

    @Column
    private boolean veliavosIskelimas;

    @Column
    private SventesTipas sventesTipas;

    @JsonIgnore
    @ManyToOne
    private Salis salis;

    @JsonIgnore
    @ManyToOne
    private Metai metai;

    public Svente(String pavadinimas, String aprasymas, boolean veliavosIskelimas, SventesTipas sventesTipas) {
        this.pavadinimas = pavadinimas;
        this.aprasymas = aprasymas;
        this.veliavosIskelimas = veliavosIskelimas;
        this.sventesTipas = sventesTipas;
    }

    public Svente() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public String getAprasymas() {
        return aprasymas;
    }

    public void setAprasymas(String aprasymas) {
        this.aprasymas = aprasymas;
    }

    public boolean isVeliavosIskelimas() {
        return veliavosIskelimas;
    }

    public void setVeliavosIskelimas(boolean veliavosIskelimas) {
        this.veliavosIskelimas = veliavosIskelimas;
    }

    public SventesTipas getSventesTipas() {
        return sventesTipas;
    }

    public void setSventesTipas(SventesTipas sventesTipas) {
        this.sventesTipas = sventesTipas;
    }

    public Salis getSalis() {
        return salis;
    }

    public void setSalis(Salis salis) {
        this.salis = salis;
    }

    public Metai getMetai() {
        return metai;
    }

    public void setMetai(Metai metai) {
        this.metai = metai;
    }
}
