$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/placetypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place Type ID</b>","<b>Language</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Place Type Table";
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
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
                                                                    "ADD PLACETYPE"+
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
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
                                                                    "ADD PLACETYPE"+
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

function changeViewPlaceType() {
       $.ajax({
            type: "GET",
        url: "https://139.99.117.190:8080/placetypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place Type ID</b>","<b>Language</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Place Type Table";
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
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
                                                                    "ADD PLACETYPE"+
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
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlaceType("+data[i].placeTypeId.placetype_id+",\'"+data[i].placeTypeId.placetypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
                                                                    "ADD PLACETYPE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewPlace() {
       $.ajax({
            type: "GET",
        url: "https://139.99.117.190:8080/places",
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
                                cellData[j].innerHTML = ""+data[i].placeId.placeid.toString();
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
                                cellData[j].innerHTML = ""+data[i].placeId.placeid.toString();
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


// function changeViewListPlace() {
//        $.ajax({
//             type: "GET",
//         url: "https://139.99.117.190:8080/placetypes",
//         dataType: 'json',
//         success: function (data) {
//             var dataHeader = ["<b>Place Type ID</b>","<b>Language</b>","<b>Place Type Name</b>","<b>Place ID</b>","<b>Place Name</b>","<b>Edit</b>","<b>Delete</b>"];
//             var cellHeader = [];
//             document.getElementById("tableHeader").innerHTML = "List Place with Placetype Table";
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
//                                 cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].listplace[j].placeId.place_id.toString();
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = ""+data[i].listplace[j].name;
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
//                                 break;
//                             case 6:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
//                                 break;
//                         } 
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length; 
//                 document.getElementById("link").innerHTML = "ADD LIST PLACE";
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
//                                 cellData[j].innerHTML = ""+data[i].placeTypeId.placetype_id.toString();
//                                 break;
//                             case 1:
//                                 cellData[j].innerHTML = ""+data[i].placeTypeId.placetypeLanguages;
//                                 break;
//                             case 2:
//                                 cellData[j].innerHTML = ""+data[i].name;
//                                 break;
//                             case 3:
//                                 cellData[j].innerHTML = ""+data[i].listplace[j].placeId.place_id.toString();
//                                 break;
//                             case 4:
//                                 cellData[j].innerHTML = ""+data[i].listplace[j].name;
//                                 break;
//                             case 5:
//                                 cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRole("+data[i].placeId+")\">Edit</button></span>";
//                                 break;
//                             case 6:
//                                 cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRole("+data[i].placeId+")\">Delete</button></span>";
//                                 break;
//                         } 
//                     }        
//                 }
//                 tableData = $('#dataTable').DataTable();
//                 dataLength = data.length; 
//                 document.getElementById("link").innerHTML = "ADD LIST PLACE";
//             }   
//         },
//         error: function (e) {
//             console.log("Error:"+e);
//         }
//     });
// }


function addPlaceType(){

    var divPlaceType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPlaceType" class="form-detail">'+
                '<h2>PlaceType Table</h2>'+
                '<div class="form-row">'+
                    '<span>PlaceType Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBPlaceType" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlaceType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBPlaceType");
    btnclose.onclick = function() {
        var objectPlaceType = {
            placeTypeId: {
                placetype_id: document.getElementById("valId").value,
                placetypeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value
        }
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then(function() {
            if(objectPlaceType.placeTypeId.placetype_id != "" && objectPlaceType.placeTypeId.placetypeLanguages != "" &&
                objectPlaceType.name != ""){
                    $.ajax({
                        type : "POST",
                        contentType : "application/json",
                        url : "https://139.99.117.190:8080/placetype",
                        data : JSON.stringify(objectPlaceType),
                        dataType : 'json',
                        success : function() {
                            swal(
                                'Successful',
                                'Your data has been add.',
                                'success');

                            modal.style.display = "none";
                            changeViewPlaceType();
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

function editPlaceType(id,lan){
    var divPlaceType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPlaceType" class="form-detail">'+
                '<h2>PlaceType Table</h2>'+
                '<div class="form-row">'+
                    '<span>PlaceType Id</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBPlaceType" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlaceType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBPlaceType");

    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/placetypes/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.placeTypeId.placetype_id.toString();
            document.getElementById("valLan").value = data.placeTypeId.placetypeLanguages;
            document.getElementById("valName").value = data.name;
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
        var objectPlaceType = {
            placeTypeId: {
                placetype_id: document.getElementById("valId").value,
                placetypeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://139.99.117.190:8080/placetype/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectPlaceType),
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


function deletePlaceType(id,lan){
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
            url : "https://139.99.117.190:8080/placetypes/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewPlaceType();
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