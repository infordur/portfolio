$(document).ready(function () {
	
	//alert($posElem);
	/*$ventana.scroll(function() {
		/* Act on the event */
		/*if($ventana.scrollTop()>=$posElem){
			//alert("Hola");
			$(".barrasDevelopment li").addClass('barraDev');
			$(".barrasProduction li").addClass('barraProd');
			$(".barrasOther li").addClass('barraOther');
			
		}
	});*/

	
});

jQuery(function($) {

	$('#bloqueDisenoFB h2').waypoint(function() {
		$(this).toggleClass( 'fadeInDown animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('#bloqueSobreMi h2').waypoint(function() {
		$(this).toggleClass( 'fadeInDown animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('#bloqueMisTrabajos h2').waypoint(function() {
		$(this).toggleClass( 'fadeInDown animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('.tituloConocimientos').waypoint(function() {
		$(this).toggleClass( 'fadeInLeft animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('.barrasDevelopment li').waypoint(function() {
		$(this).toggleClass( 'barraDev animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('.barrasProduction li').waypoint(function() {
		$(this).toggleClass( 'barraProd animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('.barrasOther li').waypoint(function() {
		$(this).toggleClass( 'barraOther animated' );
	},
	{
		offset: '70%',
		triggerOnce: true
	});

	$('#contactame h2').waypoint(function() {
		$(this).toggleClass( 'fadeInDown animated' );
	},
	{
		offset: '80%',
		triggerOnce: true
	});
});