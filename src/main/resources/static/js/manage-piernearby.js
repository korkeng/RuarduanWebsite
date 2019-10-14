$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

})

var tableData;
var dataLength;
var chooseLang;

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



function choosePierNearby() {

  var listPier = document.getElementById("locality-dropdown");
  var pierVal = listPier.options[listPier.selectedIndex].value;

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/piers/nearby/"+chooseLang+"/"+pierVal,
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
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
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
                document.getElementById("tableAddData").innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"addDataButton\" onclick=\"addPlaceType()\">"+
                                                                    "ADD NEARBY"+
                                                                    "</button>";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}
