define(['select2'],function(){
	
	$(".testA1").select2({});
	
	$(".testA2").select2({
		theme:"bootstrap"
	});
	
	$(".testA3").select2({
		theme:"flat"
	});
	
	$(".testA4").select2({theme:"flat"});
	$("#enabled").on("click", function () {
	  $(".testA4").prop("disabled", false);
	});
	
	$("#disabled").on("click", function () {
	  $(".testA4").prop("disabled", true);
	});
	
	$(".testA5").select2({theme:"flat"});
	
	
});