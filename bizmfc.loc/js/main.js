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

document.addEventListener('scroll', function(){
	console.log(window.pageYOffset);
	if (window.pageYOffset > 550) {
		document.querySelector('.site-nav').classList.add('site-nav--fixed');
	} else {
		if (document.querySelector('.site-nav--fixed')) {
			document.querySelector('.site-nav--fixed').classList.remove('site-nav--fixed');
		}
	}
});

let menu_has_item = document.querySelectorAll('.menu-has-item')
for (var i = 0; i < menu_has_item.length; i++) {
	let arrowDown = document.createElement('div');
	arrowDown.classList.add('arrowDown')
	menu_has_item[i].append(arrowDown);
	arrowDown.addEventListener('click', function(){
		this.parentElement.classList.toggle('menu-has-item--active')
	});
}

let mobileOpen = document.querySelector('.header-mobile__humburger');

mobileOpen.addEventListener('click', function(){
	document.querySelector('.mobile-menu').classList.toggle('mobile-menu--open');
});

if (document.querySelector('.open__callback__form')) {
	let open__callback__form = document.querySelectorAll('.open__callback__form');
	for (var i = 0; i < open__callback__form.length; i++) {
		open__callback__form[i].addEventListener('click', function(){
			document.querySelector('.modal-callback').style.display = "block";
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
		});
	}
	document.querySelector('.overlay').addEventListener('click', function(){
		document.querySelector('.modal-callback').style.display = "none";
		document.querySelector('.overlay').style.display = "none";
		document.querySelector('body').style.overflow = "auto";
	});	
}

if (document.querySelector('select')) {
	let tables = document.getElementsByTagName('select'),
    length = tables.length,
    i, wrapper;

	for (i = 0; i < length; i++) {
	    wrapper = document.createElement('div');
	    wrapper.setAttribute('class', 'select');
	    tables[i].parentNode.insertBefore(wrapper, tables[i]);
	    wrapper.appendChild(tables[i]);
	}
}

//acc

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

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
