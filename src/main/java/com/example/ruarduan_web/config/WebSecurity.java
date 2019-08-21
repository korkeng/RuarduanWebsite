package com.example.ruarduan_web.config;

import com.example.ruarduan_web.controller.AccountAdapter;
import com.example.ruarduan_web.model.AccountModel;
import com.example.ruarduan_web.model.RoleModel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.stereotype.Controller;

@Configuration
@EnableWebSecurity
@Controller
public class WebSecurity extends WebSecurityConfigurerAdapter {
    
    @Autowired
    private AccountAdapter accountService;

    @Autowired
    private AuthenticationManagerBuilder auth;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(
                    "/registration",
                    "/login",
                    "/images/**",
                    "/css/**",
                    "/js/**",
                    "/vendor/**",
                    "/fragments/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/")
                .permitAll()
                .and()
                .logout()
                .permitAll()
                .and().csrf().disable(); // we'll enable this in a later blog post
    }

    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder authMBuilder) throws Exception {
        AccountModel[] accObject = accountService.getAllUser();
        if(accObject != null){
            for(AccountModel adm : accObject){
                authMBuilder
                    .inMemoryAuthentication()
                    .withUser(""+adm.getUserName()).password("{noop}"+adm.getPassword()).roles("ADMIN");  
            }
            System.out.print("Finish Load");
        }
    }
}