$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/pier_boattypes",
        dataType: 'json',
        success: function (data) {
             lastId = data[data.length - 1].id;
             newLastId = data[data.length - 1].id+1;
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });

});

var tableData;
var dataLength;
var chooseLang;
var boatId;
var pierId;
var lastId;
var newLastId;
var pierName;

function chooseLangENG() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== Choose Boattype ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/boattypes/eng';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.boattypeId.boattype_id).text(entry.name));
      })
    });

    chooseLang="ENG";
    console.log("langE:"+chooseLang)
}

function chooseLangTH() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== เลือกประเภทเรือ ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/boattypes/th';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.boattypeId.boattype_id).text(entry.name));
      })
    });

    chooseLang="TH";
    console.log("langT:"+chooseLang)
}


function chooseBoattypeName() {

    let dropdown = $('#boattypename-dropdown');
    var listBoattypeName = document.getElementById("boattypename-dropdown");
    boattypeId = listBoattypeName.options[listBoattypeName.selectedIndex].value;
    boattypeName = listBoattypeName.options[listBoattypeName.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/boattypes/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.boattypeId.boattype_id).text(entry.name));
      })
    });
console.log("boattypeId:"+boattypeId)
}


function choosePierBoattype() {

  var listPier = document.getElementById("locality-dropdown");
      boattypeId = listPier.options[listPier.selectedIndex].value;
      boattypeName = listPier.options[listPier.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/piers/boattype/"+chooseLang+"/"+boattypeId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier-Boattype ID</b>","<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Pier-Boattype Table";
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
                                cellData[j].innerHTML = ""+data[i].id.toString();
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
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePierBoattype("+data[i].id+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPierBoattype()\">"+
                                                                    "ADD Pier Boattype"+
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
                                cellData[j].innerHTML = ""+data[i].id.toString();
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
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePierBoattype("+data[i].id+")\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPierBoattype()\">"+
                                                                    "ADD Pier Boattype"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function addPierBoattype(){
    var divPierBoattype =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPierBoattype" class="form-detail">'+
                '<h2>Add Pier-Boattype</h2>'+
                '<div class="form-row">'+
                    '<span>Pier-Boattype Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                      '<span>Languages</span><span style="color: red;"> *</span>'+
                      '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Boattype Name</span><span style="color: red;"> *</span>'+
                      '<input id="boattypename-dropdown" type="text" class="input-text" required disabled>'+
                  '</div>'+
                  '<div class="form-row">'+
                      '<span>Pier Name</span><span style="color: red;"> *</span>'+
                      '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality" >'+
                              '<option selected value="base">==Choose Pier Name==</option>'+
                            '</select>'+
                      // '<input id="piername-dropdown" type="text" class="input-text" required >'+
                  '</div>'+
                  '<div class="form-row-last">'+
                      '<input type="button" id="addDBBoatPier" class="btn btn-sm" value="Done"/>'+
                  '</div>'+
            '</form>'+
        '</div>'+
    '</div>';



    document.getElementById("showPopupForm").innerHTML = divPierBoattype;
    document.getElementById("valId").value = newLastId;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("boattypename-dropdown").value = boattypeName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBBoatPier");
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
        var objectPierBoattype = {
            id: document.getElementById("valId").value,
        }
        swal({
            title: 'Add Pier-Boattype Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectPierBoattype.id != "" ){
                $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/piers/boats/types/"+chooseLang+"/"+boattypeId,
                        dataType: 'json',
                        success : function(data) {
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/pier/boattype/"+chooseLang+"/"+boattypeId+"/"+pierId,
                                    data : JSON.stringify(objectPierBoattype),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"PierBoattype","Add");
                                        choosePierBoattype();
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

function deletePierBoattype(id){
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
            url : "https://ruarduan-backend.com/pier/boattype/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                choosePierBoattype();
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