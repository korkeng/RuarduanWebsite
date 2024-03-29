package com.example.ruarduan_web.controller;

import com.example.ruarduan_web.model.AccountModel;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AccountAdapter {

    public AccountModel[] getAllUser(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ruarduan-backend.com/roles/1";
        AccountModel[] account = restTemplate.getForObject(url,AccountModel[].class);
        return account;
    }

    public AccountModel getUser(String name){
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ruarduan-backend.com/account/"+name;
        AccountModel account = restTemplate.getForObject(url,AccountModel.class);
        return account;
    }
}