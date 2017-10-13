	$(document).ready(function() {
        var value = window.localStorage.getItem('userid');
        if(value == null) {
        $("#submit").click(function() {
            var userid = $("#user").val();
            var password = $("#password").val();
            if($.trim(userid).length > 0 & $.trim(password).length > 0) {
            var dataString = "userid=" + userid + "&password=" + password + "&insert=";
                $.ajax({
                    type: "POST",
                    url: "https://seekmycell.000webhostapp.com/mycollegep/clogin.php",   //172.17.6.209 //localhost
                    data:{id:userid,pass:password},
                    crossDomain:true,
                    cache:false,
                    beforeSend: function() {
                       alertify.success("connecting......")
                    },
                    success: function(data) {
                        if (data=="success") {
                            alertify.success("Preparing your dashboard...");
                        	var alo =btoa(userid);
                        	window.localStorage.setItem('userid',alo);
                        	var cool = atob(window.localStorage.getItem('userid'));
                        	$.ajax({
                        		type:"POST",
                        		url:"https://seekmycell.000webhostapp.com/mycollegep/cname.php",
                        		data:{user:cool},
                        		crossDomain:true,
                        		cache:false,
                        		dataType:'json',
                        		success:function(data){
                        			$.each(data.name, function(i,user){
                        		var username=btoa(user.name);
                        		var qualification=btoa(user.qualification);
                        		window.localStorage.setItem('username',username);
                        	window.localStorage.setItem('qualification',qualification);
                        		window.location.href="dash.html";
                            });
                        		}

                        	})
                        }
                        else {
                        	alertify.error("Incorrect userid or password");
                        	$("#password").val("");
                        	$("#user").val("");
                        }
                    }
                });
            } else {
            	alertify.error("UserID and Password must be of length greater than 0");
            	$("#password").val("");
                        	$("#user").val("");
            }
            });
    } else {
        window.location.href="dash.html";
    }
    });