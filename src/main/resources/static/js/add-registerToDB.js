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
                    url : "http://139.99.117.190:8080/account/"+roleId,
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
z                    }
                });
    }else{
        swal("Please Fill All Form!", "", "warning");
    }
    

}