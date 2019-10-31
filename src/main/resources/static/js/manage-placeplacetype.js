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

// function choosePlaceTypeName() {

//     let dropdown = $('#piername-dropdown');
//     var listPlacetypeName = document.getElementById("piername-dropdown");
//     placetypeId = listPlacetypeName.options[listPlacetypeName.selectedIndex].value;
//     placetypeName = listPlacetypeName.options[listPlacetypeName.selectedIndex].text;
//     const url = 'https://ruarduan-backend.com/placetypes/'+chooseLang;
//     $.getJSON(url, function (data) {
//       $.each(data, function (key, entry) {
//         dropdown.append($('<option></option>').attr('value', entry.placeTypeId.placetype_id).text(entry.name));
//       })
//     });
// }

function choosePlaceTypePlace() {

  var listPlacetypeName = document.getElementById("locality-dropdown");
      placetypeId = listPlacetypeName.options[listPlacetypeName.selectedIndex].value;
      placetypeName = listPlacetypeName.options[listPlacetypeName.selectedIndex].text;
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/"+chooseLang+"/"+placetypeId,
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Name</b>","<b>New Lang.</b>","<b>Edit</b>","<b>Delete</b>"];
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addPlaceNewLang("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Add</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
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
                                cellData[j].innerHTML = "<span class=\"table-add\"><button type=\"button\" class=\"btn btn-info btn-rounded btn-sm my-0\" onclick=\"addPlaceNewLang("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Add</button></span>";
                                break;
                            case 3:
                                cellData[j].innerHTML = "<span class=\"table-edit\"><button type=\"button\" class=\"btn btn-warning btn-rounded btn-sm my-0\" onclick=\"editPlace("+data[i].placeId.placeid+",\'"+data[i].placeId.placeLanguages+"\')\">Edit</button></span>";
                                break;
                            case 4:
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

