$(document).ready(function() {
	$('#myModalBtn').click(function(){
		$("#myModal").load("/scipyla/program/1", function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                alert(msg + xhr.status + " " + xhr.statusText);
            }
        });
	});

	$('#myModalBtn2').click(function(){
		$("#myModal").load("/scipyla/program/1", function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                alert(msg + xhr.status + " " + xhr.statusText);
            }
        });
	});

});