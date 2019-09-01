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
