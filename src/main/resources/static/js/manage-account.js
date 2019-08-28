var tableData;

$(document).ready(function(){
	$.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/roles",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Role ID</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Role Table";
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
                // dataLength = data.length;
			},
			error: function(e){
				console.log("Error!"+e);
			}
		});

	$.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/roles/2",
        dataType: 'json', 	
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeaderStaff").innerHTML = "Staff Table";
                var header = document.getElementById("myThHeaderStaff");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooterStaff");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBodyStaff");
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTableStaff').DataTable();
                dataLength = data.length;
			},
			error: function(e){
				console.log("Error!"+e);
			}
		});

		$.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/roles/1",
        dataType: 'json', 	
        success: function (data) {
            var dataHeader = ["<b>Id</b>","<b>Emp_Code</b>","<b>First Name</b>","<b>Last Name</b>","<b>E-mail</b>","<b>Phone</b>","<b>Username</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeaderAdmin").innerHTML = "Admin Table";
                var header = document.getElementById("myThHeaderAdmin");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooterAdmin");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBodyAdmin");
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].accountId+")\">Edit</button></span>";
                                break;
                            case 8:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].accountId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTableAdmin').DataTable();
                dataLength = data.length;
			},
			error: function(e){
				console.log("Error!"+e);
			}
		});
	});

	function editRole(Id){

		alert("Id"+Id.toString());
	}
	function deleteRole(Id){
		alert("Id2"+Id.toString());
	}
