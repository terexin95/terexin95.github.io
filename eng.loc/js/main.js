$('.btn-mobile-menu').click(function(){
	$(this).parent().toggleClass('nav-active');
	$('body').toggleClass('overflow-hidden');
});

$('.slider-slick').slick({
	arrows: true,
	fade: true,
	prevArrow: '<button class="slick-prev prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12H1.5" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 1.5L1.5 12L12 22.5" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	nextArrow: '<button class="slick-prev next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 12H22.5" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 1.5L22.5 12L12 22.5" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
});

 $('.linea-block-num').spincrement({
    thousandSeparator: "",
    duration: 4200
});

$('input[name="language"]').click(function(){
	$(this).parent().find('ul').slideToggle();
});

$('.input-menu li').click(function(){
	$('.lang input').focus();
	var lang = $(this).attr('data-value');
	$('input[name="language"]').val(lang);
	$('.input-menu').slideUp();
	console.log($(this).attr('data-value'));
});

$('.modal-close').click(function(){
	$('.modal').fadeOut(300);
	$('.overlay').fadeOut(400);
	$('body').css({'overflow' : 'unset'});
});

$('.btn-modal').click(function(){
	$('.modal').fadeIn(500);
	$('.overlay').fadeIn(400);
	$('body').css({'overflow' : 'hidden'});
});