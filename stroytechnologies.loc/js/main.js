if (document.querySelector('.slider')) {
	let slider = document.querySelector('.slider');
	let sliderItem = slider.querySelectorAll('.slider__item');
	let counter = 0;
	let sliderNext = slider.querySelector('.slider__next');
	let sliderPrev = slider.querySelector('.slider__prev');
	for (var i = sliderItem.length-1; i > -1; i--) {
		let liDot = document.createElement('li');
		liDot.setAttribute('data-dot', i);
		liDot.classList.add('slider__dot');
		if (i == 0) {
			liDot.classList.add('slider__dot--active');
		}
		sliderPrev.after(liDot);
	}
	let sliderDot = slider.querySelectorAll('.slider__dot');
	for (var i = sliderDot.length - 1; i >= 0; i--) {
		sliderDot[i].addEventListener('click', function(){
			counter = this.getAttribute('data-dot');
			for (let i = 0; i < sliderItem.length; i++) {
				sliderItem[i].style.display = "none";
				sliderItem[i].classList.remove('leftAnimation');
			}
			slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
			sliderItem[counter].style.display = "flex";
			sliderItem[counter].classList.add('leftAnimation');
			sliderDot[counter].classList.add('slider__dot--active');
		});
	}

	sliderNext.addEventListener('click', function(){
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].style.display = "none";
			sliderItem[i].classList.remove('leftAnimation');
		}
		slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
		if (counter == sliderItem.length-1) {
			counter = 0;
			sliderItem[counter].style.display = "flex";
			sliderItem[counter].classList.add('leftAnimation');
			sliderDot[counter].classList.add('slider__dot--active');
		} else {
			counter++;
			sliderItem[counter].style.display = "flex";
			sliderItem[counter].classList.add('leftAnimation');
			sliderDot[counter].classList.add('slider__dot--active');
		}
	});

	sliderPrev.addEventListener('click', function(){
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].style.display = "none";
			sliderItem[i].classList.remove('rightAnimation');
		}
		slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
		if (counter == 0) {
			counter = sliderItem.length-1;
			sliderItem[counter].style.display = "flex";
			sliderItem[counter].classList.add('rightAnimation');
			sliderDot[counter].classList.add('slider__dot--active');
		} else {
			counter--;
			sliderItem[counter].style.display = "flex";
			sliderItem[counter].classList.add('rightAnimation');
			sliderDot[counter].classList.add('slider__dot--active');
		}
	});
}

if (document.querySelector('.open__modal__callback')) {
	let open__modal__callback = document.querySelectorAll('.open__modal__callback');
	for (var i = 0; i < open__modal__callback.length; i++) {
		open__modal__callback[i].addEventListener('click', function(){
			document.querySelector('.modal-callback').style.display = "block";
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
		})
	}
	let close = document.querySelector('.modal-callback__close');
	close.addEventListener('click', function(){
		document.querySelector('.modal-callback').style.display = "none";
		document.querySelector('.overlay').style.display = "none";
		document.querySelector('body').style.overflow = "auto";
	})
	let overlay = document.querySelector('.overlay');
	overlay.addEventListener('click', function(){
		document.querySelector('.modal-callback').style.display = "none";
		document.querySelector('.overlay').style.display = "none";
		document.querySelector('body').style.overflow = "auto";
	})
}

if (document.querySelector('.header-mobile__humburger')) {
	document.querySelector('.header-mobile__humburger').addEventListener('click', function(){
		document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
		document.querySelector('body').classList.toggle('hidden');
	});
}