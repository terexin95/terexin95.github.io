if(document.querySelector('.input-checkbox__item')){
	var inpCheck = document.querySelectorAll('input[type=checkbox]');
	for (var i = 0; i < inpCheck.length; i++) {
		inpCheck[i].addEventListener('click', function(){
			if (this.parentElement.parentElement.parentElement.querySelector('.input-checkbox__item--active')) {
				var parentEL = this.parentElement.parentElement.parentElement.querySelector('.input-checkbox__item--active');
				parentEL.classList.remove('input-checkbox__item--active');
			}
			this.parentElement.classList.add('input-checkbox__item--active')
		})
	}
}

if (document.querySelector('.open__modal__cover')) {
	var open__modal__cover = document.querySelectorAll('.open__modal__cover');
	for (var i = 0; i < open__modal__cover.length; i++) {
		open__modal__cover[i].addEventListener('click', function(){
			document.querySelector('.modal-cover').style.display = "block";
			document.querySelector('.modal-gallery').style.display = "none";
			document.querySelector('.modal-background').style.display = "none";
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
		});	
	}
}

if (document.querySelector('.open__modal__gallery')) {
	var open__modal__gallery = document.querySelectorAll('.open__modal__gallery');
	for (var i = 0; i < open__modal__gallery.length; i++) {
		open__modal__gallery[i].addEventListener('click', function(){
			document.querySelector('.modal-gallery').style.display = "block";
			document.querySelector('.modal-cover').style.display = "none";
			document.querySelector('.modal-background').style.display = "none";
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
		});	
	}
}

if (document.querySelector('.open__modal__background')) {
	var open__modal__background = document.querySelectorAll('.open__modal__background');
	for (var i = 0; i < open__modal__background.length; i++) {
		open__modal__background[i].addEventListener('click', function(){
			document.querySelector('.modal-gallery').style.display = "none";
			document.querySelector('.modal-cover').style.display = "none";
			document.querySelector('.modal-background').style.display = "block";
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
		});	
	}
}

if (document.querySelector('.overlay')) {
	document.querySelector('.overlay').addEventListener('click', function(){
		document.querySelector('.modal-gallery').style.display = "none";
		document.querySelector('.modal-cover').style.display = "none";
		document.querySelector('.modal-background').style.display = "none";
		document.querySelector('.overlay').style.display = "none";
		document.querySelector('body').style.overflow = "auto";
	});
}

if (document.querySelector('.registration__item-add')) {
	document.querySelector('.registration__item-add').addEventListener('click', function(){
		document.querySelector('.registration__form').classList.toggle('registration__form--active')
	});
}

if (document.querySelector('.site-header__hum')) {
	document.querySelector('.site-header__hum').addEventListener('click', function(){
		document.querySelector('body').style.overflow = "hidden";
		document.querySelector('.mobile-menu').style.display = "block";
		document.querySelector('.site-header__hum').style.display = "none";
		document.querySelector('.site-header__close').style.display = "block";
	});
}

if (document.querySelector('.site-header__close')) {
	document.querySelector('.site-header__close').addEventListener('click', function(){
		document.querySelector('body').style.overflow = "auto";
		document.querySelector('.mobile-menu').style.display = "none";
		document.querySelector('.site-header__hum').style.display = "block";
		document.querySelector('.site-header__close').style.display = "none";
	});
}

if (document.querySelector('.chat__sidebar-wrap')) {
	var msgItem = document.querySelectorAll('.chat__sidebar-wrap .chat__item');
	for (var i = 0; i < msgItem.length; i++) {
		msgItem[i].addEventListener('click', function(){
			document.querySelector('.chat__content').style.display = "block";
		})
	}
	document.querySelector('.chat__back').addEventListener('click', function(){
		document.querySelector('.chat__content').style.display = "none";
	})
}