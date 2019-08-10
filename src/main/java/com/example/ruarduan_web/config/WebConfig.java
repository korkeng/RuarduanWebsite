/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.ruarduan_web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


/**
 *
 * @author Sawaros
 */

@Configuration
@EnableWebMvc

public class WebConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler(
            "/img/**",
            "/css/**",
            "/js/**",
            "/vendor/**",
            "/fragments/**"
        ).addResourceLocations(
                "classpath:/static/img/",
                "classpath:/static/css/",
                "classpath:/static/js/",
                "classpath:/static/vendor/",
                "classpath:/templates/fragments/"
        );
    }
}
