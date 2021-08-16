var hum = document.querySelector('.site-header-hum');
var menu = document.querySelector('.site-header-menu');
var close = document.querySelector('.site-header-menu-close');
hum.addEventListener('click', function(){
	menu.classList.add('site-header-menu-open');
});

close.addEventListener('click', function(){
	menu.classList.remove('site-header-menu-open');
});