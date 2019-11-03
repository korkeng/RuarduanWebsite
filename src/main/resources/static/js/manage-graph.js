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

            var aggregatedObject = Enumerable.From(data)
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
    console.log(people); 
    console.log(price); 
    console.log("array[0].price: "+aggregatedObject[0].price);   
    console.log("array[1].price: "+aggregatedObject[1].price);  
    console.log("array[0].people: "+aggregatedObject[0].people);  
    console.log("array[1].people: "+aggregatedObject[1].people);   


Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Tickets Status Statistics'
    },
    // subtitle: {
    //     text: 'Source: WorldClimate.com'
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
    
});


