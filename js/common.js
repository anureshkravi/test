// JavaScript Document

$(window).load(function(){
	$("#it:checked");
	
	});
	
$('#selectall').click(function(){ 
     $(':checkbox').prop("checked", true);
	 alert("All item selected.");
});

$('#selectall').click(function(){ 
     $(':checkbox').prop("checked", false);
	 alert("All item deselect.");
});
