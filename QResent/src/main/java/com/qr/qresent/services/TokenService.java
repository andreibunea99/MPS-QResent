package com.qr.qresent.services;

import com.google.common.hash.Hashing;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class TokenService {

    Map<Integer, String> teacherMap = new HashMap<>();

    public String getTokenTeacher(Integer id, String originalString) {
        String hiddenKey = LocalDateTime.now().toString();
        originalString = originalString.substring(0, originalString.length() / 2) + hiddenKey +
                originalString.substring(originalString.length() / 2);
        String sha256hex = Hashing.sha256()
                .hashString(originalString, StandardCharsets.UTF_8)
                .toString();
        teacherMap.put(id, sha256hex);
        return sha256hex;
    }

    public Boolean isTokenToTeacher(Integer id, String token) {
        if (teacherMap.containsKey(id) && Objects.equals(teacherMap.get(id), token)) {
            return Boolean.TRUE;
        }

        return Boolean.FALSE;
    }

    public void removeTokenFromTeacher(Integer id) {
        if (teacherMap.containsKey(id)) {
            teacherMap.remove(id);
        }
    }

    public Integer getIdFromToken(String token) {
        for (Integer id : teacherMap.keySet()) {
            if (teacherMap.get(id).equals(token)) {
                return id;
            }
        }
        return -1;
    }

}
