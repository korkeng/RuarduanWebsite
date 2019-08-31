$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/places",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Language</b>","<b>Name</b>","<b>Pic Path</b>","<b>Description</b>","<b>Operation Time</b>","<b>Latitude</b>","<b>Longitude</b>","<b>Location</b>","<b>External Link</b>","<b>Telephone</b>","<b>Transportation</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Place Table";
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
                                cellData[j].innerHTML = ""+data[i].placeId.place_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 11:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
                                break;
                            case 13:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PLACE";
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
                                cellData[j].innerHTML = ""+data[i].placeId.place_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 11:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
                                break;
                            case 13:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PLACE";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});

var tableData;
var dataLength;

function changeViewPlace() {
       $.ajax({
            type: "GET",
        url: "http://139.99.117.190:8080/places",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Language</b>","<b>Name</b>","<b>Pic Path</b>","<b>Description</b>","<b>Operation Time</b>","<b>Latitude</b>","<b>Longitude</b>","<b>Location</b>","<b>External Link</b>","<b>Telephone</b>","<b>Transportation</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Place Table";
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
                                cellData[j].innerHTML = ""+data[i].placeId.place_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 11:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
                                break;
                            case 13:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PLACE";
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
                                cellData[j].innerHTML = ""+data[i].placeId.place_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 11:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
                                break;
                            case 13:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PLACE";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}
