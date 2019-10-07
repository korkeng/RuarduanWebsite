$(document).ready(function() {
    if(localStorage.getItem('setNumAlert') == null){
        document.getElementById("numNoti").innerHTML = "";
    } else {
        document.getElementById("numNoti").innerHTML = ""+localStorage.getItem('setNumAlert');
    }
});
var numNotiCount = 0;
var hiddenAlertNoti = true;
function setNumNoti (id,lan,table,type) {
    console.log("get data");
    if(table == "Place" && type == "Add"){
        $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPlace = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "ADD",
                    table_language: lan,
                    description: "Place data ID:"+id+" has been add.",
                    iconType: "plus-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPlace),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }else if(table == "Place" && type == "Edit"){
         $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPlace = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "EDIT",
                    table_language: lan,
                    description: "Place data ID:"+id+" has been edit.",
                    iconType: "pencil-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPlace),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }
    else if(table == "PlaceType" && type == "Add"){
        $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPlaceType = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "ADD",
                    table_language: lan,
                    description: "Place type data ID:"+id+" has been add.",
                    iconType: "plus-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/placetype/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPlaceType),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }else if(table == "PlaceType" && type == "Edit"){
         $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPlaceType = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "EDIT",
                    table_language: lan,
                    description: "Place Type data ID:"+id+" has been edit.",
                    iconType: "pencil-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/placetype/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPlaceType),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }
    else if(table == "Pier" && type == "Add"){
        $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPier = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "ADD",
                    table_language: lan,
                    description: "Pier data ID:"+id+" has been add.",
                    iconType: "plus-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/pier/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPier),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }else if(table == "Pier" && type == "Edit"){
         $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                var notiId = data.length + 1;
                var objectPier = {
                    logsId: {
                        logs_id:  notiId,
                        logsLanguages: "ENG"
                    },
                    operationName:  "EDIT",
                    table_language: lan,
                    description: "Pier data ID:"+id+" has been edit.",
                    iconType: "pencil-square"
                }
                $.ajax({
                    type : "POST",
                    contentType : "application/json",
                    url : "https://ruarduan-backend.com/log/create/pier/"+lan+"/"+id+"/"+window.localStorage.getItem("adminId"),
                    data : JSON.stringify(objectPier),
                    dataType : 'json',
                    success : function() {
 
                    },
                    error : function(e) {
                        swal(
                            'Error',
                            ''+e.responseJSON.message,
                            'error');
                      console.log("ERROR: ", e);
                    }
                });

            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }


    if(localStorage.getItem('setNumAlert') == null){
        numNotiCount = 0;
    }else{
        numNotiCount = parseInt(localStorage.getItem('setNumAlert'));
    }

    if(numNotiCount == 0){
        numNotiCount = numNotiCount + 1 ;
        document.getElementById("numNoti").innerHTML = ""+numNotiCount;
        localStorage.setItem('setNumAlert', numNotiCount);
    }else{
        numNotiCount = parseInt(localStorage.getItem('setNumAlert')) + 1 ;
        document.getElementById("numNoti").innerHTML = ""+numNotiCount;
        localStorage.setItem('setNumAlert', numNotiCount);
    }

    // document.getElementById("alertdropdown").innerHTML = alertmessage;
}

function setMessageNoti () {
    console.log("hello");
    if(document.getElementById("dropdownbody").rows.length > 0){
        for(i = 0; i < window.localStorage.getItem("dataLengthNotiAdmin"); i++){
            document.getElementById("dropdownbody").deleteRow(0);
        }
        $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
            dataType : 'json',
            success : function(data) {
                for(i = 0; i < data.length; i++){//change data.l to num if want to set num noti
                    var alertmessage = 
                    '<div>'+
                    '<a href="#">'+
                        '<span class="photo"><i class="fa fa-'+data[i].iconType+' text-white"></i></span>'+
                                '<span class="subject">'+
                                '<span class="from">'+
                                data[i].accountId.userName+
                                '</span>'+
                                '<span class="time">'+
                                data[i].operationDate.substring(0,10)+' | '+data[i].operationDate.substring(11,19)+
                                '</span>'+
                                '</span>'+
                                '<span class="message">'+
                                 data[i].description+
                                '</span>'+
                    '</a>'+
                '</div>';
                var body = document.getElementById("dropdownbody");
                var rowbody = body.insertRow(0);
                var databody = rowbody.insertCell(0);
                databody.innerHTML = alertmessage;
                }
                window.localStorage.setItem("dataLengthNotiAdmin",data.length);
            },
            error : function(e) {
                swal(
                    'Error',
                    ''+e.responseJSON.message,
                    'error');
              console.log("ERROR: ", e);
            }
        });
    }else{
        $.ajax({
                type : "GET",
                contentType : "application/json",
                url : "https://ruarduan-backend.com/logs/createdat/asc/eng",
                dataType : 'json',
                success : function(data) {
                    for(i = 0; i < data.length; i++){//change data.l to num if want to set num noti
                        var alertmessage = 
                        '<div>'+
                        '<a href="#">'+
                            '<span class="photo"><i class="fa fa-'+data[i].iconType+' text-white"></i></span>'+
                                    '<span class="subject">'+
                                    '<span class="from">'+
                                    data[i].accountId.userName+
                                    '</span>'+
                                    '<span class="time">'+
                                    data[i].operationDate.substring(0,10)+' | '+data[i].operationDate.substring(11,19)+
                                    '</span>'+
                                    '</span>'+
                                    '<span class="message">'+
                                    data[i].description+
                                    '</span>'+
                        '</a>'+
                    '</div>';
                    var body = document.getElementById("dropdownbody");
                    var rowbody = body.insertRow(0);
                    var databody = rowbody.insertCell(0);
                    databody.innerHTML = alertmessage;
                    }
                    window.localStorage.setItem("dataLengthNotiAdmin",data.length);
                },
                error : function(e) {
                    swal(
                        'Error',
                        ''+e.responseJSON.message,
                        'error');
                  console.log("ERROR: ", e);
                }
            });
    }
}


function alertNoti () {
    if(hiddenAlertNoti){
        setMessageNoti();
        document.getElementById("numNoti").innerHTML = "";
        localStorage.removeItem('setNumAlert');
        numNotiCount = 0;
        hiddenAlertNoti = false;
    } else {
        document.getElementById("numNoti").innerHTML = "";
        localStorage.removeItem('setNumAlert');
        numNotiCount = 0;
        hiddenAlertNoti = true;
    }
}