$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/route_piers",
        dataType: 'json',
        success: function (data) {
          data.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                return obj1.id.routepier_id - obj2.id.routepier_id;
            });
            lastId = (data[(data.length - 1)].id.routepier_id);
            newLastId = (data[(data.length - 1)].id.routepier_id)+1;
console.log(lastId+"/"+newLastId);
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });

});

var tableData;
var dataLength;
var chooseLang;
var routeId;
var pierId;
var lastId;
var newLastId;
var pierName;

function chooseLangENG() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== Choose Route ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/routes/eng';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.routeId.route_id).text(entry.routeName));
      })
    });

    chooseLang="ENG";
    console.log("langE:"+chooseLang)
}

function chooseLangTH() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== เลือกเส้นทาง ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/routes/th';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.routeId.route_id).text(entry.routeName));
      })
    });

    chooseLang="TH";
    console.log("langT:"+chooseLang)
}

function chooseRouteName() {

    let dropdown = $('#routename-dropdown');
    var listRouteName = document.getElementById("routename-dropdown");
    routeId = listRouteName.options[listRouteName.selectedIndex].value;
    routeName = listRouteName.options[listRouteName.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/routes/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.routeId.route_id).text(entry.routeName));
      })
    });
console.log("routeId:"+routeId)
}


function chooseRoutePier() {

  var listPier = document.getElementById("locality-dropdown");
      routeId = listPier.options[listPier.selectedIndex].value;
      routeName = listPier.options[listPier.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/route/piers/"+chooseLang+"/"+routeId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Route-Pier ID</b>","<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Route-Pier Table";
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
                                cellData[j].innerHTML = ""+data[i].id.routepier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_id.pierId.pier_id.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_id.pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pier_id.name;
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoutePier("+data[i].id.routepier_id+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addRoutePier()\">"+
                                                                    "ADD Route Pier"+
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
                                cellData[j].innerHTML = ""+data[i].id.routepier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_id.pierId.pier_id.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].pier_id.pier_code;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].pier_id.name;
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteRoutePier("+data[i].id.routepier_id+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addRoutePier()\">"+
                                                                    "ADD Route Pier"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function addRoutePier(){
    var divRoutePier =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formRoutePier" class="form-detail">'+
                '<h2>Add Route-Pier</h2>'+
                '<div class="form-row">'+
                    '<span>Route-Pier Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                      '<span>Languages</span><span style="color: red;"> *</span>'+
                      '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Route Name</span><span style="color: red;"> *</span>'+
                      '<input id="routename-dropdown" type="text" class="input-text" required disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Pier Name</span><span style="color: red;"> *</span>'+
                      '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality">'+
                              '<option selected value="base">==Choose Pier Name==</option>'+
                            '</select>'+
                      // '<input id="piername-dropdown" type="text" class="input-text" required >'+
                  '</div>'+
                  '<div class="form-row-last">'+
                      '<input type="button" id="addDBRoutePier" class="btn btn-sm" value="Done"/>'+
                  '</div>'+
            '</form>'+
        '</div>'+
    '</div>';



    document.getElementById("showPopupForm").innerHTML = divRoutePier;
    document.getElementById("valId").value = newLastId;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("routename-dropdown").value = routeName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBRoutePier");
    let dropdown = $('#piername-dropdown');
    var listPierName = document.getElementById("piername-dropdown");
    const url = 'https://ruarduan-backend.com/piers/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.pierId.pier_id).text(entry.name));
      })
    });
    btnclose.onclick = function() {
        pierId = listPierName.options[listPierName.selectedIndex].value;
        pierName = listPierName.options[listPierName.selectedIndex].text;
        var objectRoutePier = {
            id: {
                routepier_id: document.getElementById("valId").value,
                routepierLanguages: chooseLang
            },
        }
        swal({
            title: 'Add Route-Pier Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectRoutePier.id.routepier_id != "" ){
                $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/route/piers/"+chooseLang+"/"+routeId,
                        dataType: 'json',
                        success : function(data) {
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/route/piers/"+chooseLang+"/"+routeId+"/"+pierId,
                                    data : JSON.stringify(objectRoutePier),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        setNumNoti(document.getElementById("valId").value,chooseLang,"RoutePier","Add");
                                        chooseRoutePier();
                                    },
                                    error : function(e) {
                                        swal(
                                        'Error!!',
                                        'Something went wrong.',
                                        'error');
                                        console.log("ERROR: ", e);
                                    }
                                });
                         
                        },
                        error : function(e) {
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

function deleteRoutePier(id,lan){
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
            url : "https://ruarduan-backend.com/route/pier/"+chooseLang+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                chooseRoutePier();
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