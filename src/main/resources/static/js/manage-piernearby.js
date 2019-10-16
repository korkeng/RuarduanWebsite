$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/nearbies",
        dataType: 'json',
        success: function (data) {
             lastId = data[data.length - 1].nearbyId;
             newLastId = data[data.length - 1].nearbyId+1;
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
})

var tableData;
var dataLength;
var chooseLang;
var placeId;
var pierId;
var lastId;
var newLastId;
var pierName;

function chooseLangENG() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== Choose Pier ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/piers/eng';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.pierId.pier_id).text(entry.name));
      })
    });

    chooseLang="ENG";
    console.log("langE:"+chooseLang)
}

function chooseLangTH() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== เลือกท่าเรือ ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/piers/th';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.pierId.pier_id).text(entry.name));
      })
    });

    chooseLang="TH";
    console.log("langT:"+chooseLang)
}

function choosePierName() {

    let dropdown = $('#piername-dropdown');
    var listPierName = document.getElementById("piername-dropdown");
    pierId = listPierName.options[listPierName.selectedIndex].value;
    pierName = listPierName.options[listPierName.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/piers/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.pierId.pier_id).text(entry.name));
      })
    });
}

function choosePlaceName() {

    let dropdown = $('#placename-dropdown');
    var listPlaceName = document.getElementById("placename-dropdown");
    placeId = listPlaceName.options[listPlaceName.selectedIndex].value;

    const url = 'https://ruarduan-backend.com/places/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.placeId.placeid).text(entry.name));
      })
    });
console.log("placeId:"+placeId)
}

function LastId() {
  const url = "https://ruarduan-backend.com/nearbies";
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        lastId = data[data.length - 1].nearbyId;
        newLastId = data[data.length - 1].nearbyId+1;
      })
      
      alert("last: "+lastId+"new: "+newLastId);
    });
    
console.log("last2: "+lastId+"new2: "+newLastId);

//    $.ajax({
//         type: "GET",
//         url: "https://ruarduan-backend.com/nearbies",
//         dataType: 'json',
//     success: function (data) {
//              lastId = data[data.length - 1].nearbyId;
//              newLastId = data[data.length - 1].nearbyId+1;
//             alert("last: "+lastId+"new: "+newLastId);
//         },
//         error: function (e) {
//             console.log("Error:"+e);
//         }
//     });
// console.log("last2: "+lastId+"new2: "+newLastId);
    // var url = "https://ruarduan-backend.com/nearbies",
    // lastId = url[url.length - 1];
    // alert(lastId.nearbyId);
    
}

function choosePierNearby() {

  var listPier = document.getElementById("locality-dropdown");
      pierId = listPier.options[listPier.selectedIndex].value;
      pierName = listPier.options[listPier.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/piers/nearby/"+chooseLang+"/"+pierId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Nearby ID</b>","<b>Place ID</b>","<b>Place Name</b>","<b>Distance</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = ""+data[i].place_id.placeId.placeid.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].place_id.name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].distance.toString();
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPierNearby("+data[i].nearbyId+")\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePierNearby("+data[i].nearbyId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPierNearby()\">"+
                                                                    "ADD NEARBY"+
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
                                cellData[j].innerHTML = ""+data[i].nearbyId.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].place_id.placeId.placeid.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].place_id.name;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].distance.toString();
                                break;
                            case 4:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPierNearby("+data[i].nearbyId+")\">Edit</button></span>";
                                break;
                            case 5:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePierNearby("+data[i].nearbyId+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPierNearby()\">"+
                                                                    "ADD NEARBY"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function addPierNearby(){
    
    var divPierNearby =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formNearby" class="form-detail">'+
                '<h2>Nearby Table</h2>'+
                '<div class="form-row">'+
                    '<span>Nearby Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Pier Name</span><span style="color: red;"> *</span>'+
                    // '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePierName()">'+
                    //         '<option selected value="base">==Choose Pier Name==</option>'+
                    //       '</select>'+
                    '<input id="piername-dropdown" type="text" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Place Name</span><span style="color: red;"> *</span>'+
                    '<select id="placename-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePlaceName()">'+
                            '<option selected value="base">==Choose Place Name==</option>'+
                          '</select>'+
                    // '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Distance</span><span style="color: red;"> *</span>'+
                    '<input id="valDistance" type="number" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBPierNearby" class="btn btn-sm" value="Go"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';



    document.getElementById("showPopupForm").innerHTML = divPierNearby;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("valId").value = newLastId;
    document.getElementById("piername-dropdown").value = pierName;


    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBPierNearby");
    btnclose.onclick = function() {
        var objectPierNearby = { 
            nearbyId: parseInt(document.getElementById("valId").value),
            distance:parseFloat(document.getElementById("valDistance").value)
        }
        swal({
            title: 'Add Nearby Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectPierNearby.distance != ""){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/piers/nearby/"+chooseLang+"/"+pierId,
                        dataType: 'json',
                        success : function(data) {
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/nearby/"+chooseLang+"/"+pierId+"/"+placeId,
                                    data : JSON.stringify(objectPierNearby),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Nearby","Add");
                                        choosePierNearby();
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
                                    swal(
                                        'Error!!',
                                        'Something went wrong.',
                                        'error');
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

function editPierNearby(id){
    var divPierNearby =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formNearby" class="form-detail">'+
              '<h2>Nearby Table</h2>'+
                  '<div class="form-row">'+
                      '<span>Nearby Id</span><span style="color: red;"> *</span>'+
                      '<input id="valId" type="number" class="input-text" disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Languages</span><span style="color: red;"> *</span>'+
                      '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Pier Name</span><span style="color: red;"> *</span>'+
                      // '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePierName()">'+
                      //         '<option selected value="base">==Choose Pier Name==</option>'+
                      //       '</select>'+
                      '<input id="piername-dropdown" type="text" class="input-text" required disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Place Name</span><span style="color: red;"> *</span>'+
                      // '<select id="placename-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePlaceName()">'+
                      //         '<option selected value="base">==Choose Place Name==</option>'+
                      //       '</select>'+
                      '<input id="placename-dropdown" type="text" class="input-text" required disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Distance</span><span style="color: red;"> *</span>'+
                      '<input id="valDistance" type="number" class="input-text" required>'+
                  '</div>'+
                  '<div class="form-row-last">'+
                      '<input type="button" id="editDBPierNearby" class="btn btn-sm" value="Go"/>'+
                  '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPierNearby;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("piername-dropdown").value = pierName;


    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBPierNearby");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/nearbies/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.nearbyId.toString();
            document.getElementById("placename-dropdown").value = data.place_id.name;
            document.getElementById("valDistance").value = data.distance;
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
        var objectPierNearby = {
            nearbyId: document.getElementById("valId").value,
            distance:   document.getElementById("valDistance").value
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/nearby/update/"+id.toString(),
                data : JSON.stringify(objectPierNearby),
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
                    setNumNoti(document.getElementById("valId").value,"ENG","Nearby","Edit");
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



function deletePierNearby(id){
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
            url : "https://ruarduan-backend.com/nearby/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                choosePierNearby();
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
