package com.example.ruarduan_web.config;

import com.example.ruarduan_web.controller.AccountAdapter;
import com.example.ruarduan_web.controller.UserDetailServiceImp;
import com.example.ruarduan_web.model.AccountModel;
import com.example.ruarduan_web.model.RoleModel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@Controller
public class WebSecurity extends WebSecurityConfigurerAdapter {
    
    @Bean
    public UserDetailsService userDetailsService(){
        return new UserDetailServiceImp();
    };
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(
                    "/boats",//add for check code
                    "/piers",//add for check code
                    "/places",//add for check code
                    "/accounts",//add for check code
                    "/registration",
                    "/login",
                    "/images/**",
                    "/css/**",
                    "/js/**",
                    "/icon/**",
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

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
    }
}