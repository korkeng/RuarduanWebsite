package com.example.ruarduan_web.model;

public class UserModel {
    private String username;
    private String password;
    private String[] roles;

    public UserModel(String username, String password, String... roles) {
      this.setUsername(username);
      this.setPassword(password);
      this.setRoles(roles);
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
  
  }
