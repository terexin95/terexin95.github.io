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

console.log(items.length)

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


if (document.querySelector('.calculator__range')) {
	let range = document.querySelector('.calculator__range input');
	let client = document.querySelector('.calculator__range-text');
	let sum = document.querySelector('.calculator__img-text p');
	range.addEventListener('input', function(){
		if (this.value == 1) {
			client.textContent = "1 клиент в день.";
			sum.textContent = "от 1 234 800 ₽";
		} else if (this.value == 2) {
			client.textContent = "2 клиента в день.";
			sum.textContent = "от 2 469 600 ₽";
		} else if (this.value == 3) {
			client.textContent = "3 клиента в день.";
			sum.textContent = "от 3 704 400 ₽";
		} else if (this.value == 4) {
			client.textContent = "4 клиента в день.";
			sum.textContent = "от 4 939 200 ₽";
		} else if (this.value == 5) {
			client.textContent = "5 клиентов в день.";
			sum.textContent = "от 6 174 000 ₽";
		} else if (this.value == 6) {
			client.textContent = "6 клиентов в день.";
			sum.textContent = "от 7 408 800 ₽";
		} else if (this.value == 7) {
			client.textContent = "7 клиентов в день.";
			sum.textContent = "от 8 643 600 ₽";
		} else if (this.value == 8) {
			client.textContent = "8 клиентов в день.";
			sum.textContent = "от 9 878 400 ₽";
		} else if (this.value == 9) {
			client.textContent = "9 клиентов в день.";
			sum.textContent = "от 11 113 200 ₽";
		} else if (this.value == 10) {
			client.textContent = "10 клиентов в день.";
			sum.textContent = "от 12 348 000 ₽";
		} else if (this.value == 11) {
			client.textContent = "11 клиентов в день.";
			sum.textContent = "от 13 582 800 ₽";
		} else if (this.value == 12) {
			client.textContent = "12 клиентов в день.";
			sum.textContent = "от 14 817 600 ₽";
		} else if (this.value == 13) {
			client.textContent = "13 клиентов в день.";
			sum.textContent = "от 16 052 400 ₽";
		} else if (this.value == 14) {
			client.textContent = "14 клиентов в день.";
			sum.textContent = "от 17 287 200 ₽";
		} else if (this.value == 15) {
			client.textContent = "15 клиентов в день.";
			sum.textContent = "от 18 522 000 ₽";
		} else if (this.value == 16) {
			client.textContent = "16 клиентов в день.";
			sum.textContent = "от 19 756 800 ₽";
		} else if (this.value == 17) {
			client.textContent = "17 клиентов в день.";
			sum.textContent = "от 20 991 600 ₽";
		} else if (this.value == 18) {
			client.textContent = "18 клиентов в день.";
			sum.textContent = "от 22 226 400 ₽";
		} else if (this.value == 19) {
			client.textContent = "19 клиентов в день.";
			sum.textContent = "от 23 461 200 ₽";
		} else if (this.value == 20) {
			client.textContent = "20 клиентов в день.";
			sum.textContent = "от 24 696 000 ₽";
		}
	});
}

if (document.querySelector('.slider-one')) {
	const swiper = new Swiper('.slider-one .swiper', {
	    navigation: {
	      nextEl: ".slider-one-button-next",
	      prevEl: ".slider-one-button-prev",
	    },
	    spaceBetween: 5,
	    slidesPerView: 3,
	    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	    breakpoints: {
		    0: {
		      slidesPerView: 1,
		      spaceBetween: 5
		    },
		    600: {
		      slidesPerView: 2,
		      spaceBetween: 10
		    },
		    808: {
		      slidesPerView: 3,
		      spaceBetween: 20
		    }
		  }
		});
}

if (document.querySelector('.slider-two')) {

      var swiper = new Swiper(".slider-two .swiper2", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".slider-two .swiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-two-button-next",
          prevEl: ".slider-two-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
    
}

if (document.querySelector('.checkbox-custom')) {
	for (var i = 0; i < document.querySelectorAll('.checkbox-custom').length; i++) {
		if (!document.querySelectorAll('.checkbox-custom')[i].classList.contains('checkbox-custom--disabled')) {
			let inpCheck = document.querySelectorAll('.checkbox-custom')[i].querySelector('input')
			if (inpCheck.checked == true) {
				inpCheck.parentElement.classList.add('checkbox-custom--active')
			}
			document.querySelectorAll('.checkbox-custom')[i].addEventListener('click', function(){
				this.classList.toggle('checkbox-custom--active');
			})
		}
	}
}

if (document.querySelector('.select-custom')) {
	let customSelect = document.querySelectorAll('.select-custom');
  function selectCusomaizer(div) {
  	let span = div
  	for (var i = 0; i < span.length; i++) {
  		
  		// console.log(span[i])
  		let selectWrap = document.createElement('div');
			let selectList = document.createElement('div');
			let selectActive = document.createElement('div');
			selectActive.classList.add('select-custom__active');
			selectList.classList.add('select-custom__list');
			selectWrap.classList.add('select-custom__wrap');
  		let thx = span[i]
  		let selectOpt = thx.querySelectorAll('select option');
  		selectOpt = Array.from(selectOpt)

  		selectOpt.forEach(function(element){

				let thx = element;
				let selectOption = document.createElement('div');
				selectOption.classList.add('select-custom__list-item');
				selectOption.setAttribute('data-text', element.value)
				if (element.getAttribute('data-color')) {
					selectOption.setAttribute('data-color', element.getAttribute('data-color'))
					selectOption.style.color = element.getAttribute('data-color');
				}
				selectOption.setAttribute('data-index', i);
				selectOption.textContent = element.value;
				selectList.append(selectOption);
				if (thx.selected == true) {
					selectActive.textContent = thx.textContent;
					selectActive.style.color = thx.getAttribute('data-color')
					selectOption.style.display = "none";
				}

  		})
  		selectWrap.append(selectActive, selectList);
			thx.append(selectWrap);
			selectList.addEventListener('click', function(e){
				if (e.target.classList.contains('select-custom__list-item')) {

					selectActive.textContent = e.target.textContent;

					if (e.target.getAttribute('data-color')) {
						selectActive.style.color = e.target.getAttribute('data-color');
					}

					selectOpt[e.target.getAttribute('data-index')].selected = 'selected';
					selectWrap.classList.remove('select-custom__wrap--active');

					for (var i = 0; i < thx.querySelectorAll('.select-custom__list-item').length; i++) {
						thx.querySelectorAll('.select-custom__list-item')[i].style.display = "block";
					}

					e.target.style.display = "none";
				}
			});

			selectActive.addEventListener('click', function(){
				selectWrap.classList.toggle('select-custom__wrap--active');
			});
  	}
  }

  selectCusomaizer(customSelect);
}

if (document.querySelector('.catalog__filter-mobile')) {
	document.querySelector('.catalog__filter-mobile').addEventListener('click', function(){
		document.querySelector('.catalog__sidebar').style.display = "block"
	});
	document.querySelector('.catalog__sidebar-close').addEventListener('click', function(){
		document.querySelector('.catalog__sidebar').style.display = "none"
	});
}

class Tabs {
  constructor(element) {
    this.tabs = element;
    this.toggles = this.tabs.querySelectorAll('.tabs__toggle');
    this.panels = this.tabs.querySelectorAll('.tabs__tab-panel')
  }
  init() {
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        this.toggles.forEach(toggle => {
          toggle.classList.remove('active');
        })
        this.panels.forEach(panel => {
          panel.classList.remove('active');
        })
        e.target.classList.add('active');
        this.tabs.querySelector(`.tabs__tab-panel[data-tab='${e.target.dataset.tab}']`).classList.add('active')
      })
    })
  }
}

if (document.querySelector('.tabs')) {
	document.querySelectorAll('.tabs').forEach(tab =>{
	  const tabs = new Tabs(tab);
	  tabs.init();
	})
}