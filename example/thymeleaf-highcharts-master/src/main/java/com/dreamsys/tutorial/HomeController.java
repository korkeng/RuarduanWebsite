package com.dreamsys.tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sushil on 3/21/17.
 */
@Controller

public class HomeController {

    @GetMapping("/")
    public String home(Model model){
        Map<String,Long> barChartData = new HashMap<>();
        barChartData.put("Samsung",5000L);
        barChartData.put("Iphone",10000L);
        barChartData.put("MI",2000L);
        barChartData.put("Lava",4000L);
        barChartData.put("Oppo",3560L);
        barChartData.put("HTC",5560L);
        model.addAttribute("barChartData",barChartData);
        return "home";
    }

}
