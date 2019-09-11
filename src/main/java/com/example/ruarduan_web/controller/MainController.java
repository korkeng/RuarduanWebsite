/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.ruarduan_web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Value;

/**
 *
 * @author Sawaros
 */
@Controller
public class MainController {

    @Value("${secretRegi}")
    private String secretRegi;

    @GetMapping("/")
        public String Main(){
            return "index";
    }

    @GetMapping("/login")
        public String Login(){
            return "login";
    }

    @GetMapping("/registration")
        public String Regis(Model model){
            model.addAttribute("secretRegi",secretRegi);
            return "registration";
    }

    @GetMapping("/accounts")
        public String Account(){
            return "accounts";
    }

    @GetMapping("/boats")
        public String Boat(){
            return "boats";
    }

    @GetMapping("/piers")
        public String Pier(){
            return "piers";
    }

    @GetMapping("/places")
        public String Place(){
            return "places";
    }

    @GetMapping("/boat_schedule")
        public String BoatSchedule(){
            return "boatschedule";
    }

    @GetMapping("/boat_pier")
        public String BoatPier(){
            return "boatpier";
    }

    @GetMapping("/placetype_place")
        public String PlacetypePlace(){
            return "placetypeplace";
    }

    // @GetMapping("/pier_nearby")
    //     public String Place(){
    //         return "pier_nearby";
    // }
}

