//Check of specific todos by clicking
//Need to add listener to entire UL parent - "li" adds future potential strike through
$("ul").on("click", "li", function() {
	//if li is gray
	$(this).toggleClass("completed");
})

//click on remove to delete todo
$("ul").on("click", "span", function(event) {
	//prevent event bubble up - ensures stops on span and does not trigger li
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});

//creation of new todos
$("input[type='text']").keypress(function(event) {
	//checking char code is 13 = which is enter key
	if(event.which === 13) {
		var todoText = $(this).val();
		//clear input text
		$(this).val("");

		//NOTE: click() ONLY adds listeners for existing elements
		//		on() will add listneres for all potential future elements

		//create new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
	}

});

//toggle the add new todo
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})