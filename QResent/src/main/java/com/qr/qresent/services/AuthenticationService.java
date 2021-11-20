package com.qr.qresent.services;

import com.google.common.hash.Hashing;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class AuthenticationService {

    Map<Integer, String> profMap = new HashMap<>();
    Map<Integer, String> studMap = new HashMap<>();
    Map<Integer, String> adminMap = new HashMap<>();

    public String getToken(String originalString) {
        String sha256hex = Hashing.sha256()
                .hashString(originalString, StandardCharsets.UTF_8)
                .toString();
        return sha256hex;
    }

    public String getTokenProf(String originalString, Integer id) {
        String hiddenKey = "Team2ProfToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);


        String token = getToken(originalString);

        profMap.put(id, token);

        return token;
    }

    public String getTokenStuden(String originalString, Integer id) {
        String hiddenKey = "Team2StudToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);

        String token = getToken(originalString);

        studMap.put(id, token);

        return token;
    }

    public String getTokenAdmin(String originalString, Integer id) {
        String hiddenKey = "Team2AdminToken";
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);

        String token = getToken(originalString);

        adminMap.put(id, token);

        return token;
    }

    public Boolean isProfessor(Integer id, String token) {
        if (profMap.containsKey(id) && Objects.equals(profMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    public Boolean isStudent(Integer id, String token) {
        if (studMap.containsKey(id) && Objects.equals(studMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    public Boolean isAdmin(Integer id, String token) {
        if (adminMap.containsKey(id) && Objects.equals(adminMap.get(id), token)) {
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }
}
