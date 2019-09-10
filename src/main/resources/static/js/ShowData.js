/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    $.ajax({
       type: "GET",
       url: "https://ruarduan-backend.com/places",
       dataType: "json",
       success: function (data){
            document.getElementById("test").innerHTML =""+data.length;
        },
        error: function (e) {
            console.log("Error: "+e);
        }
    });
});
    

