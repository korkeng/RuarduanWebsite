$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes",
        dataType: 'json',
        success: function (data) {
            data.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                return obj1.boattypeId.boattype_id - obj2.boattypeId.boattype_id;
            });
            lastId = (data[(data.length - 1)].boattypeId.boattype_id);
            newLastId = (data[(data.length - 1)].boattypeId.boattype_id)+1;
console.log(lastId+"/"+newLastId);
console.log(data[(data.length - 1)].boattypeId.boattype_id);
            var dataHeader = ["<b>Boattype ID</b>","<b>Language</b>","<b>Name</b>","<b>New Lang.</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addBoatTypeNewLang("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addBoatTypeNewLang("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
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
var lastId;
var newLastId;
var newLastRouteId;
var langName;
function changeViewBoattype() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Boattype ID</b>","<b>Language</b>","<b>Name</b>","<b>New Lang.</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addBoatTypeNewLang("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addBoatTypeNewLang("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatType("+data[i].boattypeId.boattype_id+",\'"+data[i].boattypeId.boattypeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatType()\">"+
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
            data.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                return obj1.routeId.route_id - obj2.routeId.route_id;
            });
            lastRouteId = (data[(data.length - 1)].routeId.route_id);
            newLastRouteId = (data[(data.length - 1)].routeId.route_id)+1;
console.log("Route ID "+lastId+"/"+newLastId);
            var dataHeader = ["<b>Route ID</b>","<b>Language</b>","<b>Route Name</b>","<b>New Lang.</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addRouteNewLang("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addRoute()\">"+
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addRouteNewLang("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Add</button></span>";
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoute("+data[i].routeId.route_id+",\'"+data[i].routeId.routeLanguages+"\')\">Delete</button></span>";
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addRoute()\">"+
                                                                    "ADD ROUTE"+
                                                                    "</button>";

            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function chooseLang() {
    let dropdown = $('#valLan');
    var usedNames = [];
    var listLang = document.getElementById("valLan");
    langName = listLang.options[listLang.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/boattypes';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        if (usedNames.indexOf(entry.boattypeId.boattypeLanguages) == -1) {
                $("#valLan").append("<option value=" + key + ">" + entry.boattypeId.boattypeLanguages + "</option>"); 
            }
        usedNames.push(entry.boattypeId.boattypeLanguages);
      })
    });
}

function chooseRouteLang() {
    let dropdown = $('#valLan');
    var usedNames = [];
    var listLang = document.getElementById("valLan");
    langName = listLang.options[listLang.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/routes';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        if (usedNames.indexOf(entry.routeId.routeLanguages) == -1) {
                $("#valLan").append("<option value=" + key + ">" + entry.routeId.routeLanguages + "</option>"); 
            }
        usedNames.push(entry.routeId.routeLanguages);
      })
    });
}

function addBoatType(){

    var divBoatType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formBoatType" class="form-detail">'+
                '<h2>Add BoatType</h2>'+
                '<div class="form-row">'+
                    '<span>BoatType Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<select id="valLan" class="btn-xxl text-center input-text" name="locality" onclick="chooseLang()">'+
                            '<option selected value="base">==Choose Language==</option>'+
                          '</select>'+
                    // '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBBoatType" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatType;
    document.getElementById("valId").value = newLastId;
    document.getElementById("valLan").value = langName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

   var options = {
        url: "https://ruarduan-backend.com/boattypes",

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#valName").easyAutocomplete(options);

    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBBoatType");
    btnclose.onclick = function() {
        var objectBoatType = {
            boattypeId: {
                boattype_id: document.getElementById("valId").value,
                boattypeLanguages: langName
            },
            name:   document.getElementById("valName").value
        }
        swal({
            title: 'Add Boat Type Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectBoatType.boattypeId.boattype_id != "" && objectBoatType.boattypeId.boattypeLanguages != "" &&
                objectBoatType.name != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/boattypes/"+objectBoatType.boattypeId.boattypeLanguages+"/"+objectBoatType.boattypeId.boattype_id,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
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
                                        setNumNoti(document.getElementById("valId").value,langName,"BoatType","Add");
                                        changeViewBoattype();
                                        console.log("lang"+langName)
                                        // window.location.reload();
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
                                url : "https://ruarduan-backend.com/boattype",
                                data : JSON.stringify(objectBoatType),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    setNumNoti(document.getElementById("valId").value,langName,"BoatType","Add");
                                    changeViewBoattype();
                                    console.log("lang2"+langName)
                                    // window.location.reload();
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

function addBoatTypeNewLang(id,lan){
    var divBoatType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formBoatType" class="form-detail">'+
                '<h2>Add BoatType New Language</h2>'+
                '<div class="form-row">'+
                    '<span>BoatType Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required disabled>'+
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
                    '<input type="button" id="addDBBoatType" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/boattypes",

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        }
    };

    $("#valName").easyAutocomplete(options);

    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBBoatType");
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattypes/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.boattypeId.boattype_id.toString();
            
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    btnclose.onclick = function() {
        var objectBoatType = {
            boattypeId: {
                boattype_id: document.getElementById("valId").value,
                boattypeLanguages: document.getElementById("valLan").value
            },
            name:   document.getElementById("valName").value
        }
        swal({
            title: 'Add Boat Type Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectBoatType.boattypeId.boattype_id != "" && objectBoatType.boattypeId.boattypeLanguages != "" &&
                objectBoatType.name != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/boattypes/"+objectBoatType.boattypeId.boattypeLanguages+"/"+objectBoatType.boattypeId.boattype_id,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
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
                                        setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"BoatType","Add");
                                        changeViewBoattype();
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
                                url : "https://ruarduan-backend.com/boattype",
                                data : JSON.stringify(objectBoatType),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"BoatType","Add");
                                    changeViewBoattype();
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

function addRoute(){
    var divRoute =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRoute" class="form-detail">'+
                '<h2>Add Route</h2>'+
                '<div class="form-row">'+
                    '<span>Route Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<select id="valLan" class="btn-xxl text-center input-text" name="locality" onclick="chooseRouteLang()">'+
                            '<option selected value="base">==Choose Language==</option>'+
                    '</select>'+
                    // '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Route Name</span><span style="color: red;"> *</span>'+
                    '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBRoute" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRoute;
    document.getElementById("valId").value = newLastRouteId;
    document.getElementById("valLan").value = langName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/routes",

        getValue: "routeName",

        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#valName").easyAutocomplete(options);
    
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBRoute");
    btnclose.onclick = function() {
        var objectRoute = {
            routeId: {
                route_id: document.getElementById("valId").value,
                routeLanguages: langName
            },
            routeName:   document.getElementById("valName").value
        }
        swal({
            title: 'Add Route Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectRoute.routeId.route_id != "" && objectRoute.routeId.routeLanguages != "" &&
                objectRoute.routeName != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/routes/"+objectRoute.routeId.routeLanguages+"/"+objectRoute.routeId.route_id,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
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
                                        setNumNoti(document.getElementById("valId").value,langName,"Route","Add");
                                        changeViewRoute();
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
                                url : "https://ruarduan-backend.com/route",
                                data : JSON.stringify(objectRoute),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    setNumNoti(document.getElementById("valId").value,langName,"Route","Add");
                                    changeViewRoute();
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

function addRouteNewLang(id,lan){
    var divRoute =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRoute" class="form-detail">'+
                '<h2>Add Route New Language</h2>'+
                '<div class="form-row">'+
                    '<span>Route Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required disabled>'+
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
                    '<input type="button" id="addDBRoute" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRoute;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/routes",

        getValue: "routeName",

        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#valName").easyAutocomplete(options);

    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBRoute");
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/routes/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.routeId.route_id.toString();
            
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    btnclose.onclick = function() {
        var objectRoute = {
            routeId: {
                route_id: document.getElementById("valId").value,
                routeLanguages: document.getElementById("valLan").value
            },
            routeName:   document.getElementById("valName").value
        }
        swal({
            title: 'Add Route Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectRoute.routeId.route_id != "" && objectRoute.routeId.routeLanguages != "" &&
                objectRoute.routeName != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/routes/"+objectRoute.routeId.routeLanguages+"/"+objectRoute.routeId.route_id,
                        dataType: 'json',
                        success : function(data) {
                            if(data == null){
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
                                        setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Route","Add");
                                        changeViewRoute();
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
                                url : "https://ruarduan-backend.com/route",
                                data : JSON.stringify(objectRoute),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Route","Add");
                                    changeViewRoute();
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


function editBoatType(id,lan){
    var divBoatType =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formBoatType" class="form-detail">'+
                '<h2>Edit Boattype</h2>'+
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
                    '<input type="button" id="editDBBoatType" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatType;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/boattypes",

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#valName").easyAutocomplete(options);

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
                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"BoatType","Edit");
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
                '<h2>Edit Route</h2>'+
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
                    '<input type="button" id="editDBRoute" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divRoute;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/routes",

        getValue: "routeName",

        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#valName").easyAutocomplete(options);

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
                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Route","Edit");
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