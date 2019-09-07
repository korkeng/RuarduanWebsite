$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Language</b>","<b>Pier Code</b>","<b>Pier Name</b>","<b>Pic Path</b>","<b>Latitude</b>","<b>Longitude</b>","<b>Busline</b>","<b>Shuttle Boat</b>","<b>Ferry Boat</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Pier Table";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].busline;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].shuttleboat;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].ferryboat;
                                break;
                            case 10:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPier()\">"+
                                                                    "ADD PIER"+
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].busline;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].shuttleboat;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].ferryboat;
                                break;
                            case 10:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPier()\">"+
                                                                    "ADD PIER"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});

var tableData;
var dataLength;

function changeViewPier() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Language</b>","<b>Pier Code</b>","<b>Pier Name</b>","<b>Pic Path</b>","<b>Latitude</b>","<b>Longitude</b>","<b>Busline</b>","<b>Shuttle Boat</b>","<b>Ferry Boat</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Pier Table";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].busline;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].shuttleboat;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].ferryboat;
                                break;
                            case 10:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPier()\">"+
                                                                    "ADD PIER"+
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].pic_path;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].busline;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].shuttleboat;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].ferryboat;
                                break;
                            case 10:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePier("+data[i].pierId.pier_id+",\'"+data[i].pierId.pierLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPier()\">"+
                                                                    "ADD PIER"+
                                                                    "</button>";            
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

// function changeViewNearby() {
//        $.ajax({
//         type: "GET",
//         url: "https://139.99.117.190:8080/nearbies",
//         dataType: 'json',
//         success: function (data) {
//             var dataHeader = ["<b>Nearby ID</b>","<b>Language</b>","<b>Place Name</b>","<b>Distance</b>","<b>Edit</b>","<b>Delete</b>"];
//             var cellHeader = [];
//             document.getElementById("tableHeader").innerHTML = "Nearby Table";
//             if (document.getElementById("dataTable").rows.length == 0) {
//                 var header = document.getElementById("myThHeader");
//                 var rowHeader = header.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowHeader.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var footer = document.getElementById("myThFooter");
//                 var rowFooter = footer.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowFooter.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var table = document.getElementById("myThBody");
//                 var cellData = [];
//                 for (i = data.length-1; i > -1; i--) {
//                     var row1 = table.insertRow(0);
//                     for(j = 0; j < dataHeader.length; j++){     
//                         cellData[j] = row1.insertCell(j);
//                         switch(j) {
//                             case 0:
//                                 cellData[j].innerHTML = ""+data[i].nearbyId.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].place_id.placeId.placeLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].place_id.name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].distance.toString();
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].nearbyId+")\">Edit</button></span>";
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].nearbyId+")\">Delete</button></span>";
//                                 break;
//                         } 
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length;  
//                 document.getElementById("link").innerHTML = "ADD NEARBY";
                 
//             } else {
//                 tableData.destroy();
//                 for (i = 0; i < dataLength+2; i++) {
//                     document.getElementById("dataTable").deleteRow(0);
//                 }
//                 var header = document.getElementById("myThHeader");
//                 var rowHeader = header.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowHeader.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var footer = document.getElementById("myThFooter");
//                 var rowFooter = footer.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowFooter.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var table = document.getElementById("myThBody");
//                 var cellData = [];
//                 for (i = data.length-1; i > -1; i--) {
//                     var row1 = table.insertRow(0);
//                     for(j = 0; j < dataHeader.length; j++){     
//                         cellData[j] = row1.insertCell(j);
//                         switch(j) {
//                             case 0:
//                                 cellData[j].innerHTML = ""+data[i].nearbyId.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].place_id.placeId.placeLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].place_id.name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].distance.toString();
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].nearbyId+")\">Edit</button></span>";
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].nearbyId+")\">Delete</button></span>";
//                                 break;
//                         }
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length; 
//                 document.getElementById("link").innerHTML = "ADD NEARBY";
//             }   
//         },
//         error: function (e) {
//             console.log("Error:"+e);
//         }
//     });
// }



// function changeViewNearby() {
//        $.ajax({
//         type: "GET",
//         url: "https://139.99.117.190:8080/piers",
//         dataType: 'json',
//         success: function (data) {
//             var dataHeader = ["<b>Nearby ID</b>","<b>Language</b>","<b>Pier Name</b>","<b>Place Name</b>","<b>Distance</b>","<b>Edit</b>","<b>Delete</b>"];
//             var cellHeader = [];
//             document.getElementById("tableHeader").innerHTML = "Nearby Table";
//             if (document.getElementById("dataTable").rows.length == 0) {
//                 var header = document.getElementById("myThHeader");
//                 var rowHeader = header.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowHeader.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var footer = document.getElementById("myThFooter");
//                 var rowFooter = footer.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowFooter.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var table = document.getElementById("myThBody");
//                 var cellData = [];
//                 for (i = data.length-1; i > -1; i--) {
//                     var row1 = table.insertRow(0);
//                     for(j = 0; j < dataHeader.length; j++){     
//                         cellData[j] = row1.insertCell(j);
//                         switch(j) {
//                             case 0:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.nearbyId.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.place_id.name;
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.distance.toString();
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].listNearby.listNearby.nearbyId+")\">Edit</button></span>";
//                                 break;
//                             case 6:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].listNearby.listNearby.nearbyId+")\">Delete</button></span>";
//                                 break;
//                         } 
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length;  
//                 document.getElementById("link").innerHTML = "ADD NEARBY";
                 
//             } else {
//                 tableData.destroy();
//                 for (i = 0; i < dataLength+2; i++) {
//                     document.getElementById("dataTable").deleteRow(0);
//                 }
//                 var header = document.getElementById("myThHeader");
//                 var rowHeader = header.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowHeader.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var footer = document.getElementById("myThFooter");
//                 var rowFooter = footer.insertRow(0);
//                 for (i = 0; i < dataHeader.length; i++) {
//                     cellHeader[i] = rowFooter.insertCell(i);
//                     cellHeader[i].innerHTML = ""+dataHeader[i];
//                 }
//                 var table = document.getElementById("myThBody");
//                 var cellData = [];
//                 for (i = data.length-1; i > -1; i--) {
//                     var row1 = table.insertRow(0);
//                     for(j = 0; j < dataHeader.length; j++){     
//                         cellData[j] = row1.insertCell(j);
//                         switch(j) {
//                              case 0:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.nearbyId.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].pierId.pierLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.place_id.name;
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = ""+data[i].listNearby.distance.toString();
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].listNearby.listNearby.nearbyId+")\">Edit</button></span>";
//                                 break;
//                             case 6:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].listNearby.listNearby.nearbyId+")\">Delete</button></span>";
//                                 break;
//                         }
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length; 
//                 document.getElementById("link").innerHTML = "ADD NEARBY";
//             }   
//         },
//         error: function (e) {
//             console.log("Error:"+e);
//         }
//     });
// }

function addPier(){

    var divPier =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPier" class="form-detail">'+
                '<h2>Pier Table</h2>'+
                '<div class="form-row">'+
                    '<span>Pier Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pier Code</span>'+
                    '<input id="valCode" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pic Path</span>'+
                    '<input id="valPic" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Latitude</span><span style="color: red;"> *</span>'+
                    '<input id="valLat" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Longitude</span><span style="color: red;"> *</span>'+
                    '<input id="valLong" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Busline</span>'+
                    '<input id="valBus" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Ferry Boat</span>'+
                    '<input id="valFerry" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Shuttle Boat</span>'+
                    '<input id="valShuttle" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBPier" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPier;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBPier");
    btnclose.onclick = function() {
        var objectPier = {
            pierId: {
                pier_id: document.getElementById("valId").value,
                pierLanguages: document.getElementById("valLan").value
            },
            pier_code: document.getElementById("valCode").value,
            name: document.getElementById("valName").value,
            pic_path: document.getElementById("valPic").value,
            pos_latitude: parseFloat(document.getElementById("valLat").value),
            pos_longtitude: parseFloat(document.getElementById("valLong").value),
            busline: document.getElementById("valBus").value,
            shuttleboat: document.getElementById("valShuttle").value,
            ferryboat: document.getElementById("valFerry").value
        }
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then(function() {
            if(objectPier.pierId.pier_id != "" && objectPier.pierId.pierLanguages != "" &&
                objectPier.name != ""&& objectPier.pos_latitude != "" && objectPier.pos_longtitude != "" ){
                    $.ajax({
                        type : "POST",
                        contentType : "application/json",
                        url : "https://139.99.117.190:8080/pier",
                        data : JSON.stringify(objectPier),
                        dataType : 'json',
                        success : function() {
                            swal(
                                'Successful',
                                'Your data has been add.',
                                'success');

                            modal.style.display = "none";
                            changeViewPier();
                        },
                        error : function(e) {
                            alert("Error!")
                            console.log("ERROR: ", e);
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

function editPier(id,lan){
    var divPier =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPier" class="form-detail">'+
                '<h2>Pier Table</h2>'+
                '<div class="form-row">'+
                    '<span>Pier Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pier Code</span>'+
                    '<input id="valCode" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pic Path</span>'+
                    '<input id="valPic" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Latitude</span><span style="color: red;"> *</span>'+
                    '<input id="valLat" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Longitude</span><span style="color: red;"> *</span>'+
                    '<input id="valLong" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Busline</span>'+
                    '<input id="valBus" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Ferry Boat</span>'+
                    '<input id="valFerry" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Shuttle Boat</span>'+
                    '<input id="valShuttle" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBPier" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPier;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBPier");

    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.pierId.pier_id.toString();
            document.getElementById("valLan").value = data.pierId.pierLanguages;
            document.getElementById("valCode").value = data.pier_code;
            document.getElementById("valName").value = data.name;
            document.getElementById("valPic").value = data.pic_path;
            document.getElementById("valLat").value = data.pos_latitude;
            document.getElementById("valLong").value = data.pos_longtitude;
            document.getElementById("valBus").value = data.busline;
            document.getElementById("valShuttle").value = data.shuttleboat;
            document.getElementById("valFerry").value = data.ferryboat;
            
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
        var objectPier = {
            pierId: {
                pier_id: document.getElementById("valId").value,
                pierLanguages: document.getElementById("valLan").value
            },
            pier_code: document.getElementById("valCode").value,
            name: document.getElementById("valName").value,
            pic_path: document.getElementById("valPic").value,
            pos_latitude: parseFloat(document.getElementById("valLat").value),
            pos_longtitude: parseFloat(document.getElementById("valLong").value),
            busline: document.getElementById("valBus").value,
            shuttleboat: document.getElementById("valShuttle").value,
            ferryboat: document.getElementById("valFerry").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://139.99.117.190:8080/piers/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectPier),
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


function deletePier(id,lan){
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
            url : "https://139.99.117.190:8080/piers/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewPier();
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