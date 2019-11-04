
$(document).ready(function() {
    "use strict";
    
    var input = $('.validate-input .input100');
    
    $('.validate-form').submit( function () {
        var login = {};
        login["username"] = $("#username").val();
        login["password"] = $("#password").val();
        window.localStorage.setItem("dataUsername",login.username);
    });

    $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/account/"+window.localStorage.getItem("dataUsername"),
            dataType : 'json',
            success : function(data) {
                window.localStorage.setItem("adminId",data.accountId);
            },
            error : function(e) {
              console.log("ERROR: ", e);
            }
        });

    $('.validate-form').on('submit',function(){
        console.log("Hello");
        console.log(""+input.length);
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }

        }
        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'text' || $(input).attr('id') == 'username') {
            if($(input).val().trim() == null || $(input).val().trim() == '') {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $(function(){

    $('#logouttime').show();

    setTimeout(function(){
        $('#logouttime').fadeOut('slow');
    },1000);

});
$(function(){

    $('#invaildtime').show();

    setTimeout(function(){
        $('#invaildtime').fadeOut('slow');
    },1000);

});
    
    

});
