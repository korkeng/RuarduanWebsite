package com.example.ruarduan_web.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;

import com.example.ruarduan_web.model.AccountModel;
import com.example.ruarduan_web.model.UserModel;

import org.apache.tomcat.util.codec.binary.Base64;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class UserDetailServiceImp implements UserDetailsService {

    @Autowired
    private AccountAdapter accountAdapter;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = findUserbyUsername(username);
        
        UserBuilder builder = null;
        if (user != null) {
            builder = User.withUsername(username);
            builder.password(new BCryptPasswordEncoder().encode(user.getPassword()));
            builder.roles(user.getRoles());
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();
    }

    private UserModel findUserbyUsername(String username) {
        try{
            AccountModel userDetail = accountAdapter.getUser(username);
            if(userDetail != null&&userDetail.getEmpCode().startsWith("A")){
                String token = ""+userDetail.getPassword();
                String jwtToken = ""+token.substring(0,36)+"."+token.substring(36, token.length()-43)+"."+token.substring(token.length()-43,token.length());               
                String[] split_string = jwtToken.split("\\.");
                String base64EncodedBody = split_string[1];
                Base64 base64Url = new Base64(true);
                String body = new String(base64Url.decode(base64EncodedBody)); 
                JSONObject obj = new JSONObject(body);
                return new UserModel(userDetail.getUserName(), obj.getString("password"), "USER");
            }
            return null;
        }catch(Exception e){
            System.out.println(""+e);
        }
        return null;
    }
}
