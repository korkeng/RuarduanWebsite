$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Boattype ID</b>","<b>Language</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Boattype Table";
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
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattypeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
                                                                    "ADD BOATTYPE"+
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
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattypeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
                                                                    "ADD BOATTYPE"+
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
function changeViewBoattype() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Boattype ID</b>","<b>Language</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Boattype Table";
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
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattypeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
                                                                    "ADD BOATTYPE"+
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
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattype_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].boattypeId.boattypeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
                                                                    "ADD BOATTYPE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewRoute() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/routes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Route ID</b>","<b>Language</b>","<b>Route Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Route Table";
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
                                cellData[j].innerHTML = ""+data[i].routeId.route_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].routeId.routeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].routeName;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRoute()\">"+
                                                                    "ADD ROUTE"+
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
                                cellData[j].innerHTML = ""+data[i].routeId.route_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].routeId.routeLanguages.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].routeName;
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn\" id=\"addDataButton\" onclick=\"addRoute()\">"+
                                                                    "ADD ROUTE"+
                                                                    "</button>";

            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}


function addBoatType(){

    var divBoatType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formBoatType" class="form-detail">'+
                '<h2>BoatType Table</h2>'+
                '<div class="form-row">'+
                    '<span>BoatType Id</span><span style="color: red;"> *</span>'+
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
                    '<input type="button" id="addDBBoatType" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBBoatType");
    btnclose.onclick = function() {
        var objectBoatType = {
            boattypeId: {
                boattype_id: document.getElementById("valId").value,
                boattypeLanguages: document.getElementById("valLan").value
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
            if(objectBoatType.boattypeId.boattype_id != "" && objectBoatType.boattypeId.boattypeLanguages != "" &&
                objectBoatType.name != ""){
                    $.ajax({
                        type : "POST",
                        contentType : "application/json",
                        url : "https://ruarduan-backend.com/boattype",
                        data : JSON.stringify(objectBoatType),
                        dataType : 'json',
                        success : function() {
                            swal(
                                'Successful',
                                'Your data has been add.',
                                'success');

                            modal.style.display = "none";
                            changeViewBoattype();
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

function addRoute(){
    var divRoute =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRoute" class="form-detail">'+
                '<h2>Route Table</h2>'+
                '<div class="form-row">'+
                    '<span>Route Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Route Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBRoute" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRoute;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBRoute");
    btnclose.onclick = function() {
        var objectRoute = {
            routeId: {
                route_id: document.getElementById("valId").value,
                routeLanguages: document.getElementById("valLan").value
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
            if(objectRoute.routeId.route_id != "" && objectRoute.routeId.routeLanguages != "" &&
                objectRoute.routeName != ""){
                    $.ajax({
                        type : "POST",
                        contentType : "application/json",
                        url : "https://ruarduan-backend.com/route",
                        data : JSON.stringify(objectRoute),
                        dataType : 'json',
                        success : function() {
                            swal(
                                'Successful',
                                'Your data has been add.',
                                'success');

                            modal.style.display = "none";
                            changeViewRoute();
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

function addSchedule(){
   console.log("Hello6"); 
}

function editBoatType(id,lan){
    var divBoatType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formBoatType" class="form-detail">'+
                '<h2>BoatType Table</h2>'+
                '<div class="form-row">'+
                    '<span>BoatType Id</span>'+
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
                    '<input type="button" id="editDBBoatType" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBBoatType");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.boattypeId.boattype_id.toString();
            document.getElementById("valLan").value = data.boattypeId.boattypeLanguages;
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
        var objectBoatType = {
            boattypeId: {
                boattype_id: document.getElementById("valId").value,
                boattypeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/boattypes/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectBoatType),
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


function editRoute(id,lan){
    var divRoute =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRoute" class="form-detail">'+
                '<h2>Route Table</h2>'+
                '<div class="form-row">'+
                    '<span>Route Id</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Route Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBRoute" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRoute;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBRoute");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/routes/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.routeId.route_id.toString();
            document.getElementById("valLan").value = data.routeId.routeLanguages;
            document.getElementById("valName").value = data.routeName;
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
        var objectRoute = {
            routeId: {
                route_id: document.getElementById("valId").value,
                routeLanguages: document.getElementById("valLan").value
            },
            routeName:   document.getElementById("valName").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/route/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectRoute),
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


function deleteBoatType(id,lan){
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
            url : "https://ruarduan-backend.com/boattype/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewBoattype();
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

function deleteRoute(id,lan){
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
            url : "https://ruarduan-backend.com/route/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                changeViewBoattype();
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