package com.erlandaslisauskas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "metai")
public class Metai {

    @Id
    @Column(unique = true)
    private int metuSkaicius;

    private String menuo;
    private int dienuSkaicius;
    private String rytuHoroskopas;

    @JsonIgnore
    @OneToMany
    private Set<Svente> sventes = new HashSet<>();

    public Metai(int metuSkaicius) {
        this.metuSkaicius = metuSkaicius;
    }

    public Metai() {

    }

    public int getMetuSkaicius() {
        return metuSkaicius;
    }

    public void setMetuSkaicius(int metuSkaicius) {
        this.metuSkaicius = metuSkaicius;
    }

    public String getMenuo() {
        return menuo;
    }

    public void setMenuo(String menuo) {
        this.menuo = menuo;
    }

    public int getDienuSkaicius() {
        return dienuSkaicius;
    }

    public void setDienuSkaicius(int dienuSkaicius) {
        this.dienuSkaicius = dienuSkaicius;
    }

    public String getRytuHoroskopas() {
        return rytuHoroskopas;
    }

    public void setRytuHoroskopas(String rytuHoroskopas) {
        this.rytuHoroskopas = rytuHoroskopas;
    }
}