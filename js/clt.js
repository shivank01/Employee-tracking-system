

var value = window.localStorage.getItem('userid');
		$(document).ready(function(){
            var o ="open";
            var mess ="mess";

               if(value != null) {
                var array = new Array()
                {vote.html,user.html,rosei2status.html,rosei2.html,rosei1.html,rosei.html,result.html,profile.html,page.html,open.html,notice.html,myright.html,myacc.html,mess.html,medical.html,mapof.html,logout.html,local.html,getstatus.html,front.html,cnotice.html,attendance.html  }
                $('#clt').keypress(function(e) {
                if (e.which == 13) {
                   $("#submit").click();
                }
            });
         $("#submit").click(function(){
           /* console.log(o);*/
      	var cmd = $("#clt").val();
        var valid = cmd+".html";
     	if (cmd == o+" dashboard") {
    	window.location.href="front.html";
            }
            else if (cmd == o+" account") {
                window.location.href="myacc.html";
            }
            else if(cmd == o+" mess") {
             window.location.href="rosei.html";
            } 
            else if(cmd == o+" fee")
             {
            window.location.href="user.html";	
            } 
            else if(cmd =="exit") {
               window.location.href="open.html";
            }
            else if (cmd =="logout") {
                window.location.href="logout.html";
            }else if(cmd == "") {
                $("#clt").val("white spaces are not any command");
            }
            else if (cmd == o+" result") {
                window.location.href="result.html";
            }
            else if (cmd == o+" attendance") {
                window.location.href="attendence.html";
            }
            else if (cmd == o+" right") {
                window.location.href="myright.html";
            }
            /*else if (cmd == o+" notice") {
                window.location.href="notice.html";
            }*/
            else if (cmd == o+" chat") {
                window.location.href="chat.html";
            }
            else if (cmd == o+" announcement") {
                window.location.href="announcement.html";
            }
            else if (cmd == o+" profile") {
                window.location.href="profile.html";
            }
            else if (cmd == o+" map") {
                window.location.href="map.html";
            }
            else if (cmd == o+" coursenotice") {
                window.location.href="coursenotice.html";
            }
            else if (cmd == o+" vote") {
                window.location.href="vote.html";
            }
            else if (cmd == o+" chooseelective") {
                window.location.href="chooseelective.html";
            }
            else if (cmd == o+" coursefeedback") {
                window.location.href="coursefeedback.html";
            }
            else if (cmd == o+" onlinecourse") {
                window.location.href="onlinecourse.html";
            }
            else if (cmd == o+" club") {
                window.location.href="club.html";
            }
            else if (cmd == o+" "+mess+" rosei1") {
                window.location.href="rosei1.html";
            }
            else if (cmd == o+" "+mess+" rosei2") {
                console.log(cmd);
                window.location.href="rosei2.html";
            }
            else if (s) {
                console.log(s);
              /*  window.location.href= cmd+".html";*/

            }
            else {
                $("#clt").val("command not found");

            }
            });
             } else {
                window.location.href="index.html";
             }
             
		   });