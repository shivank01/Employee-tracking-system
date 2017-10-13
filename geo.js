var val=atob(window.localStorage.getItem('userid'));
if(val != null) { 
 function getLocation() {
    if (navigator.geolocation) {
    	function showLocation(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
}
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alertify.error('.....');
    }
}
function showPosition(position) {

var lat=btoa(position.coords.latitude);
var long=btoa(position.coords.longitude);
window.localStorage.setItem("lat",lat);
window.localStorage.setItem("long",long);
setTimeout(function(){
$("#send").click();
},2000)
//console.log(lat);
}	
}else {
  window.location.href="index.html";
}


$(document).ready(function(){

$("#send").click(function() {
  var value=atob(window.localStorage.getItem('userid'));
  var date=(window.localStorage.getItem('date'));
  var value2=atob(window.localStorage.getItem('lat'));
  var value3=atob(window.localStorage.getItem('long'));
  var time=(window.localStorage.getItem('time'));
  if(value != null) {
	if ($.trim(value2).length > 0 & $.trim(value3).length >0) {
                $.ajax({
                    type: "POST",
                    url: "https://seekmycell.000webhostapp.com/mycollegep/geo.php",   //172.17.6.209  //localhost
                    data:{lat:value2,long:value3,value:value,date:date,time:time},
                    crossDomain: true,
                    cache:false,
                    beforeSend: function() {
                        alertify.success("Uploading..........");
                    },
                        success: function(data) {
                        if (data=="success") {
                          alertify.success("Uploaded... successfully");
                        }                      
                        else if (data == "failed") {
                           alertify.error('failed to send');
                        }
}
});
}
        return false;
      }
      else {
        window.location.href="index.html";
      }
});
}); 