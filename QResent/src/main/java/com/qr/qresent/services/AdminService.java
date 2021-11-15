package com.qr.qresent.services;

import com.qr.qresent.dao.Admin;
import com.qr.qresent.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }

    public Admin save(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin getById(Integer id) {
        return adminRepository.getById(id);
    }

    public List<Admin> getByEmail(String email) {
        return adminRepository.findByEmail(email);
    }
}
