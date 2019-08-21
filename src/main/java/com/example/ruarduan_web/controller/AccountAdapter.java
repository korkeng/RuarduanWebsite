package com.example.ruarduan_web.controller;

import com.example.ruarduan_web.model.AccountModel;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AccountAdapter {

    public AccountModel[] getAllUser(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://139.99.117.190:8080/roles/1";
        AccountModel[] account = restTemplate.getForObject(url,AccountModel[].class);
        return account;
    }
}