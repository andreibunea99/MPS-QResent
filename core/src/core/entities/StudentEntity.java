/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package core.entities;


/**
 *
 * @author crist
 */
public class StudentEntity {
   private String nume;
   private int ID;
   private String prenume;
   private String grupa;
   private String rol;
   private String materie;
   private String data;
   private int idCurs;

   // ID, nume, prenume, grupa, materie, id-curs, data, Rol
   public StudentEntity(String nume, String prenume, String grupa, int ID, String rol, String materie, int idCurs, String data) {
      this.nume = nume;
      this.prenume = prenume;
      this.grupa = grupa;
      this.ID = ID;
      this.materie = materie;
      this.rol = rol;
      this.idCurs = idCurs;
      this.data = data;
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

   public String getGrupa() {
      return this.grupa;
   }

   public void setGrupa(String grupa) {
      this.grupa = grupa;
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

   public String getData() {
      return this.data;
   }

   public void setData(String data) {
      this.data = data;
   }
}