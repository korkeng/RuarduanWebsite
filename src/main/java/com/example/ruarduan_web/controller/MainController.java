/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.ruarduan_web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author Sawaros
 */
@Controller
public class MainController {
    @GetMapping("/")
    public String Main(){
        return "index";
    }
    @GetMapping("/template")
    public String Template(){
    
        return "indexWithTemplate";
    }
    @GetMapping("/login")
    public String Login(){
    
        return "login";
    }
    @GetMapping("/registration")
    public String Regis(){
    
        return "registration";
    }
    @GetMapping("/accounts")
    public String Account(){
    
        return "accounts";
    }
}

