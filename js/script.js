$(document).ready(function(){


	$('#navbar ul li').each(function(index, elemento){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			top:'0'
		}, 2000 + (index * 500));
	});

	if( $(window).width() > 800 ){
		$('.navbar-brand').css({
			opacity:0
		});

		$('.navbar-brand').animate({
			opacity:1
		}, 2000);

	}

	//Calcula el scroll
	var acercaDe = $('#acerca-de').offset().top, 
		menu= $('#platillos').offset().top,
		galeria= $('#galeria').offset().top,
		ubicacion= $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){

		e.preventDefault();

		$('html, body').animate({
			scrollTop: acercaDe
		}, 500);
	});

	$('#btn-menu').on('click', function(e){

		e.preventDefault();

		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){

		e.preventDefault();

		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){

		e.preventDefault();

		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});



});