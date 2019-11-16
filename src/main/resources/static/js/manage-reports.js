$(document).ready(function() {
    
    $("button").click(function(){
      $("button").removeClass("activeB");
      $(this).addClass("activeB");
    });

    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/overall",
        dataType: 'json',
        success: function (data) {
                      
            var dataHeader = ["<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Overall Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                
            }   

            Highcharts.setOptions({
                colors: ['#19bde6', '#f26338', '#fad920', '#3cf51b', 'black']
            });

            Highcharts.chart('container', {
                chart: {
                    type: 'spline',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Price Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Price',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Price',
                    type: 'spline',
                    data: [data[0][1],data[1][1],data[2][1],data[3][1]],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }

                }]
            });

        

            Highcharts.chart('container1', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Passengers Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Passengers',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Passengers',
                    type: 'column',
                    data: [data[0][2],data[1][2],data[2][2],data[3][2]],
                    tooltip: {
                        valueSuffix: ' person'
                    }
                }]
            });

            Highcharts.chart('container2', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Tickets Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Price',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Total Passengers ',
                        style: {
                            // color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        
                        style: {
                            // color: Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Passengers',
                    type: 'column',
                    yAxis: 1,
                    data: [data[0][2],data[1][2],data[2][2],data[3][2]],
                    tooltip: {
                        valueSuffix: ' person'
                    }

                }, {
                    name: 'Price',
                    type: 'spline',
                    data: [data[0][1],data[1][1],data[2][1],data[3][1]],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }
                    
                }]
            });

        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
});

var tableData;
var dataLength;

function changeViewOverall() {
    $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/overall",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Overall Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "block";
                document.getElementById("con1").style.display = "block";
                document.getElementById("con2").style.display = "block";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "block";
                document.getElementById("con1").style.display = "block";
                document.getElementById("con2").style.display = "block";
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    }); $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/overall",
        dataType: 'json',
        success: function (data) {
                      
            var dataHeader = ["<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Overall Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "block";
                document.getElementById("con1").style.display = "block";
                document.getElementById("con2").style.display = "block";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "block";
                document.getElementById("con1").style.display = "block";
                document.getElementById("con2").style.display = "block";
            }   

            Highcharts.setOptions({
                colors: ['#19bde6', '#f26338', '#fad920', '#3cf51b', 'black']
            });

            Highcharts.chart('container', {
                chart: {
                    type: 'spline',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Price Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Price',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Price',
                    type: 'spline',
                    data: [data[0][1],data[1][1],data[2][1],data[3][1]],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }

                }]
            });

        

            Highcharts.chart('container1', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Passengers Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Passengers',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Passengers',
                    type: 'column',
                    data: [data[0][2],data[1][2],data[2][2],data[3][2]],
                    tooltip: {
                        valueSuffix: ' person'
                    }
                }]
            });

            Highcharts.chart('container2', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Tickets Statistics Group by Boattype'
                },
                // subtitle: {
                //     text: 'Source: WorldClimate.com'
                // },
                xAxis: [{
                    categories: ['Blue Flag','Orange Flag','Yellow Flag','Green Flag'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total Price',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Total Passengers ',
                        style: {
                            // color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        
                        style: {
                            // color: Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: true
                },
                 plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    name: 'Passengers',
                    type: 'column',
                    yAxis: 1,
                    data: [data[0][2],data[1][2],data[2][2],data[3][2]],
                    tooltip: {
                        valueSuffix: ' person'
                    }

                }, {
                    name: 'Price',
                    type: 'spline',
                    data: [data[0][1],data[1][1],data[2][1],data[3][1]],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }
                    
                }]
            });
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewToday() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/today",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Date</b>","<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Today Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                document.getElementById("con1").style.display = "none";
                document.getElementById("con2").style.display = "none";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                document.getElementById("con1").style.display = "none";
                document.getElementById("con2").style.display = "none";
                
            }   

        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewYesterday() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/yesterday",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Date</b>","<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Yesterday Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                document.getElementById("con1").style.display = "none";
                document.getElementById("con2").style.display = "none";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                document.getElementById("con1").style.display = "none";
                document.getElementById("con2").style.display = "none";
                
            }
                  
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeView7days() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/7days",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Date</b>","<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "7 Days Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                 document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
            } 

        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewMonths() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/months",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Month</b>","<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Month Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewYears() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/years",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Years</b>","<b>Boattype ID</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Year Report group by Boattype";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                            case 3:
                                cellData[j].innerHTML = ""+data[i][3].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length; 
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none";
                
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}

function changeViewSumYears() {
       $.ajax({
        type: "GET",
        url: "https://ruarduan-backend.com/tickets/report/sumyears",
        dataType: 'json',
        success: function (data) {
            
            var dataHeader = ["<b>Year</b>","<b>Total Price</b>","<b>Total passengers</b>"];
            var cellHeader = [];
            document.getElementById("tableHeader").innerHTML = "Years Report";
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                           
                        } 
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none"; 
                
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
                                cellData[j].innerHTML = ""+data[i][0].toString();
                                break;
                            case 1:
                                cellData[j].innerHTML = ""+data[i][1].toString();
                                break;
                            case 2:
                                cellData[j].innerHTML = ""+data[i][2].toString();
                                break;
                        }
                    }        
                }
                tableData = $('#dataTable').DataTable();
                dataLength = data.length;
                document.getElementById("con").style.display = "none";
                 document.getElementById("con1").style.display = "none";
                 document.getElementById("con2").style.display = "none"; 
                
            }   
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
}



