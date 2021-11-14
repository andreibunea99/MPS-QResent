/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package core.dao;
import core.entities.AdminEntity;
import java.util.List;
import java.util.ArrayList;
/**
 *
 * @author crist
 */

public class AdminDAOImpl implements AdminDAO {
    List<AdminEntity> admins;

   public AdminDAOImpl(){
        admins = new ArrayList<>();
   }

    @Override
    public void insertAdmin(AdminEntity admin) {
        admins.add(new AdminEntity(admin.getNume(), admin.getPrenume(), admin.getID(), admin.getRol()));
    }

    /**
     *
     * @param admin
     */
    @Override
    public void deleteAdmin(AdminEntity admin) {
        admins.remove(admin.getID());
        System.out.println("Admin with ID: " + admin.getID() + ", deleted from database");
    }

    @Override
    public AdminEntity getAdmin(int ID) {
        return admins.get(ID);
    }

    @Override
    public void updateAdmin(AdminEntity admin) {
        admins.get(admin.getID()).setNumePrenume(admin.getNume(), admin.getPrenume());
        admins.get(admin.getID()).setRol(admin.getRol());
        System.out.println("Admin with ID " + admin.getID() + ", updated in the database");
    }
}