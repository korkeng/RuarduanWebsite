(function ($) {
    "use strict";
    
    var input = $('.validate-input .input100');
    
    $('.validate-form').submit( function () {
        
        var login = {};
        login["username"] = $("#username").val();
        login["password"] = $("#password").val();
        window.localStorage.setItem("dataUsername",login.username);
        console.log(typeof login.password);
        console.log(""+login.username);
    });

    $('.validate-form').on('submit',function(){
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
    
    

})(jQuery);

