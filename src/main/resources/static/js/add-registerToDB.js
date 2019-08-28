function addAccount(){
    var roleId = 0;
    var objectRegister = {
        // accountId: document.getElementById("accountId").value,
        empCode: document.getElementById("Emp_code").value,
        firstName: document.getElementById("FirstName").value,
        lastName: document.getElementById("LastName").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone").value,
        userName: document.getElementById("Username").value,
        password: document.getElementById("Password").value
    }
    if (document.getElementById("Emp_code").value.substring(0,1) == "A") {
        roleId = 1;
    } else {
        roleId = 2;
    }

    if (objectRegister.empCode!= "") {
        $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "http://139.99.117.190:8080/account/"+roleId,
                    data : JSON.stringify(objectRegister),
                   dataType : 'json',
                    success : function() {
                        alert("Add Account Successful !!");
                        console.log(JSON.stringify(objectRegister));
                        window.location="/login";
                    },
                    error : function(e) {
                      alert("Error!")
                      console.log("ERROR: ", e);
                      console.log(JSON.stringify(objectRegister));
                    }
                });
    }else{
        alert("Fill all form!")
    }
    

}