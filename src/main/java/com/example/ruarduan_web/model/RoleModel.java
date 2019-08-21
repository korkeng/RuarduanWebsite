package com.example.ruarduan_web.model;

import com.example.ruarduan_web.model.AccountModel;
import java.util.List;



public class RoleModel {

    private int roleId;
    private String roleName;
    private List<AccountModel> listaccount;

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public List<AccountModel> getListaccount() {
        return listaccount;
    }

    public void setListaccount(List<AccountModel> listaccount) {
        this.listaccount = listaccount;
    }

    
}
