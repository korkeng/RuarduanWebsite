$(document).ready(function() {

    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Blue Flag [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
    
});

var tableData;
var dataLength;

function changeViewBlueEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Blue Flag [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewBlueTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/th/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Blue Flag [TH]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewOrangeEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/eng/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Orange Flag [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewOrangeTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/th/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Orange Flag [TH]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewYellowEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/eng/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Yellow Flag [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewYellowTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/th/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Yellow Flag [TH]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewGreenEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/eng/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Green Flag [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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

function changeViewGreenTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/boattype/schedules/th/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Schedule ID</b>","<b>Route Name</b>","<b>Day</b>","<b>Time</b>","<b>Boat per Time</b>","<b>Price</b>","<b>Edit</b>","<b>Delete</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Schedule Table: Green Flag [TH]";
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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
                                cellData[j].innerHTML = ""+data[i].routeSchedule.routeName;
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