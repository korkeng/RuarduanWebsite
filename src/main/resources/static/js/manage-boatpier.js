$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Blue Flag Table [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewBlueEng() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/eng/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Blue Flag Table [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewBlueTh() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/th/1",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Blue Flag Table [TH]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewOrangeEng() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/eng/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Orange Flag Table [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewOrangeTh() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/th/2",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Orange Flag Table [TH]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewYellowEng() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/eng/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Yellow Flag Table [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewYellowTh() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/th/3",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Yellow Flag Table [TH]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewGreenEng() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/eng/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Green Flag Table [ENG]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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

function changeViewGreenTh() {
       $.ajax({
        type: "GET",
        url: "https://139.99.117.190:8080/piers/boats/types/th/4",
        dataType: 'json',
        success: function (data) {
            var dataHeader = ["<b>Pier ID</b>","<b>Pier Code</b>","<b>Pier Name</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Green Flag Table [TH]";
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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
                                cellData[j].innerHTML = ""+data[i].pierId.pier_id.toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i].pier_code;
                                break;
                            case 2:
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