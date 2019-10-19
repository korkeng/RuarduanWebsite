$(document).ready(function() {

    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/schedules",
        dataType: 'json',
        success: function (data) {
             data.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                return obj1.scheduleId.schedule_id - obj2.scheduleId.schedule_id;
            });
            lastId = (data[(data.length - 1)].scheduleId.schedule_id);
            newLastId = (data[(data.length - 1)].scheduleId.schedule_id)+1;
console.log(lastId+"/"+newLastId);
console.log(data[(data.length - 1)].scheduleId.schedule_id);
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
});

var tableData;
var dataLength;
var chooseLang;
var boattypeId;
var routeId;
var lastId;
var newLastId;
var routeName;

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
}

function chooseBoattypeName() {

    let dropdown = $('#boattypename-dropdown');
    var listBoattypeName = document.getElementById("boattypename-dropdown");
    boattypeId = listPlaceName.options[listBoattypeName.selectedIndex].value;
    boattypeName = listPlaceName.options[listBoattypeName.selectedIndex].text;
    const url = 'https://ruarduan-backend.com/boattypes/'+chooseLang;
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.boattypeId.boattype_id).text(entry.name));
      })
    });
console.log("boattypeId:"+boattypeId)
}


function chooseBoatSchedule() {

  var listPier = document.getElementById("locality-dropdown");
      boattypeId = listPier.options[listPier.selectedIndex].value;
      boattypeName = listPier.options[listPier.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/"+chooseLang+"/"+boattypeId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Operation Day</b>","<b>Operation Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table";
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
                                cellData[j].innerHTML = ""+data[i].scheduleId.schedule_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].day;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].time;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].boatpertime;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].price;
                                break;
                            case 6:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatSchedule("+data[i].scheduleId.schedule_id+",\'"+data[i].scheduleId.scheduleLanguages+"\')\">Edit</button></span>";
                                break;
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatSchedule("+data[i].scheduleId.schedule_id+",\'"+data[i].scheduleId.scheduleLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatSchedule()\">"+
                                                                    "ADD SCHEDULE"+
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
                                cellData[j].innerHTML = ""+data[i].scheduleId.schedule_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName.toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i].day;
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i].time;
                                break;
                            case 4:
                                cellData[j].innerHTML = ""+data[i].boatpertime;
                                break;
                            case 5:
                                cellData[j].innerHTML = ""+data[i].price;
                                break;
                            case 6:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editBoatSchedule("+data[i].scheduleId.schedule_id+",\'"+data[i].scheduleId.scheduleLanguages+"\')\">Edit</button></span>";
                                break;
                            case 7:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deleteBoatSchedule("+data[i].scheduleId.schedule_id+",\'"+data[i].scheduleId.scheduleLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addBoatSchedule()\">"+
                                                                    "ADD SCHEDULE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function addBoatSchedule(){
    
    var divBoatSchedule =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formSchedule" class="form-detail">'+
                '<h2>Add Schedule</h2>'+
                '<div class="form-row">'+
                    '<span>Schedule Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Boattype Name</span><span style="color: red;"> *</span>'+
                    // '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePierName()">'+
                    //         '<option selected value="base">==Choose Pier Name==</option>'+
                    //       '</select>'+
                    '<input id="boattypename-dropdown" type="text" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Route Name</span><span style="color: red;"> *</span>'+
                    '<select id="routename-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="chooseRouteName()">'+
                            '<option selected value="base">==Choose Route Name==</option>'+
                          '</select>'+
                    // '<input id="valName" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Day</span><span style="color: red;"> *</span>'+
                    '<input id="valDay" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Time</span><span style="color: red;"> *</span>'+
                    '<input id="valTime" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Boat per Time</span><span style="color: red;"> *</span>'+
                    '<input id="valBpT" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Price</span><span style="color: red;"> *</span>'+
                    '<input id="valPrice" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBBoatSchedule" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';



    document.getElementById("showPopupForm").innerHTML = divBoatSchedule;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("valId").value = newLastId;
    document.getElementById("boattypename-dropdown").value = boattypeName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var options = {
        url: "https://ruarduan-backend.com/schedules",

        getValue: "day",

        list: {
            maxNumberOfElements: 1,
            match: {
                enabled: true
            }
        }
    };
    $("#valDay").easyAutocomplete(options);
    var options = {
        url: "https://ruarduan-backend.com/schedules",

        getValue: "time",

        list: {
            maxNumberOfElements: 1,
            match: {
                enabled: true
            }
        }
    };
    $("#valTime").easyAutocomplete(options);
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("addDBBoatSchedule");
    btnclose.onclick = function() {
        var objectBoatSchedule = { 
            scheduleId: {
                schedule_id: document.getElementById("valId").value,
                scheduleLanguages: chooseLang
            },
            day: document.getElementById("valDay").value,
            time:document.getElementById("valTime").value,
            price: parseFloat(document.getElementById("valPrice").value),
            boatpertime:parseInt(document.getElementById("valBpT").value)
        }
        swal({
            title: 'Add Schedule Data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#32CD32',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, add it!'
        }).then(function() {
            if(objectBoatSchedule.day != "" && objectBoatSchedule.time != "" && objectBoatSchedule.price != "" && objectBoatSchedule.boatpertime !="" ){
                    $.ajax({
                        type: "GET",
                        url: "https://ruarduan-backend.com/boattype/schedules/"+chooseLang+"/"+boattypeId,
                        dataType: 'json',
                        success : function(data) {
                                $.ajax({
                                    type : "POST",
                                    contentType : "application/json",
                                    url : "https://ruarduan-backend.com/schedule/"+chooseLang+"/"+boattypeId+"/"+routeId,
                                    data : JSON.stringify(objectBoatSchedule),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Schedule","Add");
                                        chooseBoatSchedule();
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

function editBoatSchedule(id,lan){
    var divBoatSchedule =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formSchedule" class="form-detail">'+
                '<h2>Add Schedule</h2>'+
                '<div class="form-row">'+
                    '<span>Schedule Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                    '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Boattype Name</span><span style="color: red;"> *</span>'+
                    // '<select id="piername-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="choosePierName()">'+
                    //         '<option selected value="base">==Choose Pier Name==</option>'+
                    //       '</select>'+
                    '<input id="boattypename-dropdown" type="text" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Route Name</span><span style="color: red;"> *</span>'+
                    // '<select id="routename-dropdown" class="btn-xxl text-center input-text" name="locality" onclick="chooseRouteName()">'+
                    //         '<option selected value="base">==Choose Route Name==</option>'+
                    //       '</select>'+
                    '<input id="routename-dropdown" type="text" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Day</span><span style="color: red;"> *</span>'+
                    '<input id="valDay" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Operation Time</span><span style="color: red;"> *</span>'+
                    '<input id="valTime" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Boat per Time</span><span style="color: red;"> *</span>'+
                    '<input id="valBpT" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Price</span><span style="color: red;"> *</span>'+
                    '<input id="valPrice" type="text" class="input-text" required>'+
                '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="editDBBoatSchedule" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divBoatSchedule;
    document.getElementById("valLan").value = chooseLang;
    document.getElementById("boattypename-dropdown").value = boattypeName;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";
    var options = {
        url: "https://ruarduan-backend.com/schedules",

        getValue: "day",

        list: {
            maxNumberOfElements: 1,
            match: {
                enabled: true
            }
        }
    };
    $("#valDay").easyAutocomplete(options);
    var options = {
        url: "https://ruarduan-backend.com/schedules",

        getValue: "time",

        list: {
            maxNumberOfElements: 1,
            match: {
                enabled: true
            }
        }
    };
    $("#valTime").easyAutocomplete(options);
    var spanclose = document.getElementsByClassName("closeform")[0];
    spanclose.onclick = function() {
        modal.style.display = "none";
    }
    var btnclose = document.getElementById("editDBBoatSchedule");

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/schedules/"+lan+"/"+id.toString(),
        dataType: 'json',
        success: function (data) {
            document.getElementById("valId").value = data.scheduleId.schedule_id.toString();
            document.getElementById("routename-dropdown").value = data.routeSchedule.routeName;
            document.getElementById("valDay").value = data.day;
            document.getElementById("valTime").value = data.time;
            document.getElementById("valPrice").value = data.price;
            document.getElementById("valBpT").value = data.boatpertime;
            
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
        var objectBoatSchedule = {
            scheduleId: {
                schedule_id: document.getElementById("valId").value,
                scheduleLanguages: chooseLang
            },
            day: document.getElementById("valDay").value,
            time:document.getElementById("valTime").value,
            price: parseFloat(document.getElementById("valPrice").value),
            boatpertime:parseInt(document.getElementById("valBpT").value)
        }
            $.ajax({
                type : "PUT",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/schedule/update/"+lan+"/"+id.toString(),
                data : JSON.stringify(objectBoatSchedule),
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
                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Schedule","Edit");
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

function deleteBoatSchedule(id,lan){
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
            url : "https://ruarduan-backend.com/schedule/"+lan+"/"+id,
            dataType : 'json',
            success : function() {
                swal(
                    'Successful',
                    'Your data has been delete.',
                    'success');
                chooseBoatSchedule();
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