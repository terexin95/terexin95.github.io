// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	class Tabs {
	  constructor(element) {
	    this.tabs = element;
	    this.toggles = this.tabs.querySelectorAll('.tabs__toggle');
	    this.panels = this.tabs.querySelectorAll('.tabs__tab-panel')
	  }
	  init() {
	    this.toggles.forEach(toggle => {
	      toggle.addEventListener('click', (e) => {
	      	if (!e.target.classList.contains('tabs__toggle--disabled')) {
		        this.toggles.forEach(toggle => {
		          toggle.classList.remove('active');
		        })
		        this.panels.forEach(panel => {
		          panel.classList.remove('active');
		        })
	        
		        if (!e.target.classList.contains('tabs__toggle')) {
		        	e.target.closest('.tabs__toggle').classList.add('active');
		        } else {
		        	e.target.classList.add('active');
		        }
		        this.tabs.querySelector(`.tabs__tab-panel[data-tab='${e.target.dataset.tab}']`).classList.add('active')
	        }
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

	if (document.querySelector('.fensys__mobile-option')) {
		document.querySelector('.fensys__mobile-option').addEventListener('click', function(){
			document.querySelector('.fensys__header .tabs__button-group').classList.toggle('tabs__button-group--block')
		});
		let button = document.querySelectorAll('.fensys__header .tabs__button-group .tabs__toggle');
		for (var i = 0; i < button.length; i++) {
			button[i].addEventListener('click', function(){
			  let text = this.getAttribute('data-text');
			  document.querySelector('.fensys__mobile-option span').textContent = text;
			  document.querySelector('.fensys__header .tabs__button-group').classList.toggle('tabs__button-group--block');
			});
		}
	}
	if (document.querySelector('.fensys__humburger')) {
		document.querySelector('.fensys__humburger').addEventListener('click', function(){
			document.querySelector('.fensys__sidebar').classList.toggle('fensys__sidebar--block');
		});
		document.querySelector('.fensys__sidebar-close').addEventListener('click', function(){
			document.querySelector('.fensys__sidebar').classList.remove('fensys__sidebar--block');
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

	if (document.querySelector('.modal-user__form-saved')) {
		for (var i = 0; i < document.querySelectorAll('.modal-user__form-saved input').length; i++) {
			document.querySelectorAll('.modal-user__form-saved input')[i].setAttribute('readonly', '')
		}
	}

	if (document.querySelector('.slider-one')) {
	  var swiper1 = new Swiper(".slider-one", {
	    navigation: {
	      nextEl: ".slider-one-button-next",
	      prevEl: ".slider-one-button-prev",
	    },
	    paginationClickable: true,
	    spaceBetween: 5,
	    slidesPerView: 3,
	    breakpoints: {
		    0: {
		      slidesPerView: 1,
		      spaceBetween: 5
		    },
		    768: {
		      slidesPerView: 3,
		      spaceBetween: 5
		    }
		  }
	  });
  }

  if (window.innerWidth < 768 ) {
  	if (swiper1) {
  		swiper1.destroy();
  	}
  }

  document.addEventListener('resize', function(){
  	if (window.innerWidth < 768 ) {
  		if (swiper1) {swiper1.destroy();}
	  	
	  }
  });
  if (document.querySelector('.slider-two')) {
  	var swiper2 = new Swiper(".slider-two", {
	    navigation: {
	      nextEl: ".slider-one-button-next",
	      prevEl: ".slider-one-button-prev",
	    },
	    paginationClickable: true,
	    spaceBetween: 5,
	    slidesPerView: 3,
	    breakpoints: {
		    0: {
		      slidesPerView: 1,
		      spaceBetween: 5
		    },
		    768: {
		      slidesPerView: 3,
		      spaceBetween: 5
		    }
		  }
	  });
  }
  

  var inpt = document.querySelectorAll('.loudness input');
  for (var i = inpt.length - 1; i >= 0; i--) {
  	var inptt = inpt[i]
  	inptt.oninput = function() {
	  var ttvalue = (this.value-this.min)/(this.max-this.min)*100
	  this.style.background = 'linear-gradient(to right, #007344 0%, #007344 ' + ttvalue + '%, #fff ' + ttvalue + '%, #D7DDE6 100%)'
	};
	
	var tttvalue = (inptt.value-inptt.min)/(inptt.max-inptt.min)*100;
		inptt.style.background = 'linear-gradient(to right, #007344 0%, #007344 ' + tttvalue + '%, #fff ' + tttvalue + '%, #D7DDE6 100%)';
  }

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
  

  flatpickr('.calendar-input', {
  	locale: "ru",
    mode: "range",
    inline: true,
		dateFormat: "d.m.Y",
		onOpen: function() {
			if (!this.calendarContainer.querySelector('.calendar-custom__buttons')) {
				let wrpBtns = document.createElement('div');
				wrpBtns.classList.add('calendar-custom__buttons');
				let buttonCl = document.createElement('div');
				buttonCl.classList.add('calendar-custom__buttons-item');
				let buttonC2 = document.createElement('div');
				buttonC2.classList.add('calendar-custom__buttons-item');
				buttonCl.textContent = "Закрыть";
				buttonC2.textContent = "Выбрать";
				wrpBtns.append(buttonCl, buttonC2);
				this.calendarContainer.append(wrpBtns);
			}
		}
	});

	for (var i = 0; i < document.querySelectorAll('.flatpickr-calendar').length; i++) {
		
				let wrpBtns = document.createElement('div');
				wrpBtns.classList.add('calendar-custom__buttons');
				let buttonCl = document.createElement('div');
				buttonCl.classList.add('calendar-custom__buttons-item');
				let buttonC2 = document.createElement('div');
				buttonC2.classList.add('calendar-custom__buttons-item');
				buttonCl.textContent = "Закрыть";
				buttonC2.textContent = "Выбрать";
				wrpBtns.append(buttonCl, buttonC2);
				document.querySelectorAll('.flatpickr-calendar')[i].append(wrpBtns);
	}
	for (var i = 0; i < document.querySelectorAll('.calendar-custom__buttons-item').length; i++) {
		document.querySelectorAll('.calendar-custom__buttons-item')[i].addEventListener('click', function(){
			this.parentElement.parentElement.parentElement.classList.remove('calendar-custom__input--active');
			console.log(this.parentElement.parentElement.parentElement)
		});
	}
	for (var i = 0; i < document.querySelectorAll('.calendar-custom__input input').length; i++) {
		document.querySelectorAll('.calendar-custom__input input')[i].addEventListener('click', function(){
			this.parentElement.classList.add('calendar-custom__input--active');
		})
	}
	if (document.querySelector('.time-custom')) {
		var element = document.querySelectorAll('.time-custom__input');
		for (var i = element.length - 1; i >= 0; i--) {
			if (!element[i].parentElement.classList.contains('time-custom-hours')) {
				var maskOptions = {
				  mask: '00:00'
				};
				var mask = IMask(element[i], maskOptions);
			}
		}
		for (var i = 0; i < document.querySelectorAll('.time-custom__button-plus').length; i++) {
			document.querySelectorAll('.time-custom__button-plus')[i].addEventListener('click', function(){
				let p = this.parentElement.parentElement;
				if (!p.classList.contains('time-custom-hours')) {
					let inp = p.querySelector('input')
					let text = inp.value;
					let h = text.split(':')[0];
					let m = text.split(':')[1];
					m = +m + 15;
					if (+m + 15 >= 60) {
						m = "00";
						if (+h + 1 >= 24) {
							h = "00"
						} else {
							h = +h +1;
						}
					}
					inp.value = h + ":" + m;
				}
			});
		}
		for (var i = document.querySelectorAll('.time-custom__button-minus').length - 1; i >= 0; i--) {
			document.querySelectorAll('.time-custom__button-minus')[i].addEventListener('click', function(){
				let p = this.parentElement.parentElement;
				if (!p.classList.contains('time-custom-hours')) {
					let inp = p.querySelector('input')
					let text = inp.value;
					let h = text.split(':')[0];
					let m = text.split(':')[1];
					console.log(h)
					m = +m - 15;
					if (m == 0) {
						m = "00";
					} else if (m < 0) {
						m = 45;
						h = +h - 1;
						if (h < 0) {
							h = 23;
						}
					}
					inp.value = h + ":" + m;
				}
			});
		}
	}

	if (document.querySelector('.statistics-page__calendar')) {
		document.querySelector('.statistics-page__calendar .calendar-custom__input input').addEventListener('input', function(){
			console.log(this.value);
			
			if (this.value.split('—')[1]) {
				document.querySelector('.statistics-page__calendar-input-1').value = this.value.split('—')[0];
				document.querySelector('.statistics-page__calendar-input-2').value = this.value.split('—')[1];
			} else {
				document.querySelector('.statistics-page__calendar-input-1').value = this.value;
			}
		})
	}
})
