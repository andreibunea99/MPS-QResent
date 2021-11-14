/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.entities;

public class AdminEntity {
    private String nume;
    private String prenume;
    private int ID;
    private String rol;


    // ID, nume, prenume, Rol
   public AdminEntity(String nume, String prenume, int ID, String rol) {
      this.nume = nume;
      this.prenume = prenume;
      this.ID = ID;
      this.rol = rol;
   }

    public String getNume() {
        return this.nume;
    }

    public String getPrenume() {
        return this.prenume;
    }

    public void setNumePrenume(String nume, String prenume) {
        this.nume = nume;
        this.prenume = prenume;
    }

    public int getID() {
        return this.ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getRol() {
        return this.rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}