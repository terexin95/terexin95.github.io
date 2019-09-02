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
	$('#modal-1, #modal-2, #modal-3, #modal-4').fadeOut(300);
	$('.overlay').fadeOut(400);
	$('body').css({'overflow' : 'unset'});
});

$('.btn-modal-1').click(function(){
	$('#modal-2').fadeIn(500);
	$('.overlay').fadeIn(400);
	$('body').css({'overflow' : 'hidden'});
	return false;
});

$('.btn-modal-2').click(function(){
	$('#modal-3').fadeIn(500);
	$('.overlay').fadeIn(400);
	$('body').css({'overflow' : 'hidden'});
	return false;
});

$('.btn-modal-3').click(function(){
	$('#modal-1').fadeIn(500);
	$('.overlay').fadeIn(400);
	$('body').css({'overflow' : 'hidden'});
	return false;
});

$('.btn-modal-4').click(function(){
	$('#modal-4').fadeIn(500);
	$('.overlay').fadeIn(400);
	$('body').css({'overflow' : 'hidden'});
	return false;
});

$('header ul li a').click(function(){
	$('header ul li a').removeClass('active');
	$(this).addClass('active');
	$('.btn-mobile-menu').parent().removeClass('nav-active');
	$('body').removeClass('overflow-hidden');
});

$(document).ready(function() {

	$(".mail-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".mail-form").trigger("reset");
			$('.thanks').fadeIn();
			$(".mail-form").slideUp();
		});
		return false;
	});
	
});

document.addEventListener("DOMContentLoaded", function(){
	console.log('1');
	$('.map-yandex').append('<script charset="utf-8" defer src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7c7571f71c82f69e7ddf9f5c00c0697592259b943f0c9b6f37ee311163625864&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>');
});