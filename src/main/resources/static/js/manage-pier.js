$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/piers",
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].pierId+")\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].pierId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PIER";
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].pierId+")\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].pierId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PIER";
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
        url: "http://139.99.117.190:8080/piers",
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].pierId+")\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].pierId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("link").innerHTML = "ADD PIER";
                 
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
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].pierId+")\">Edit</button></span>";
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].pierId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD PIER";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewNearby() {
       $.ajax({
        type: "GET",
        url: "http://139.99.117.190:8080/nearbies",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Nearby ID</b>","<b>Language</b>","<b>Place Name</b>","<b>Distance</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Nearby Table";
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
                                cellData[j].innerHTML = ""+data[i].nearbyId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].place_id.placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].place_id.name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].distance.toString();
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].nearbyId+")\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].nearbyId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("link").innerHTML = "ADD NEARBY";
                 
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
                                cellData[j].innerHTML = ""+data[i].nearbyId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].place_id.placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].place_id.name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].distance.toString();
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].nearbyId+")\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].nearbyId+")\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("link").innerHTML = "ADD NEARBY";
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
//         url: "http://139.99.117.190:8080/piers",
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

