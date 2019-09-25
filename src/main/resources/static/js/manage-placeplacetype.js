$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "SHOPPING MALL AND MARKET Table [ENG]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});

var tableData;
var dataLength;

function changeViewShopEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "SHOPPING MALL AND MARKET Table [ENG]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewShopTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/th/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "SHOPPING MALL AND MARKET Table [TH]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewTemEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/eng/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "TEMPLE Table [ENG]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewTemTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/th/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "TEMPLE Table [TH]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewMuEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/eng/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "MUSEUM AND CULTURAL Table [ENG]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewMuTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/th/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "MUSEUM AND CULTURAL Table [TH]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewParkEng() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/eng/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "PARK Table [ENG]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewParkTh() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/placetypes/th/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Place ID</b>","<b>Place Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "PARK Table [TH]";
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
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;  
                
                 
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
                           
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
               
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}