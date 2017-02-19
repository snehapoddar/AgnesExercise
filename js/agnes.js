$(window).on('load',function () {
    "use strict";
    $("body").css("background-color", "black");
    //alert("hello")
  //   loadJSON(function(response) {
	 //  // Parse JSON string into object
	 //    var actual_JSON = JSON.parse(response);
	 //    console.log("response is " + actual_JSON);
 	// });
    //var json = JSON.parse();
    //alert(json);
 }); 

$(document).ready(function() {
    $('#login').submit(function() {
        var email = $('.emailInput').val();
		var pass = $('.passwordInput').val();
		if((email === "kazem@groupten.com") && (pass ==="123456789"))
    		location.href = 'events.html';
        else 
        	location.href = 'login.html';
        return false;
    });
});


// function loadJSON(callback) {   
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', '../AgnesExercise/events.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }

