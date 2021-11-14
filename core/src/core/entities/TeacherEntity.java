/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package core.entities;

public class TeacherEntity {
    private String nume;
    private int ID;
    private String prenume;
    private String rol;
    private String materie;
    private int idCurs;

    // ID, nume, prenume, materie, id-curs, data, Rol
   public TeacherEntity(String nume, String prenume, int ID, String rol, String materie, int idCurs) {
      this.nume = nume;
      this.prenume = prenume;
      this.ID = ID;
      this.materie = materie;
      this.rol = rol;
      this.idCurs = idCurs;
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

    public int getIdCurs() {
        return this.idCurs;
    }

    public void setIdCurs(int idCurs) {
        this.idCurs = idCurs;
    }

    public String getMaterie() {
        return this.materie;
    }

    public void setMaterie(String materie) {
        this.materie = materie;
    }
}