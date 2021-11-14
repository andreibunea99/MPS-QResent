package com.qr.qresent.services;

import com.google.common.hash.Hashing;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class AuthenticationService {

    Map<Long, String> profMap = new HashMap<>();
    Map<Long, String> studMap = new HashMap<>();
    Map<Long, String> adminMap = new HashMap<>();

    public String getToken(String originalString) {
        String sha256hex = Hashing.sha256()
                .hashString(originalString, StandardCharsets.UTF_8)
                .toString();
        return sha256hex;
    }

    public String getTokenProf(String originalString) {
        String hiddenKey = "Team2ProfToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);


        return getToken(originalString);
    }

    public String getTokenStudent(String originalString) {
        String hiddenKey = "Team2StudToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);

        return getToken(originalString);
    }

    public String getTokenAdmin(String originalString) {
        String hiddenKey = "Team2AdminToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);

        return getToken(originalString);
    }

    public Boolean isProfessor(Long id, String token) {
        if (profMap.containsKey(id) && Objects.equals(profMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    public Boolean isStudent(Long id, String token) {
        if (studMap.containsKey(id) && Objects.equals(studMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    public Boolean isAdmin(Long id, String token) {
        if (adminMap.containsKey(id) && Objects.equals(adminMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }
}
