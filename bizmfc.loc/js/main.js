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
			}
			slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
			sliderItem[counter].style.display = "flex";
			sliderDot[counter].classList.add('slider__dot--active');
		});
	}

	sliderNext.addEventListener('click', function(){
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].style.display = "none";
		}
		slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
		if (counter == sliderItem.length-1) {
			counter = 0;
			sliderItem[counter].style.display = "flex";
			sliderDot[counter].classList.add('slider__dot--active');
		} else {
			counter++;
			sliderItem[counter].style.display = "flex";
			sliderDot[counter].classList.add('slider__dot--active');
		}
	});

	sliderPrev.addEventListener('click', function(){
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].style.display = "none";
		}
		slider.querySelector('.slider__dot--active').classList.remove('slider__dot--active');
		if (counter == 0) {
			counter = sliderItem.length-1;
			sliderItem[counter].style.display = "flex";
			sliderDot[counter].classList.add('slider__dot--active');
		} else {
			counter--;
			sliderItem[counter].style.display = "flex";
			sliderDot[counter].classList.add('slider__dot--active');
		}
	});
}

//phone mask

if (document.querySelector("input[type='tel']")) {
	[].forEach.call(document.querySelectorAll("input[type='tel']"), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
}
