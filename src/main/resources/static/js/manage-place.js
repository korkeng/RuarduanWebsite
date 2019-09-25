$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes",
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
        url: "https://ruarduan-backend.com/placetypes",
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
        url: "https://ruarduan-backend.com/places",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Language</b>","<b>Name</b>","<b>Description</b>","<b>Operation Time</b>","<b>Latitude</b>","<b>Longitude</b>","<b>Location</b>","<b>External Link</b>","<b>Telephone</b>","<b>Transportation</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+")\">Edit</button></span>";
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlace("+data[i].placeId.placeid+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlace()\">"+
                                                                    "ADD PLACE"+
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
                                cellData[j].innerHTML = ""+data[i].placeId.placeid.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].placeId.placeLanguages;
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].description;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].time_length;
                                break; 
                            case 5:
                                cellData[j].innerHTML = ""+data[i].pos_latitude.toString();
                                break;
                            case 6:
                                cellData[j].innerHTML = ""+data[i].pos_longtitude.toString();
                                break;
                            case 7:
                                cellData[j].innerHTML = ""+data[i].location;
                                break;
                            case 8:
                                cellData[j].innerHTML = ""+data[i].external_link;
                                break;
                            case 9:
                                cellData[j].innerHTML = ""+data[i].tel;
                                break;
                            case 10:
                                cellData[j].innerHTML = ""+data[i].transportation;
                                break;
                            case 11:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 12:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addPlace()\">"+
                                                                    "ADD PLACE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}


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
            title: 'Add Place Type Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectPlaceType.placeTypeId.placetype_id != "" && objectPlaceType.placeTypeId.placetypeLanguages != "" &&
                objectPlaceType.name != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/placetype/"+objectPlaceType.placeTypeId.placetypeLanguages+"/"+objectPlaceType.placeTypeId.placetype_id,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/placetype",
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
                            console.log("ERROR: ", e);
                            $.ajax({
                                type : "POST",
                                contentType : "application/json",
                                url : "https://ruarduan-backend.com/placetype",
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
        url: "https://ruarduan-backend.com/placetype/"+lan+"/"+id.toString(),
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
                url : "https://ruarduan-backend.com/placetype/update/"+lan+"/"+id.toString(),
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
            url : "https://ruarduan-backend.com/placetypes/"+lan+"/"+id,
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

function addPlace(){

    var divPlace =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPlace" class="form-detail">'+
                '<h2>Place Table</h2>'+
                '<div class="form-row">'+
                    '<span>Place Id</span><span style="color: red;"> *</span>'+
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
                '<div class="form-row">'+
                    '<span>Description</span><span style="color: red;"> *</span>'+
                    '<input id="valDes" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pic Path</span>'+
                    '<input id="valPic" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Time</span><span style="color: red;"> *</span>'+
                    '<input id="valTime" type="text" class="input-text" required>'+
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
                    '<span>Location</span><span style="color: red;"> *</span>'+
                    '<input id="valLo" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Link</span>'+
                    '<input id="valLink" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Limitation</span>'+
                    '<input id="valLim" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Tel.</span>'+
                    '<input id="valTel" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Transportation</span><span style="color: red;"> *</span>'+
                    '<input id="valTrans" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>PlaceType Id</span><span style="color: red;"> *</span>'+
                    '<input id="valType" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBPlace" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlace;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBPlace");
    btnclose.onclick = function() {
        var objectPlace = {
            placeId: {
                placeid: document.getElementById("valId").value,
                placeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value,
            pic_path: document.getElementById("valPic").value,
            description: document.getElementById("valDes").value,
            time_length: document.getElementById("valTime").value,
            pos_latitude: parseFloat(document.getElementById("valLat").value),
            pos_longtitude: parseFloat(document.getElementById("valLong").value),
            location: document.getElementById("valLo").value,
            external_link: document.getElementById("valLink").value,
            Limitation: document.getElementById("valLim").value,
            tel: document.getElementById("valTel").value,
            transportation: document.getElementById("valTrans").value
        }
        swal({
            title: 'Add Place Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectPlace.placeId.placeid != "" && objectPlace.placeId.placeLanguages != "" &&
                objectPlace.name != "" && objectPlace.pos_latitude != "" && objectPlace.pos_longtitude != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/places/"+objectPlace.placeId.placeLanguages+"/"+objectPlace.placeId.placeid,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/place/"+document.getElementById("valLan").value+"/"+document.getElementById("valType").value,
                                    data : JSON.stringify(objectPlace),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        changeViewPlace();
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
                            console.log("ERROR: ", e);
                            $.ajax({
                                type : "POST",
                                contentType : "application/json",
                                url : "https://ruarduan-backend.com/place/"+document.getElementById("valLan").value+"/"+document.getElementById("valType").value,
                                data : JSON.stringify(objectPlace),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    changeViewPlace();
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

function editPlace(id,lan){
    var divPlace =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPlace" class="form-detail">'+
                '<h2>Place Table</h2>'+
                '<div class="form-row">'+
                    '<span>Place Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Description</span><span style="color: red;"> *</span>'+
                    '<input id="valDes" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pic Path</span>'+
                    '<input id="valPic" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Time</span><span style="color: red;"> *</span>'+
                    '<input id="valTime" type="text" class="input-text" required>'+
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
                    '<span>Location</span><span style="color: red;"> *</span>'+
                    '<input id="valLo" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Link</span>'+
                    '<input id="valLink" type="text" class="input-text" >'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Limitation</span>'+
                    '<input id="valLim" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Tel.</span>'+
                    '<input id="valTel" type="text" class="input-text">'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Transportation</span><span style="color: red;"> *</span>'+
                    '<input id="valTrans" type="text" class="input-text" required>'+
                '</div>'+
                // '<div class="form-row">'+
                //     '<span>PlaceType Id</span><span style="color: red;"> *</span>'+
                //     '<input id="valType" type="number" class="input-text" required>'+
                // '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBPlace" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlace;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBPlace");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/places/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.placeId.placeid.toString();
            document.getElementById("valLan").value = data.placeId.placeLanguages;
            document.getElementById("valName").value = data.name;
            document.getElementById("valPic").value = data.pic_path;
            document.getElementById("valDes").value = data.description;
            document.getElementById("valTime").value = data.time_length;
            document.getElementById("valLat").value = data.pos_latitude;
            document.getElementById("valLong").value = data.pos_longtitude;
            document.getElementById("valLo").value = data.location;
            document.getElementById("valLink").value = data.external_link;
            document.getElementById("valLim").value = data.limitation;
            document.getElementById("valTel").value = data.tel;
            document.getElementById("valTrans").value = data.transportation;
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
        var objectPlace = {
            placeId: {
                placeid: document.getElementById("valId").value,
                placeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value,
            pic_path: document.getElementById("valPic").value,
            description: document.getElementById("valDes").value,
            time_length: document.getElementById("valTime").value,
            pos_latitude: parseFloat(document.getElementById("valLat").value),
            pos_longtitude: parseFloat(document.getElementById("valLong").value),
            location: document.getElementById("valLo").value,
            external_link: document.getElementById("valLink").value,
            Limitation: document.getElementById("valLim").value,
            tel: document.getElementById("valTel").value,
            transportation: document.getElementById("valTrans").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/place/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectPlace),
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

function deletePlace(id,lan){
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
            url : "https://ruarduan-backend.com/place/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewPlace();
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