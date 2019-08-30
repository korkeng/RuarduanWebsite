var tableData;

$(document).ready(function(){
	$.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/boattypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Boattype ID</b>","<b>Language</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeaderBoat").innerHTML = "Boattype Table";
                var header = document.getElementById("myThHeaderBoat");
                var rowHeader = header.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowHeader.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var footer = document.getElementById("myThFooterBoat");
                var rowFooter = footer.insertRow(0);
                for (i = 0; i < dataHeader.length; i++) {
                    cellHeader[i] = rowFooter.insertCell(i);
                    cellHeader[i].innerHTML = ""+dataHeader[i];
                }
                var table = document.getElementById("myThBodyBoat");
                var cellData = [];
                for (i = data.length-1; i > -1; i--) {
                    var row1 = table.insertRow(0);
                    for(j = 0; j < dataHeader.length; j++){     
                        cellData[j] = row1.insertCell(j);
                        switch(j) {
                            case 0:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattypeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].boattypeId+")\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].boattypeId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTableBoat').DataTable();
                // dataLength = data.length;
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
