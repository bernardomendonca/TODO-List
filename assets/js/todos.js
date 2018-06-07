//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X (trash can) to delete TODO
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

var counterMorning = 14;
var counterAfternoon = 14;
var counterNight = 10;
$("input[type='text']").keypress(function(){
	if(event.which === 13){
		// grabbing new TODO for input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$(this).parent().find("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		// decrease 1 point from counter 
		counterMorning = counterMorning - 1;
		$("#counterMorning").text(counterMorning);	
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});