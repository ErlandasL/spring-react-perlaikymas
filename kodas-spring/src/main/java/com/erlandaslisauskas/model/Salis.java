package com.erlandaslisauskas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "salys")
public class Salis {

    @Id
    @Length(min = 3)
    private String pavadinimas;

    private String veliavosNuotraukosImgUrl;

    private String prezidentas;

    @JsonIgnore
    @OneToMany
    private Set<Svente> sventes = new HashSet<>();

    public Salis(String pavadinimas, String veliavosNuotraukosImgUrl, String prezidentas) {
        this.pavadinimas = pavadinimas;
        this.veliavosNuotraukosImgUrl = veliavosNuotraukosImgUrl;
        this.prezidentas = prezidentas;
    }

    public Salis() {

    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public String getVeliavosNuotraukosImgUrl() {
        return veliavosNuotraukosImgUrl;
    }

    public void setVeliavosNuotraukosImgUrl(String veliavosNuotraukosImgUrl) {
        this.veliavosNuotraukosImgUrl = veliavosNuotraukosImgUrl;
    }

    public String getPrezidentas() {
        return prezidentas;
    }

    public void setPrezidentas(String prezidentas) {
        this.prezidentas = prezidentas;
    }

    public Set<Svente> getSventes() {
        return sventes;
    }

    public void setSventes(Set<Svente> sventes) {
        this.sventes = sventes;
    }
}
