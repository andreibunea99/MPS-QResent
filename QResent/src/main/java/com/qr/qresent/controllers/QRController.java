package com.qr.qresent.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
public class QRController {
    @RequestMapping(value = "/qrSubmit", method = POST)
    @ResponseBody
    public String qrSubmit (@RequestParam(value = "email") String email, @RequestParam(value = "token") String token,
                            @RequestParam(value = "course") String course, @RequestParam(value = "date") String date) {
        return email + " " + token + " " + email + " " + course + " " + date;
    }
}
