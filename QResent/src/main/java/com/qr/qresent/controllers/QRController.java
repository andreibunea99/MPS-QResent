package com.qr.qresent.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
public class QRController {

    @RequestMapping(value = "/qr/{id}/{tokenAdmin}/{module}", method = GET)
    @ResponseBody
    public String generateToken (@PathVariable String id, @PathVariable String tokenAdmin,
                                 @PathVariable String module) {
        return "Login with id=" + id + " tokenAdmin:" + tokenAdmin + " and module=" + module;
    }

    @RequestMapping(value = "/qr/{id}/{tokenAdmin}/{module}/{token}", method = POST)
    @ResponseBody
    public String checkToken (@PathVariable String id, @PathVariable String tokenAdmin,
                              @PathVariable String module, @PathVariable String token) {
        return "Login with id=" + id + " tokenAdmin:" + tokenAdmin + " and module=" + module + " token=" + token;
    }

    @RequestMapping(value = "/professor/{id}/{tokenAdmin}/{module}", method = GET)
    @ResponseBody
    public String listAttendance (@PathVariable String id, @PathVariable String tokenAdmin,
                                  @PathVariable String module) {
        return "Login with id=" + id + " tokenAdmin:" + tokenAdmin + " and module=" + module;
    }
}
