$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/roles",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Role ID</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "ROLE Table";
            if (document.getElementById("dataTable").rows.length == 0) {
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].roleId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].roleName;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].roleId+")\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].roleId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").style.display = "block";
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRole()\">"+
                                                                    "ADD ROLE"+
                                                                    "</button>";
                 
            } else {
                tableData.destroy();
                for (i = 0; i < dataLength+2; i++) {
                    document.getElementById("dataTable").deleteRow(0);
                }
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].roleId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].roleName;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].roleId+")\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].roleId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length
                document.getElementById("tableAddData").style.display = "block";
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRole()\">"+
                                                                    "ADD ROLE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});


function changeViewRole() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/roles",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Role ID</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "ROLE Table";
            if (document.getElementById("dataTable").rows.length == 0) {
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].roleId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].roleName;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].roleId+")\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].roleId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").style.display = "block"; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRole()\">"+
                                                                    "ADD ROLE"+
                                                                    "</button>";
                 
            } else {
                tableData.destroy();
                for (i = 0; i < dataLength+2; i++) {
                    document.getElementById("dataTable").deleteRow(0);
                }
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].roleId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].roleName;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].roleId+")\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].roleId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").style.display = "block";
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRole()\">"+
                                                                    "ADD ROLE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}


function changeViewStaff() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/roles/2",
        dataType: 'json',   
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "STAFF Table";
            if (document.getElementById("dataTable").rows.length == 0) {
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].accountId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].empCode;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].firstName;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].lastName;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].email;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].phone;
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].userName;
                                break;
                            // case 7:
                            //     cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editStaff("+data[i].accountId+")\">Edit</button></span>";
                            //     break;
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteStaff("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").style.display = "none";

                // document.getElementById("tableAddData").style.display = "block";
                // document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addStaff()\">"+
                //                                                     "ADD STAFF"+
                //                                                     "</button>";
                 
            } else {
                tableData.destroy();
                for (i = 0; i < dataLength+2; i++) {
                    document.getElementById("dataTable").deleteRow(0);
                }
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].accountId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].empCode;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].firstName;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].lastName;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].email;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].phone;
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].userName;
                                break;
                            // case 7:
                            //     cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editStaff("+data[i].accountId+")\">Edit</button></span>";
                            //     break;
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteStaff("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").style.display = "none";

                // document.getElementById("tableAddData").style.display = "block";
                // document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addStaff()\">"+
                //                                                     "ADD STAFF"+
                //                                                     "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewAdmin() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/roles/1",
        dataType: 'json',   
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Admin Table";
            if (document.getElementById("dataTable").rows.length == 0) {
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].accountId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].empCode;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].firstName;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].lastName;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].email;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].phone;
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].userName;
                                break;
                            // case 7:
                            //     cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editAdmin("+data[i].accountId+")\">Edit</button></span>";
                            //     break;
                            // case 8:
                            //     cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteAdmin("+data[i].accountId+")\">Delete</button></span>";
                            //     break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;
                document.getElementById("tableAddData").style.display = "none";
                 
            } else {
                tableData.destroy();
                for (i = 0; i < dataLength+2; i++) {
                    document.getElementById("dataTable").deleteRow(0);
                }
                var header = document.getElementById("myThHeader");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooter");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBody");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].accountId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].empCode;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].firstName;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].lastName;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].email;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].phone;
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].userName;
                                break;
                            // case 7:
                            //     cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editAdmin("+data[i].accountId+")\">Edit</button></span>";
                            //     break;
                            // case 8:
                            //     cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteAdmin("+data[i].accountId+")\">Delete</button></span>";
                            //     break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").style.display = "none";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}


function addRole(){

    var divRole =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRole" class="form-detail">'+
                '<h2>Role Table</h2>'+
                '<div class="form-row">'+
                    '<span>Role Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBRole" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRole;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBRole");
    btnclose.onclick = function() {
        var objectRole = {
            roleId: document.getElementById("valId").value,
            roleName:   document.getElementById("valName").value
        }
        swal({
            title: 'Add Role Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectRole.roleId != "" && objectRole.roleName != ""){
                $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/role/"+objectRole.roleId,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/role",
                                    data : JSON.stringify(objectRole),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        changeViewRole();
                                    },
                                    error : function(e) {
                                        swal(
                                        'Error!!',
                                        'Something went wrong.',
                                        'error');
                                        console.log("ERROR: ", e);
                                    }
                                });
                            }
                            else{
                                swal(
                                        'Error!!',
                                        'You Add Duplicate Data.',
                                        'error');
                                    }
                            
                        },
                        error : function(e) {
                            swal(
                                        'Complete!!',
                                        'Already add data to database.',
                                        'success');
                            console.log("ERROR: ", e);
                            $.ajax({
                                type : "POST",
                                contentType : "application/json",
                                url : "https://ruarduan-backend.com/role",
                                data : JSON.stringify(objectRole),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    changeViewRole();
                                },
                                error : function(e) {
                                    swal(
                                        'Error!!',
                                        'Something went wrong.',
                                        'error');
                                    console.log("ERROR: ", e);
                                }
                            });
                        }
                    });

            } else {
                swal(
                    'Failure',
                    'Please fill in the textfield.',
                    'error'
                );
            }
            // alertNoClose.show('Successful');
        });
    }
    
}


function editRole(id){
    var divRole =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRole" class="form-detail">'+
                '<h2>Role Table</h2>'+
                '<div class="form-row">'+
                    '<span>Role Id</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBRole" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRole;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBRole");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/role/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.roleId.toString();
            document.getElementById("valName").value = data.roleName;
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    btnclose.onclick = function() {
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function() {
        var objectRole = {
            roleId: document.getElementById("valId").value,
            roleName:   document.getElementById("valName").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/role/update/"+id.toString(),
                data : JSON.stringify(objectRole),
                dataType : 'json',
                success : function() {
                    swal({
                        title: 'Successful!!',
                        confirmButtonText: 'OK',
                        text: 'Your data has been update.',
                        preConfirm: () => {
                            modal.style.display = "none";
                            window.location.reload();
                        }
                    });
                },
                error : function(e) {
                    swal({
                        title: 'Failure!!',
                        confirmButtonText: 'OK',
                        preConfirm: () => {
                            modal.style.display = "none";
                        }
                    });
                  console.log("ERROR: ", e);
                }
            });
            // alertNoClose.show('Successful');
        });
        // modal.style.display = "none";
    }
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
}


function deleteRole(id){
	swal({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#32CD32',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function() {
        $.ajax({
            type : "DELETE",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/roles/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewRole();
            },
            error : function(e) {
                swal(
                    'Failure',
                    'error'
                );
              console.log("ERROR: ", e);
            }
        });
        // alertNoClose.show('Successful');
    });
    console.log("Remove");
}

function deleteStaff(id){
    swal({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#32CD32',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function() {
        $.ajax({
            type : "DELETE",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/account/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewStaff();
            },
            error : function(e) {
                swal(
                    'Failure',
                    'error'
                );
              console.log("ERROR: ", e);
            }
        });
        // alertNoClose.show('Successful');
    });
    console.log("Remove");
}
