$(document).ready(function() {
    
     $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/places",
        dataType: 'json',
        success: function (data) {
             data.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                return obj1.placeId.placeid - obj2.placeId.placeid;
            });
            lastPlaceId = (data[(data.length - 1)].placeId.placeid);
            newLastPlaceId = (data[(data.length - 1)].placeId.placeid)+1;
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});

var tableData;
var dataLength;
var chooseLang;
var placeId;
var placetypeId;
var lastId;
var newLastId;
var placetypeName;

function chooseLangENG() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== Choose Place Type ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/placetypes/eng';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.placeTypeId.placetype_id).text(entry.name));
      })
    });

    chooseLang="ENG";
    console.log("langE:"+chooseLang)
}

function chooseLangTH() {

    let dropdown = $('#locality-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>== เลือกประเภทสถานที่ ==</option>');
    dropdown.prop('selectedIndex', 0);

    const url = 'https://ruarduan-backend.com/placetypes/th';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.placeTypeId.placetype_id).text(entry.name));
      })
    });

    chooseLang="TH";
    console.log("langT:"+chooseLang)
}


function choosePlaceTypePlace() {

  var listPlacetypeName = document.getElementById("locality-dropdown");
      placetypeId = listPlacetypeName.options[listPlacetypeName.selectedIndex].value;
      placetypeName = listPlacetypeName.options[listPlacetypeName.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/"+chooseLang+"/"+placetypeId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Name</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Placetype - Place";
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
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPlace()\">"+
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
                                cellData[j].innerHTML = ""+data[i].name;
                                break;
                            case 2:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-remove\"><button type=\"button\" class=\"btn btn-danger btn-rounded btn-sm my-0\" onclick=\"deletePlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Delete</button></span>";
                                break;
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPlace()\">"+
                                                                    "ADD PLACE"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function addPlace(){

    var divPlace =
    '<div id="page-contentid" class="page-content">'+
        '<div class="form-v5-content">'+
            '<span class="closeform">&times;</span>'+
            '<form id="formPlace" class="form-detail">'+
                '<h2>Add Place to Placetype</h2>'+
                '<div class="form-row">'+
                    '<span>Place Id</span><span style="color: red;"> *</span>'+
                    '<input id="valId" type="number" class="input-text" required disabled>'+
                '</div>'+
                '<div class="form-row">'+
                    '<span>Languages</span><span style="color: red;"> *</span>'+
                        '<select id="valLan" class="btn-xxl text-center input-text" name="locality" >'+
                            '<option selected value="base">==Choose Language==</option>'+
                    '</select>'+
                    // '<input id="valLan" type="text" class="input-text" placeholder="Ex. TH, ENG" required>'+
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
                // '<div class="form-row">'+
                //     '<span>Latitude</span><span style="color: red;"> *</span>'+
                //     '<input id="valLat" type="text" class="input-text" required disabled>'+
                // '</div>'+
                // '<div class="form-row">'+
                //     '<span>Longitude</span><span style="color: red;"> *</span>'+
                //     '<input id="valLong" type="text" class="input-text" required disabled>'+
                // '</div>'+
                '<div class="form-row">'+
                    '<span>Latitude & Longitude</span><span style="color: red;"> *</span>'+
                    '<div id="googleMap" style="width:100%;height:400px;margin-bottom: 26px;"></div>'+
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
                //         '<select id="valType" class="btn-xxl text-center input-text" name="locality" onclick="choosePlaceTypeName()">'+
                //             '<option selected value="base">==Choose Placetype Name==</option>'+
                //     '</select>'+
                    // '<input id="valType" type="number" class="input-text" required>'+
                // '</div>'+
                '<div class="form-row-last">'+
                    '<input type="button" id="addDBPlace" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlace;
    document.getElementById("valId").value = newLastPlaceId;
    document.getElementById("valLan").value = chooseLang; 
    // document.getElementById("valType").value = placetypeId
    
    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/places",

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
    var btnclose = document.getElementById("addDBPlace");
    let dropdown = $('#valLan');
    var usedNames = [];
    var listLang = document.getElementById("valLan");
    const url = 'https://ruarduan-backend.com/places';
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        if (usedNames.indexOf(entry.placeId.placeLanguages) == -1) {
                $("#valLan").append("<option value=" + key + ">" + entry.placeId.placeLanguages + "</option>"); 
            }
        usedNames.push(entry.placeId.placeLanguages);
      })
    });
    var mapProp= {
        center:new google.maps.LatLng(13.729295, 100.501006),
        zoom:12.95,
    };
    var maps = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker();

    google.maps.event.addListener(maps, 'click', function(e){

        if(marker.getPosition() != null){
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            position: e.latLng,
            map: maps
        });
        // console.log(marker.getPosition().lat().toFixed(4));
        //  console.log(marker.getPosition().lng().toFixed(4));
    });
    btnclose.onclick = function() {
        chooseLang = listLang.options[listLang.selectedIndex].text;
        var objectPlace = {
            placeId: {
                placeid: document.getElementById("valId").value,
                placeLanguages: chooseLang
            },
            name:   document.getElementById("valName").value,
            pic_path: document.getElementById("valPic").value,
            description: document.getElementById("valDes").value,
            time_length: document.getElementById("valTime").value,
            // pos_latitude: parseFloat(document.getElementById("valLat").value),
            // pos_longtitude: parseFloat(document.getElementById("valLong").value),
            pos_latitude: parseFloat(marker.getPosition().lat().toFixed(4)),
            pos_longtitude: parseFloat(marker.getPosition().lng().toFixed(4)),
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
                                    url : "https://ruarduan-backend.com/place/"+document.getElementById("valLan").value+"/"+placeTypeId,
                                    data : JSON.stringify(objectPlace),
                                    dataType : 'json',
                                    success : function() {
                                        swal(
                                            'Successful',
                                            'Your data has been add.',
                                            'success');

                                        modal.style.display = "none";
                                        setNumNoti(document.getElementById("valId").value,chooseLang,"Place","Add");
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
                                url : "https://ruarduan-backend.com/place/"+chooseLang+"/"+placetypeId,
                                data : JSON.stringify(objectPlace),
                                dataType : 'json',
                                success : function() {
                                    swal(
                                        'Successful',
                                        'Your data has been add.',
                                        'success');

                                    modal.style.display = "none";
                                    
                                    setNumNoti(document.getElementById("valId").value,chooseLang,"Place","Add");
                                    choosePlaceTypePlace();
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
                '<h2>Edit Place</h2>'+
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
                // '<div class="form-row">'+
                //     '<span>Latitude</span><span style="color: red;"> *</span>'+
                //     '<input id="valLat" type="text" class="input-text" required disabled>'+
                // '</div>'+
                // '<div class="form-row">'+
                //     '<span>Longitude</span><span style="color: red;"> *</span>'+
                //     '<input id="valLong" type="text" class="input-text" required disabled>'+
                // '</div>'+
                '<div class="form-row">'+
                    '<span>Latitude&Longitude</span><span style="color: red;"> *</span>'+
                    '<div id="googleMap" style="width:100%;height:400px;margin-bottom: 26px;"></div>'+
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
                    '<input type="button" id="editDBPlace" class="btn btn-sm" value="Done"/>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>';

    document.getElementById("showPopupForm").innerHTML = divPlace;

    var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

     var modal = document.getElementById("showPopupForm"); 
    modal.style.display = "block";

    var options = {
        url: "https://ruarduan-backend.com/places",

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
    var btnclose = document.getElementById("editDBPlace");

    var mapProp= {
        center:new google.maps.LatLng(13.729295, 100.501006),
        zoom:12.95,
    };
    var maps = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker;
    var markerLat;
    var markerLong;

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

            // document.getElementById("valLat").value = data.pos_latitude;
            // document.getElementById("valLong").value = data.pos_longtitude;
            document.getElementById("valLo").value = data.location;
            document.getElementById("valLink").value = data.external_link;
            document.getElementById("valLim").value = data.limitation;
            document.getElementById("valTel").value = data.tel;
            document.getElementById("valTrans").value = data.transportation;

            marker = new google.maps.Marker({
                position: new google.maps.LatLng( data.pos_latitude, data.pos_longtitude),
                map: maps,
                title: ''+data.name,
                draggable: false
            });
            markerLat = data.pos_latitude;
            markerLong = data.pos_longtitude;
            // google.maps.event.addListener(marker, 'dragend', function (evt) {
            //     newMarkerLat = evt.latLng.lat().toFixed(6);
            //     newMarkerLong = evt.latLng.lng().toFixed(6);
            // });
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
            // pos_latitude: parseFloat(document.getElementById("valLat").value),
            // pos_longtitude: parseFloat(document.getElementById("valLong").value),
            pos_latitude: parseFloat(markerLat),
            pos_longtitude: parseFloat(markerLong),
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
                    setNumNoti(document.getElementById("valId").value,document.getElementById("valLan").value,"Place","Edit");
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
                choosePlaceTypePlace();
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
