
$(document).ready(function() {
    "use strict";
    
    var input = $('.validate-input .input100');
    
    $('.validate-form').submit( function () {
        var register = {};
        register["Emp_code"] = $("#Emp_code").val();
        register["FirstName"] = $("#FirstName").val();
        register["LastName"] = $("#LastName").val();
        register["Email"] = $("#Email").val();
        register["Phone"] = $("#Phone").val();
        register["Username"] = $("#Username").val();
        register["Password"] = $("#Password").val();
        console.log("hi")
        
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
        if($(input).attr('type') == 'text' || $(input).attr('id') == 'Emp_code') {
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


var header = {
    "alg": "HS256",
    "typ": "JWT"
  };

  var secret = ""+modelSecretRegi;

  var encodedHeader;
  var encodedData;
  var signature;
  

  function base64url(source) {
    // Encode in classical base64
    encodedSource = CryptoJS.enc.Base64.stringify(source);
    
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');
    
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    
    return encodedSource;
  }
  
function addAccount(){
    // var password = $("#Password").val();
    // var confirmPassword = $("#ConfirmPassword").val();
    var userData = {
        password: document.getElementById("Password").value,
    };

    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    encodedHeader = base64url(stringifiedHeader);

    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(userData));
    encodedData = base64url(stringifiedData);

    signature = encodedHeader + "." + encodedData;
    signature = CryptoJS.HmacSHA256(signature, secret);
    signature = base64url(signature);

    var roleId = 0;
    var objectRegister = {
        // accountId: document.getElementById("accountId").value,
        empCode: document.getElementById("Emp_code").value,
        firstName: document.getElementById("FirstName").value,
        lastName: document.getElementById("LastName").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone").value,
        userName: document.getElementById("Username").value,
        password: ""+encodedHeader+""+encodedData+""+signature
    }
    if (document.getElementById("Emp_code").value.substring(0,1) == "A") {
        roleId = 1;
    } else {
        roleId = 2;
    }

    if (objectRegister.empCode!=""&&objectRegister.firstName!=""&&objectRegister.lastName!=""&&objectRegister.email!=""&&objectRegister.phone!=""&&objectRegister.userName!=""&&objectRegister.password!="") {
        $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/account/"+roleId,
                    data : JSON.stringify(objectRegister),
                   dataType : 'json',
                    success : function() {
                        swal({
                            title: 'Registration Success',
                            text: 'Redirecting...',
                            icon: 'success',
                            timer: 1500,
                            buttons: false,
                        })
                        .then(() => {
                            window.location="/login";
                        })
                        
                                        
                    },
                    error : function(e) {
                      swal("Something went Wrong!","", "error");
                      console.log("ERROR: ", e);
                    }
                });
    }else{
        swal("Please Fill All Form!", "", "warning");
    }
    

}