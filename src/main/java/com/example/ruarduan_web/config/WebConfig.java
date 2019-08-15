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
import nz.net.ultraq.thymeleaf.LayoutDialect;
import org.springframework.context.annotation.Bean;


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
            "/images/**",
            "/css/**",
            "/js/**",
            "/vendor/**",
            "/fragments/**"
        ).addResourceLocations(
                "classpath:/static/images/",
                "classpath:/static/css/",
                "classpath:/static/js/",
                "classpath:/static/vendor/",
                "classpath:/templates/fragments/"
        );
    }
    @Bean
    public LayoutDialect layoutDialect() {
        return new LayoutDialect();
    }
}
