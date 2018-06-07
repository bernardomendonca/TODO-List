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
		// decreasing the couter of respective day-section
		var test = $(this).parent().find("h1").text();
		if (test.indexOf('Morning') >= 0) {
			counterMorning = counterMorning - 1;
			$(this).parent().find("span").text(counterMorning);
		} else if (test.indexOf('Afternoon') >= 0) {
			counterAfternoon = counterAfternoon - 1;
			$(this).parent().find("span").text(counterAfternoon);	
		} else {
			counterNight = counterNight - 1;
			$(this).parent().find("span").text(counterNight);				
		};
	};
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});