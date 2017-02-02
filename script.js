/*function paraClick(){
	alert("Para Clicked.")
}
function addDiv(){
	$('button').after('<p class="pClass">Para</p>');
}*/
$(document).ready(function(){
	console.log($('div').css('background-color'));
	$('div').css('background-color', 'yellow');
	// $('button').click(addDiv);
	// // $('.pClass').click(paraClick); //will not work
	// $(document).on('click','.pClass',paraClick); //$(PARENT).on(EVENT,SELECTOR,FUNCTION)

	// var text = $('#test').text();
	// var html = $('#test').html();
	// $('#test').after(text);
	// // $('#test').after(html);
	/*Other EventHandlers:
		// change
		// after
		// before
		// insertAfter
		// insertBefore
		// next
		// prev
		// css
		// eq(0).css
		// eq(0).siblings*/
		// mouseenter
		// mouseout
	// $('div.a').html('123');
	// $('span.a').html('456');
	//selectors: ('tag')('#id')('.class')('tag#id')('tag.class')
	/*$('#randomDiv').hover(function(){
		console.log("mouse hover.");
	},function(){
		console.log("mouse not hover.")
	});*/
});
/*function print_console() {
    console.log("Saurabh");
};*/
