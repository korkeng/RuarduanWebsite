$(document).ready(function() {
   
    $.ajax({
       type: "GET",
       url: "https://ruarduan-backend.com/tickets",
       dataType: "json",
       success: function (data){
            document.getElementById("count-ticket").innerHTML = data.length;
            var totalPrice = 0;
            for (i = 0; i < data.length; i++) {  
                totalPrice += data[i].price;  
            }
            document.getElementById("total-price").innerHTML = totalPrice;
            var totalPeople = 0;
            for (i = 0; i < data.length; i++) {  
                totalPeople += data[i].people;  
            }
            document.getElementById("total-people").innerHTML = totalPeople;

            var ticketObject = Enumerable.From(data)
            .OrderBy("$.boattype_id.boattypeId.boattype_id")
            .GroupBy("$.boattype_id.boattypeId.boattype_id", null,
            function (key, g) {
               return {
                   boattype_id: {
                        boattypeId: {
                            boattype_id: key,
                        },
                    },
                   price: g.Sum("$.price"),
                   people: g.Sum("$.people"),
                }

             })
            .ToArray();
            var i;
            people = [];
            price = [];

            for (i in ticketObject) {
                 console.log("testLoop: "+ticketObject[i].boattype_id.boattypeId.boattype_id + " " + ticketObject[i].people + " " + ticketObject[i].price);
                 people = ticketObject[i].people;
                 price = ticketObject[i].price;

            }
            console.log(ticketObject);  

            Highcharts.setOptions({
                colors: ['#19bde6', '#f26338', '#fad920', '#3cf51b', 'black']
            });

            Highcharts.chart('container', {
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
                        text: 'Total People',
                        style: {
                            // color: Highcharts.getOptions().colors[1]
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Total Price ',
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
                    name: 'Price',
                    type: 'column',
                    yAxis: 1,
                    data: [ticketObject[0].price,ticketObject[1].price,ticketObject[2].price,ticketObject[3].price],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }

                }, {
                    name: 'People',
                    type: 'spline',
                    data: [ticketObject[0].people,ticketObject[1].people,ticketObject[2].people,ticketObject[3].people],
                    tooltip: {
                        valueSuffix: ' person'
                    }
                }]
            });






            var aggregatedObject = Enumerable.From(data)
            .OrderBy("$.status")
            .GroupBy("$.status", null,
                function (key, g) {
                   return {
                       status: key,
                       price: g.Sum("$.price"),
                       people: g.Sum("$.people"),
                    }
                })
            .ToArray();
            var i;
            people = [];
            price = [];

            for (i in aggregatedObject) {
                 console.log("testLoop: "+aggregatedObject[i].status + " " + aggregatedObject[i].people + " " + aggregatedObject[i].price);
                 people = aggregatedObject[i].people;
                 price = aggregatedObject[i].price;

            }
            console.log(aggregatedObject); 

            Highcharts.setOptions({
                colors: ['#55cbe6','#4d2909','black']
            });

            Highcharts.chart('container2', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: 'Overall Tickets Status Statistics'
                },
                // subtitle: {
                //     text: 'Status: 1 = Not Used Ticket, 2 = Used Ticket '
                // },
                xAxis: [{
                    categories: ['Not Used Tickets', 'Used Tickets'],
                    crosshair: true
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Total People',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Total Price ',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: true
                },
                // plotOptions: {
                //     series: {
                //         colorByPoint: true
                //     }
                // },
                series: [{
                    name: 'Price',
                    type: 'column',
                    yAxis: 1,
                    data: [aggregatedObject[0].price,aggregatedObject[1].price],
                    tooltip: {
                        valueSuffix: ' THB.'
                    }

                }, {
                    name: 'People',
                    type: 'spline',
                    data: [aggregatedObject[0].people,aggregatedObject[1].people],
                    tooltip: {
                        valueSuffix: ' person'
                    }
                }]
            });

        },
        error: function (e) {
            console.log("Error: "+e);
        }
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
        },
        error: function (e) {
            console.log("Error:"+e);
        }
    });
    
});





