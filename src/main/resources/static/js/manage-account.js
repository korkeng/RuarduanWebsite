$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/roles",
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
        url: "https://139.99.117.190:8080/roles",
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
        url: "https://139.99.117.190:8080/roles/2",
        dataType: 'json',   
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>","<b>Edit</b>","<b>Delete</b>"];
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
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editStaff("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteStaff("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addStaff()\">"+
                                                                    "ADD STAFF"+
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
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editStaff("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteStaff("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addStaff()\">"+
                                                                    "ADD STAFF"+
                                                                    "</button>";
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
        url: "https://139.99.117.190:8080/roles/1",
        dataType: 'json',   
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>","<b>Edit</b>","<b>Delete</b>"];
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
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editAdmin("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteAdmin("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;
                 
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
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editAdmin("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteAdmin("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}





function editRole(Id){

	alert("Id"+Id.toString());
}


function deleteRole(Id){
	alert("Id2"+Id.toString());
}
