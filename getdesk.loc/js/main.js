document.querySelector('.search-page__block-button').addEventListener('touchstart', btnTouchStart, false);
document.querySelector('.search-page__block-button').addEventListener('touchmove', btnTouchMove, false);

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
			document.querySelector('.search-page__block').classList.add('search-page__block-bottom');
			document.querySelector('.search-page__block').classList.remove('search-page__block-top');
		} else {
			document.querySelector('.search-page__block').classList.add('search-page__block-top');
			document.querySelector('.search-page__block').classList.remove('search-page__block-bottom');
		}
	}
}

window.onscroll = function() {
	if (document.getElementById("header-sticky")) {
		var header = document.getElementById("header-sticky");
		var sticky = header.offsetTop;

		function myFunction() {
		  if (window.pageYOffset > 215) {
		    header.classList.add("sticky");
		  } else {
		    header.classList.remove("sticky");
		  }
		}
	}
};
var inputHeaderCity = document.querySelector('.search-city__input input');

inputHeaderCity.addEventListener("focusin", function(){
	inputHeaderCity.parentElement.classList.add('search-city__input--focused');
	document.querySelector('.search-city__result').classList.add('search-city__result--active');
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
inputHeaderCalendar.addEventListener("focusout", function(){
	inputHeaderCalendar.parentElement.classList.remove('calendar-form__input--focused');
	document.querySelector('.calendar-form__inner').classList.remove('calendar-form__inner--active');
});


if (document.querySelector('.selection__city-input')) {
	var inputSelectionCity = document.querySelector('.selection__city-input');

	inputSelectionCity.addEventListener("focusin", function(){
		inputSelectionCity.parentElement.classList.add('selection__city--focused');
		document.querySelector('.selection__city-result').classList.add('selection__city-result--active');
		document.querySelector('.selection__block').classList.add('selection__block--active');
	});
	inputSelectionCity.addEventListener("focusout", function(){
		inputSelectionCity.parentElement.classList.remove('selection__city--focused');
		document.querySelector('.selection__city-result').classList.remove('selection__city-result--active');
		document.querySelector('.selection__block').classList.remove('selection__block--active');
	});

}

if (document.querySelector('.selection__calendar-input')) {
	var inputSelectionCalendar = document.querySelector('.selection__calendar-input');

	inputSelectionCalendar.addEventListener("focusin", function(){
		inputSelectionCalendar.parentElement.classList.add('selection__calendar--focused');
		document.querySelector('.selection__calendar-wrap').classList.add('selection__calendar-wrap--active');
		document.querySelector('.selection__block').classList.add('selection__block--active');
	});
	inputSelectionCalendar.addEventListener("focusout", function(){
		inputSelectionCalendar.parentElement.classList.remove('selection__city--focused');
		document.querySelector('.selection__calendar-wrap').classList.remove('selection__calendar-wrap--active');
		document.querySelector('.selection__block').classList.remove('selection__block--active');
	});
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

document.querySelector('.range-slider__btn-remove').addEventListener('click', function(){
	document.querySelector('.range-slider').reset();
	//document.querySelector('.range-slider-input-3').value = "0";
	//document.querySelector('.class="range-slider-input-1"').value = "0";
});

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
		document.querySelector('.search-page').classList.remove('search-page--active');
	});
}



var btnComfortShow = document.querySelectorAll('.search-page__filter-comfort-item-button');

if (btnComfortShow) {
	for(var i = 0; i < btnComfortShow.length; i++){
		btnComfortShow[i].addEventListener('click', function(){
			this.parentElement.classList.add('search-page__filter-comfort-item--active')
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
