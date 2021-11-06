package com.qr.qresent.controllers;

import com.qr.qresent.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
public class HomeController {

    @Autowired
    AuthenticationService authService;

    @RequestMapping(value = "/login/{id}/{passwd}", method = POST)
    @ResponseBody
    public String login (@PathVariable String id, @PathVariable String passwd) {
        return "Login with id=" + id + " and password=" + passwd;
    }

    @RequestMapping(value = "/signup/{id}/{passwd}/{email}", method = POST)
    @ResponseBody
    public String signup (@PathVariable String id, @PathVariable String passwd, @PathVariable String email) {
        return "Login with id=" + id + " and password=" + passwd + " and email:" + email;
    }

    @RequestMapping(value = "/test/{name}", method = GET)
    @ResponseBody
    public String signup (@PathVariable String name) {
        return "Generated token=" + authService.getToken(name);
    }

}
