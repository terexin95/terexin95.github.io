if (document.querySelector('.search-page__block-button')) {
	document.querySelector('.search-page__inner').addEventListener('touchstart', btnTouchStart, false);
	document.querySelector('.search-page__inner').addEventListener('touchmove', btnTouchMove, false);

	let x1 = null;
	let y1 = null;

	function btnTouchStart(event) {
		const firstTouch = event.touches[0];

		x1 = firstTouch.clientX;
		y1 = firstTouch.clientY;
	}

	function btnTouchMove(event) {
		if(!x1 || !y1) {
			return false;
		}

		let x2 = event.touches[0].clientX;
		let y2 = event.touches[0].clientY;

		let xDiff = x2 - x1;
		let yDiff = y2 - y1;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0 ) {
			} else {
			}
		} else {
			if (yDiff > 0) {
				// document.querySelector('.search-page__block').classList.add('search-page__block-bottom');
				// document.querySelector('.search-page__map').classList.add('search-page__map--active');
				// document.querySelector('.search-page__block').classList.remove('search-page__block-top');
				// if (document.querySelector('.search-page__buttons--active')) {document.querySelector('.search-page__buttons--active').classList.remove('search-page__buttons--active');}
			} else {
				document.querySelector('.search-page__block').classList.add('search-page__block-top');
				document.querySelector('.search-page__buttons').classList.add('search-page__buttons--active');
				document.querySelector('.search-page__map').classList.remove('search-page__map--active');
				document.querySelector('.search-page__block').classList.remove('search-page__block-bottom');
			}
		}
	}
}

if (document.querySelectorAll('.search-page__item-favorites')) {
	var favoritBtn = document.querySelectorAll('.search-page__item-favorites');
	for(var i = 0; i < favoritBtn.length; i++){
		favoritBtn[i].addEventListener('click', function(){
			this.classList.toggle('search-page__item-favorites--active');
		});
	}
}


window.onscroll = function() {
	if (document.getElementById("header-sticky")) {
		var header = document.getElementById("header-sticky");
		var sticky = header.offsetTop;
		if (window.pageYOffset > sticky) {
		    header.classList.add("sticky");
		  } else {
		    header.classList.remove("sticky");
		  }
	}
};
var inputHeaderCity = document.querySelector('.search-city__input input');

inputHeaderCity.addEventListener("focusin", function(){
	inputHeaderCity.parentElement.classList.add('search-city__input--focused');
	document.querySelector('.search-city__result').classList.add('search-city__result--active');
	if (document.querySelector('.search-page__block')) {
		document.querySelector('.search-page__block').classList.add('search-page__block-bottom');
	}
});
inputHeaderCity.addEventListener("focusout", function(){
	inputHeaderCity.parentElement.classList.remove('search-city__input--focused');
	document.querySelector('.search-city__result').classList.remove('search-city__result--active');
});

var inputHeaderCalendar = document.querySelector('.calendar-form__input input');

inputHeaderCalendar.addEventListener("focusin", function(){
	inputHeaderCalendar.parentElement.classList.add('calendar-form__input--focused');
	document.querySelector('.calendar-form__inner').classList.add('calendar-form__inner--active');
});
// inputHeaderCalendar.addEventListener("focusout", function(){
// 	inputHeaderCalendar.parentElement.classList.remove('calendar-form__input--focused');
// 	document.querySelector('.calendar-form__inner').classList.remove('calendar-form__inner--active');
// });


if (document.querySelector('.selection__city-input')) {
	var inputSelectionCity = document.querySelector('.selection__city-input');

	inputSelectionCity.addEventListener("click", function(){
		inputSelectionCity.parentElement.classList.add('selection__city--focused');
		document.querySelector('.selection__city-result').classList.add('selection__city-result--active');
		document.querySelector('.selection__block').classList.add('selection__block--active');
		document.querySelector('.selection').classList.add('selection--active');

		if (document.querySelector('.selection__calendar-wrap--active')) {
			document.querySelector('.selection__calendar-wrap--active').classList.remove('selection__calendar-wrap--active');
		}
		
		
	});
}

if (document.querySelector('.selection__calendar')) {
	var inputSelectionCalendar = document.querySelector('.selection__calendar');

	inputSelectionCalendar.addEventListener("click", function(){
		inputSelectionCalendar.parentElement.classList.add('selection__calendar--focused');
		document.querySelector('.selection__calendar-wrap').classList.add('selection__calendar-wrap--active');
		document.querySelector('.selection__block').classList.add('selection__block--active');
		document.querySelector('.selection__city-result').classList.remove('selection__city-result--active');
		document.querySelector('.selection').classList.add('selection--active');
	});
	inputSelectionCalendar.addEventListener("focusin", function(){
		inputSelectionCalendar.parentElement.classList.add('selection__city--focused');
		document.querySelector('.selection__calendar-wrap').classList.add('selection__calendar-wrap--active');
		document.querySelector('.selection__block').classList.add('selection__block--active');
		document.querySelector('.selection__city-result').classList.remove('selection__city-result--active');
		document.querySelector('.selection').classList.add('selection--active');
	});
}

if (document.querySelectorAll('.calendar-input')) {
	var calendarInput = document.querySelectorAll('.calendar-input');
	for(var i = 0; i < calendarInput.length; i++){
		calendarInput[i].addEventListener('change', function(){
			calendarInputVal = this.value;
			if (document.querySelector('.selection__calendar-input')) {
				document.querySelector('.selection__calendar-input').value = calendarInputVal;
			}
			if (document.querySelector('.calendar-form__input input')) {
				document.querySelector('.calendar-form__input input').value = calendarInputVal;
			}
			if (document.querySelector('.office-time__input--text')) {
				document.querySelector('.office-time__input--text').innerHTML = calendarInputVal;
			}
			if (document.querySelector('.office-time__input--text-1')) {
				document.querySelector('.office-time__input--text-1').innerHTML = calendarInputVal;
			}
		});
	}
}

if (document.querySelector('.search-city__item')) {
	var resCity = document.querySelectorAll('.search-city__item');
	for(var i = 0; i < resCity.length; i++){
		resCity[i].addEventListener('click', function(){
			document.querySelector('.search-city__item--active').classList.remove('search-city__item--active');
			this.classList.add('search-city__item--active');
			document.querySelector('.search-city__input input').value = this.textContent;
			document.querySelector('.selection__city-input').value = this.textContent;

		});
	};
}

if (document.querySelector('.selection__city-item')) {

	var selCity = document.querySelectorAll('.selection__city-item');
	console.log(selCity);
	for(var i = 0; i < selCity.length; i++){
		selCity[i].addEventListener('click', function(){
			document.querySelector('.selection__city-item--active').classList.remove('selection__city-item--active');
			this.classList.add('selection__city-item--active');
			document.querySelector('.search-city__input input').value = this.textContent;
			document.querySelector('.selection__city-input').value = this.textContent;

			document.querySelector('.selection__city-input').parentElement.classList.remove('selection__city--focused');
			document.querySelector('.selection__city-result').classList.remove('selection__city-result--active');
			document.querySelector('.selection__block').classList.remove('selection__block--active');
			document.querySelector('.selection').classList.remove('selection--active');

		});
	};
}

//slider 1

var sliderHeaderPosition = 0;
var sliderHeaderWrap = document.querySelector('.rent-slider-1 .rent-slider__wrap');
var sliderHeaderLeft = document.querySelector('.rent-slider-1 .rent-slider__btn-left');
var sliderHeaderRight = document.querySelector('.rent-slider-1 .rent-slider__btn-right');
var sliderHeaderItem = document.querySelectorAll('.rent-slider-1 .rent-slider__item').length;
var sliderHeaderWidth = sliderHeaderItem * -435 + 1305;
var sliderDots = document.querySelectorAll('.rent-slider-1 .rent-slider__dot');


for(var i = 0; i < sliderDots.length; i++){
	sliderDots[i].addEventListener('click', function(){
		document.querySelector('.rent-slider-1 .rent-slider__dot--active').classList.remove('rent-slider__dot--active');
		this.classList.add('rent-slider__dot--active');
		var dotPos = this.dataset.dot;
		var dotActive = dotPos * -310;
		sliderHeaderWrap.style.transform = "translateX("+dotActive+"px)";
	});
}

if (sliderHeaderRight) {
	sliderHeaderRight.addEventListener('click', function(){
		sliderHeaderPosition = sliderHeaderPosition - 435;
		if (sliderHeaderPosition === sliderHeaderWidth) {
			sliderHeaderPosition = 0;
			sliderHeaderWrap.style.transform = "translateX(0px)";
		} else {
			sliderHeaderWrap.style.transform = "translateX("+sliderHeaderPosition+"px)";
		}
	});
}

if (sliderHeaderLeft) {
	sliderHeaderLeft.addEventListener('click', function(){
		if (sliderHeaderPosition === 0) {
			sliderHeaderWrap.style.transform = "translateX(0px)";
		} else {
			sliderHeaderPosition = sliderHeaderPosition + 435;
			sliderHeaderWrap.style.transform = "translateX("+sliderHeaderPosition+"px)";
		}
	});
}

//slider 2

var sliderHeaderPosition1 = 0;
var sliderHeaderWrap1 = document.querySelector('.rent-slider-2 .rent-slider__wrap');
var sliderHeaderLeft1 = document.querySelector('.rent-slider-2 .rent-slider__btn-left');
var sliderHeaderRight1 = document.querySelector('.rent-slider-2 .rent-slider__btn-right');
var sliderHeaderItem1 = document.querySelectorAll('.rent-slider-2 .rent-slider__item').length;
var sliderHeaderWidth1 = sliderHeaderItem * -435 + 1305;
var sliderDots1 = document.querySelectorAll('.rent-slider-2 .rent-slider__dot');


for(var i = 0; i < sliderDots1.length; i++){
	sliderDots1[i].addEventListener('click', function(){
		document.querySelector('.rent-slider-2 .rent-slider__dot--active').classList.remove('rent-slider__dot--active');
		this.classList.add('rent-slider__dot--active');
		var dotPos = this.dataset.dot;
		var dotActive = dotPos * -310;
		sliderHeaderWrap1.style.transform = "translateX("+dotActive+"px)";
	});
}

if (sliderHeaderRight1) {
	sliderHeaderRight1.addEventListener('click', function(){
		sliderHeaderPosition1 = sliderHeaderPosition1 - 435;
		if (sliderHeaderPosition1 === sliderHeaderWidth1) {
			sliderHeaderPosition1 = 0;
			sliderHeaderWrap1.style.transform = "translateX(0px)";
		} else {
			sliderHeaderWrap1.style.transform = "translateX("+sliderHeaderPosition1+"px)";
		}
	});
}

if (sliderHeaderLeft1) {
	sliderHeaderLeft1.addEventListener('click', function(){
		if (sliderHeaderPosition1 === 0) {
			sliderHeaderWrap1.style.transform = "translateX(0px)";
		} else {
			sliderHeaderPosition1 = sliderHeaderPosition1 + 435;
			sliderHeaderWrap1.style.transform = "translateX("+sliderHeaderPosition1+"px)";
		}
	});
}

if (document.querySelector('.range-slider__btn-remove')) {
	document.querySelector('.range-slider__btn-remove').addEventListener('click', function(){
		document.querySelector('.range-slider').reset();
		//document.querySelector('.range-slider-input-3').value = "0";
		//document.querySelector('.class="range-slider-input-1"').value = "0";
	});
}

(function() {

  var parent = document.querySelector(".range-slider-1");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

(function() {

  var parent = document.querySelector(".range-slider-2");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

if (document.querySelector('.search-page__filter-price')) {
	for(var i = 0; i < document.querySelectorAll('.search-page__filter-price-subtitle').length; i++){
		document.querySelectorAll('.search-page__filter-price-subtitle')[i].addEventListener('click', function(){
			this.parentElement.classList.add('search-page__filter-price--active');
		});
	}
	document.querySelectorAll('.range-slider__btn-accept')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-price')[0].classList.remove('search-page__filter-price--active');
	});	
	document.querySelectorAll('.range-slider__btn-accept')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-price')[1].classList.remove('search-page__filter-price--active');
	});	
	
}

if (document.querySelector('.search-page__filter-booking')) {
	document.querySelectorAll('.search-page__filter-booking-subtitle')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-booking')[0].classList.add('search-page__filter-booking--active');
	});
	document.querySelectorAll('.search-page__filter-booking-modal-checkbox label')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-booking')[0].classList.remove('search-page__filter-booking--active');
	});

	document.querySelectorAll('.search-page__filter-booking-subtitle')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-booking')[1].classList.add('search-page__filter-booking--active');
	});
	document.querySelectorAll('.search-page__filter-booking-modal-checkbox label')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-booking')[1].classList.remove('search-page__filter-booking--active');
	});

}

if (document.querySelector('.search-page__filter-feature')) {
	document.querySelectorAll('.search-page__filter-feature-subtitle')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature')[0].classList.add('search-page__filter-feature--active');
	});
	document.querySelectorAll('.search-page__filter-feature-btn-accept')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature')[0].classList.remove('search-page__filter-feature--active');
	});

	document.querySelectorAll('.search-page__filter-feature-subtitle')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature')[1].classList.add('search-page__filter-feature--active');
	});
	document.querySelectorAll('.search-page__filter-feature-btn-accept')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature')[1].classList.remove('search-page__filter-feature--active');
	});
}

if (document.querySelector('.search-page__filter-comfort')) {
	document.querySelectorAll('.search-page__filter-comfort-subtitle')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort')[0].classList.add('search-page__filter-comfort--active');
	});
	document.querySelectorAll('.search-page__filter-comfort-btn-accept')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort')[0].classList.remove('search-page__filter-comfort--active');
	});

	document.querySelectorAll('.search-page__filter-comfort-subtitle')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort')[1].classList.add('search-page__filter-comfort--active');
	});
	document.querySelectorAll('.search-page__filter-comfort-btn-accept')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort')[1].classList.remove('search-page__filter-comfort--active');
	});
}

if (document.querySelector('.search-page__button-full-map')) {
	document.querySelector('.search-page__button-full-map').addEventListener('click', function(){
		document.querySelector('.search-page').classList.add('search-page--active');
	});
}

if (document.querySelector('.search-page__button-post-open')) {
	document.querySelector('.search-page__button-post-open').addEventListener('click', function(){
		if (document.querySelector('.search-page')) {document.querySelector('.search-page').classList.remove('search-page--active')}
		if (document.querySelector('.search-page__buttons-filters--active')) {document.querySelector('.search-page__buttons-filters--active').classList.remove('search-page__buttons-filters--active');}
		if (document.querySelector('.search-page__block-bottom')) {document.querySelector('.search-page__block-bottom').classList.remove('search-page__block-bottom');}
		if (document.querySelector('.search-page__block')) {document.querySelector('.search-page__block').classList.add('search-page__block-top');}
	});
}



var btnComfortShow = document.querySelectorAll('.search-page__filter-comfort-item-button');

if (btnComfortShow) {
	for(var i = 0; i < btnComfortShow.length; i++){
		btnComfortShow[i].addEventListener('click', function(){
			this.classList.toggle('search-page__filter-comfort-item-button--active');
			this.parentElement.classList.toggle('active');
			//this.style.display = "none";
		});
	}
}

if (document.querySelector('.search-page__filter-comfort-btn-delete')) {
	document.querySelectorAll('.search-page__filter-comfort-btn-delete')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort-inner')[0].reset();
	});
	document.querySelectorAll('.search-page__filter-comfort-btn-delete')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-comfort-inner')[1].reset();
	});
}

if (document.querySelector('.search-page__filter-feature-btn-delete')) {
		document.querySelectorAll('.search-page__filter-feature-btn-delete')[0].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature-form')[0].reset();
	});
		document.querySelectorAll('.search-page__filter-feature-btn-delete')[1].addEventListener('click', function(){
		document.querySelectorAll('.search-page__filter-feature-form')[1].reset();
	});
}

if (document.querySelector('.search-page__button-filter')) {
	document.querySelector('.search-page__button-filter').addEventListener('click', function(){
		document.querySelector('.search-page__buttons-filters').classList.toggle('search-page__buttons-filters--active');
		if (document.querySelector('.search-page__buttons-filters').classList.contains('search-page__buttons-filters--active')) {
			document.querySelector('.search-page__buttons').classList.add('search-page__buttons--active');
		} else {
			document.querySelector('.search-page__buttons').classList.remove('search-page__buttons--active');
		}
		
		document.querySelector('.search-page__block').classList.remove('search-page__block-top');
		document.querySelector('.search-page__block').classList.add('search-page__block-bottom');
	});
}

if (document.querySelector('.search-page__buttons-filters-accept')) {
	document.querySelector('.search-page__buttons-filters-accept').addEventListener('click', function(){
		document.querySelector('.search-page__buttons').classList.remove('search-page__buttons--active');
		document.querySelector('.search-page__buttons-filters').classList.remove('search-page__buttons-filters--active');
	});
}

if (document.querySelector('.search-page__button-fullmap')) {
	document.querySelector('.search-page__button-fullmap').addEventListener('click', function(){
		if (document.querySelector('.search-page__block-top')) {document.querySelector('.search-page__block-top').classList.remove('search-page__block-top');}
		if (document.querySelector('.search-page--active')) {document.querySelector('.search-page--active').classList.remove('search-page--active');}
		if (document.querySelector('.search-page__buttons')) {document.querySelector('.search-page__buttons').classList.remove('search-page__buttons--active');}
		if (document.querySelector('.search-page__block')) {document.querySelector('.search-page__block').classList.add('search-page__block-bottom');}
		if (document.querySelector('.search-page__map')) {document.querySelector('.search-page__map').classList.add('search-page__map--active');}
		if (document.querySelector('.search-page')) {document.querySelector('.search-page').classList.add('search-page--active');}
		document.querySelector('.search-page__inner').scroll(0, 0);
	});
}

if (document.querySelector('.time__input')) {
	var timeDrop = document.querySelectorAll('.time__input');

	for(var i = 0; i < timeDrop.length; i++){
		timeDrop[i].addEventListener("focusin", function(){
			this.parentNode.parentNode.classList.add('time--active');
		});
		timeDrop[i].addEventListener("focusout", function(){
			this.parentNode.parentNode.classList.remove('time--active');
		});
	}
}

if(document.querySelector('.office-time__input')){
	document.querySelector('.office-time__input').addEventListener('click', function(){
		document.querySelector('.office-time__modal').classList.add('office-time__modal--active');
	});

	document.querySelector('.office-time__modal-button').addEventListener('click', function(){
		document.querySelector('.office-time__modal').classList.remove('office-time__modal--active');
	});
}

/*
*
* Custom quantity input
* Element requires following HTML structure
* <div class="quantity"><input type="number"/></div>
* 
*
*/

function quantityInput(element, options) {
  const spinner = element;

  const defaultOptions = {
    min: 1,
    max: 250,
    value: 1,
  };

  options = Object.assign({}, defaultOptions, options);

  const obj = {

    input: spinner.querySelector('input[type="number"]'),
    init() {
      this.setup();
      this.events();
      return this;
    },
    setup() {

      this.input.value = options.value;
      this.max = options.max;
      this.min = options.min;

      const qNav = document.createElement('div');
      const qUp = document.createElement('div');
      const qDown = document.createElement('div');

      qNav.setAttribute('class', 'quantity-nav');
      qUp.setAttribute('class', 'quantity-button quantity-button--up');
      qDown.setAttribute('class', 'quantity-button quantity-button--down');

      qUp.innerHTML = '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="6.5" x2="13" y2="6.5" stroke="#ED4040"/><line x1="6.5" y1="13" x2="6.5" stroke="#ED4040"/></svg>';
      qDown.innerHTML = '<svg width="13" height="1" viewBox="0 0 13 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="13" y2="0.5" stroke="#ED4040"/></svg>';
      qNav.appendChild(qUp);
      qNav.appendChild(qDown);
      spinner.appendChild(qNav);

      this.btnUp = spinner.querySelector('.quantity-button--up');
      this.btnDown = spinner.querySelector('.quantity-button--down');
    },
    trigger() {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      return event;
    },
    events() {
      this.btnUp.addEventListener('click', () => {
        const oldValue = parseFloat(this.input.value);
        let newVal;
        if (oldValue >= this.max) {
          newVal = oldValue;
        } else {
          newVal = oldValue + 1;
        }
        this.input.value = newVal;
        this.input.dispatchEvent(this.trigger());
      });

      this.btnDown.addEventListener('click', () => {
        const oldValue = parseFloat(this.input.value);
        let newVal;
        if (oldValue <= this.min) {
          newVal = oldValue;
        } else {
          newVal = oldValue - 1;
        }
        this.input.value = newVal;
        this.input.dispatchEvent(this.trigger());
      });
      this.input.addEventListener('change', () => {
        if (parseInt(this.input.value, 16) < this.min) {
          this.input.value = this.min;
        }
        if (parseInt(this.input.value, 16) > this.max) {
          this.input.value = this.max;
        }
      });
    },
  }
  return obj.init();
}

if (document.querySelector('.quantity')) {
	qtyInpts = document.querySelectorAll('.quantity input');
	for (var i = 0; i < qtyInpts.length; i++) {
		qtyInpts[i].addEventListener('change', function(){
			if (this.value == "") {
				this.value = "0"
			}
		});
	}
}

if (document.querySelector('.time__item')) {
	var timeItem = document.querySelectorAll('.time__item');

	for (var i = 0; i < timeItem.length; i++) {
		timeItem[i].addEventListener('click', function(){
			this.parentElement.parentElement.querySelector('input').value = this.textContent;
		});
	}
}

if (document.querySelector('.office-page__sidebar-button-close')) {
	document.querySelector('.office-page__sidebar-button-close').addEventListener('click', function(){
		document.querySelector('.office-page__sidebar').classList.remove('office-page__sidebar--active');
	});

	document.querySelector('.office-time__button').addEventListener('click', function(){
		document.querySelector('.office-page__sidebar').classList.remove('office-page__sidebar--active');
	});

	document.querySelector('.office-page-button-fixed').addEventListener('click', function(){
		document.querySelector('.office-page__sidebar').classList.add('office-page__sidebar--active');
	});
}

const numberInputs = document.querySelectorAll(".quantity");

if (numberInputs.length > 0) {
  numberInputs.forEach((el, index) => {
    quantityInput(el, {
      min: 0,
      max: 30,
      value: 0,
    });
  });
}

if (document.getElementsByClassName("office-itemwrp")) {
	var acc = document.getElementsByClassName("office-itemwrp");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function () {
	    this.parentElement.classList.toggle("office-item--active");
	  });
	}
}


if(document.querySelector('.carousel')){

	let currentIdx = 0;

	const images = {
		list: createImagesList(0, 1280, 720)
	};
	const thumbnails = {
		list: createImagesList(0, 250, 200)
	};

	const [carouselSlidesUl, carouselThumbnailsUl] = createCarouselContent(
		images,
		thumbnails
	);

	const carouselSlides = carouselSlidesUl.children;
	const carouselThumbnails = carouselThumbnailsUl.children;

	addEvents();

	function addEvents() {
		const prevButton = document.querySelector("#prevButton");
		const nextButton = document.querySelector("#nextButton");

		nextButton.addEventListener("click", handleNext);
		prevButton.addEventListener("click", handlePrev);

		carouselThumbnailsUl.addEventListener("click", handleSelectedThumbnail);
		carouselThumbnailsUl.addEventListener("mouseover", handleHoverImagePreload);

		document.addEventListener("keydown", (e) => {
			if (e.key == "ArrowRight") {
				handleNext();
			}
			if (e.key == "ArrowLeft") {
				handlePrev();
			}
		});

		function handleNext() {
			if (currentIdx < carouselSlides.length - 1) {
				changeCurrentSlide(currentIdx, currentIdx + 1);
				currentIdx += 1;
			} else {
				changeCurrentSlide(currentIdx, 0);
				currentIdx = 0;
			}
		}

		function handlePrev() {
			if (currentIdx > 0) {
				changeCurrentSlide(currentIdx, currentIdx - 1);
				currentIdx -= 1;
			} else {
				changeCurrentSlide(currentIdx, carouselSlides.length - 1);
				currentIdx = carouselSlides.length - 1;
			}
		}

		function handleSelectedThumbnail(e) {
			const newIdx = Array.from(carouselSlides).findIndex(
				(child) => child.firstElementChild.dataset.imgid === e.target.dataset.imgid
			);
			if (newIdx > -1 && newIdx !== currentIdx) {
				loadPrevAndNextImages(newIdx - 1, newIdx + 1);
				changeCurrentSlide(currentIdx, newIdx);
				currentIdx = newIdx;
			}
		}

		function handleHoverImagePreload(e) {
			const newIdx = Array.from(carouselSlides).findIndex(
				(child) => child.firstElementChild.dataset.imgid === e.target.dataset.imgid
			);
			if (newIdx > -1 && newIdx !== currentIdx) {
				loadImage(carouselSlides[newIdx]?.firstElementChild);
				loadPrevAndNextImages(newIdx - 1, newIdx + 1);
			}
		}
	}



	function createImagesList(length, width, height) {
		return Array.from(Array(length)).map((elem, idx) => ({
			id: idx,
			url: `https://picsum.photos/id/${idx}/${width}/${height}`,
			alt: "Alt text",
			width,
			height
		}));
	}

	function createCarouselContent(slides, thumbnails) {
		const slidesUl = document.querySelector(".carousel__slides");
		const thumbnailsUl = document.querySelector(".carousel__slides--thumbnails");
		const slidesFragment = document.createDocumentFragment();
		const thumbnailsFragment = document.createDocumentFragment();

		for (let i = 0; i < slides.list.length; i++) {
			slidesFragment.appendChild(createSlideLiElem(slides.list[i], "main"));
			thumbnailsFragment.appendChild(
				createSlideLiElem(thumbnails.list[i], "thumbnail")
			);
		}
		slidesUl.appendChild(slidesFragment);
		thumbnailsUl.appendChild(thumbnailsFragment);

		return [slidesUl, thumbnailsUl];

		function createSlideLiElem(imgObj, type) {
			const li = document.createElement("li");
			const img = document.createElement("img");
			const classesLi = `carousel__slide carousel__slide--${type}`;
			const classesImg = "carousel__img";
			const shouldLoadFirst =
				type == "thumbnail" ||
				(type == "main" && (imgObj.id < 2 || imgObj.id > slides.list.length - 2));
			li.className = classesLi;
			img.className = classesImg;

			if (imgObj.id === 0) {
				li.classList.add("carousel__slide--visible");
			}
			img.dataset.imgid = imgObj.id;
			img.dataset.src = !shouldLoadFirst ? imgObj.url : "";
			img.alt = imgObj.alt;
			img.src = shouldLoadFirst
				? imgObj.url
				: `https://via.placeholder.com/${imgObj.width}x${imgObj.height}/FFFFFF/FFFFFF`;
			img.width = imgObj.width;
			img.height = imgObj.height;
			li.appendChild(img);
			return li;
		}
	}

	function changeCurrentSlide(oldIdx, newIdx) {
		loadImage(carouselSlides[newIdx]?.firstElementChild);

		if (newIdx < carouselSlides.length - 1 && oldIdx < newIdx) {
			loadImage(carouselSlides[newIdx + 1]?.firstElementChild);
		} else {
			loadImage(carouselSlides[newIdx - 1]?.firstElementChild);
		}

		carouselSlides[newIdx].classList.add("carousel__slide--visible");
		carouselThumbnails[newIdx].classList.add("carousel__slide--visible");

		carouselSlides[oldIdx].classList.remove("carousel__slide--visible");
		carouselThumbnails[oldIdx].classList.remove("carousel__slide--visible");
	}

	function loadPrevAndNextImages(prevIdx, nextIdx) {
		loadImage(carouselSlides[prevIdx]?.firstElementChild);
		loadImage(carouselSlides[nextIdx]?.firstElementChild);
	}

	function loadImage(img) {
		if (img && (!img.src || img.src.includes("placeholder"))) {
			img.src = img.dataset.src;
		}
	}
}

if (document.querySelector('.office-page__gallery-button')) {
	document.querySelector('.office-page__gallery-button').addEventListener('click', function(){
		document.querySelector('.gallery-modal').classList.add('gallery-modal--active');
	});
	var glrImg = document.querySelectorAll('.office-page__gallery img');
	for (var i = 0; i < glrImg.length; i++) {
		glrImg[i].addEventListener('click', function(){
			document.querySelector('.gallery-modal').classList.add('gallery-modal--active');
		});
	}
}

if (document.querySelector('.gallery-modal__close')) {
	document.querySelector('.gallery-modal__close').addEventListener('click', function(){
		document.querySelector('.gallery-modal').classList.remove('gallery-modal--active');
	});
}
if (document.querySelector('.calendar-input')) {
	flatpickr(".calendar-input", {
		mode: "range",
		inline: true,
		dateFormat: "Y/m/d",
		onChange: function(){
	    let tables = document.querySelectorAll('.inRange'),
		    length = tables.length,
		    i, wrapper;

				for (i = 0; i < length; i++) {
				    wrapper = document.createElement('div');
				    wrapper.setAttribute('class', 'flatpickr-day');
				    tables[i].parentNode.insertBefore(wrapper, tables[i]);
				    wrapper.appendChild(tables[i]);
				}
		  },
		onClose: function(){
			
			if (document.querySelector('.calendar-form__input input')) {document.querySelector('.calendar-form__input input').parentElement.classList.remove('calendar-form__input--focused');}
			if (document.querySelector('.calendar-form__inner')) {document.querySelector('.calendar-form__inner').classList.remove('calendar-form__inner--active');}
			if (document.querySelector('.selection__city')) {document.querySelector('.selection__city').parentElement.classList.remove('selection__city--focused');}
			if (document.querySelector('.selection__city-result')) {document.querySelector('.selection__city-result').classList.remove('selection__city-result--active');}
			
		if (document.querySelector('.selection__calendar-wrap')) {document.querySelector('.selection__calendar-wrap').classList.remove('selection__calendar-wrap--active');}
			
		if (document.querySelector('.selection__block')) {document.querySelector('.selection__block').classList.remove('selection__block--active');}
			
		if (document.querySelector('.selection')) {document.querySelector('.selection').classList.remove('selection--active');}
		}
		    
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

document.querySelectorAll('.tabs').forEach(tab =>{
  const tabs = new Tabs(tab);
  tabs.init();
})

