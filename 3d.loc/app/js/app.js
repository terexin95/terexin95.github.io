// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('.site-mobile-menu__dropdown-open')) {
		for (var i = 0; i < document.querySelectorAll('.site-mobile-menu__dropdown-open').length; i++) {
			document.querySelectorAll('.site-mobile-menu__dropdown-open')[i].addEventListener('click', function(e) {
				e.preventDefault();
				this.parentElement.style.position = "absolute";
				this.parentElement.style.left = "-400px";
				this.closest('.site-mobile-menu__body').querySelector('.site-mobile-menu__dropdown').style.display = "block";
			})
		}
		for (var i = 0; i < document.querySelectorAll('.site-mobile-menu__dropdown-prev').length; i++) {
			document.querySelectorAll('.site-mobile-menu__dropdown-prev')[i].addEventListener('click', function(e){
				e.preventDefault();
				this.parentElement.previousElementSibling.style.position = "relative";
				this.parentElement.previousElementSibling.style.left = "0";
				this.parentElement.style.display = "none";
			})
		}
	}

	(function() {
  'use strict';

	  function trackScroll() {
	    var scrolled = window.pageYOffset;
	    var coords = document.documentElement.clientHeight;

	    if (scrolled > coords) {
	      goTopBtn.classList.add('back_to_top-show');
	    }
	    if (scrolled < coords) {
	      goTopBtn.classList.remove('back_to_top-show');
	    }
	  }

	  function backToTop() {
	    if (window.pageYOffset > 0) {
	      window.scrollBy(0, -80);
	      setTimeout(backToTop, 0);
	    }
	  }

	  var goTopBtn = document.querySelector('.back_to_top');

	  window.addEventListener('scroll', trackScroll);
	  goTopBtn.addEventListener('click', backToTop);
	})();

	if (document.querySelector('.breadcrumbs')) {
		for (var i = 0; i < document.querySelectorAll('.breadcrumbs').length; i++) {
			document.querySelectorAll('.breadcrumbs')[i].style.top = document.querySelectorAll('.breadcrumbs')[i].offsetWidth + 80 + "px";
		}
	}

	function breadTop() {
		if (document.querySelector('.breadcrumbs')) {
			for (var i = 0; i < document.querySelectorAll('.breadcrumbs').length; i++) {
				document.querySelectorAll('.breadcrumbs')[i].style.top = document.querySelectorAll('.breadcrumbs')[i].offsetWidth + 50 + "px";
			}
		}
	}

	window.addEventListener('resize', function(){
		breadTop();
	})

	if (document.querySelector('.dropdown__arrow')) {
		for (var i = 0; i < document.querySelectorAll('.dropdown__arrow').length; i++) {
			document.querySelectorAll('.dropdown__arrow')[i].addEventListener('click', function(){
				this.closest('.dropdown').classList.toggle('dropdown--active');
			})
		}
	}

	window.addEventListener('scroll', function(){
		breadTop();
		if (this.pageYOffset > 1) {
			if (document.querySelector('.site-header')) {
				document.querySelector('.site-header').classList.add('site-header--active')
				document.querySelector('.site-mobile-header').classList.add('site-mobile-header--active')
			}
		} else {
			if (document.querySelector('.site-header').classList.contains('site-header--active')) {
				document.querySelector('.site-header').classList.remove('site-header--active')
				document.querySelector('.site-mobile-header').classList.remove('site-mobile-header--active')
			}
		}
	})

	if (document.querySelector('.site-mobile-header__hum')) {
		for (var i = 0; i < document.querySelectorAll('.site-mobile-header__hum').length; i++) {
			document.querySelectorAll('.site-mobile-header__hum')[i].addEventListener('click', function(){
				document.querySelector('.site-mobile-menu__modal').style.display = "block";
				document.querySelector('.overlay').style.display = "block";
			})
		}
		for (var i = 0; i < document.querySelectorAll('.site-mobile-menu__close').length; i++) {
			document.querySelectorAll('.site-mobile-menu__close')[i].addEventListener('click', function(){
				this.closest('.site-mobile-menu').style.display = "none";
				document.querySelector('.overlay').style.display = "none";
			})
		}

		for (var i = 0; i < document.querySelectorAll('.site-mobile-header__button--open').length; i++) {
			document.querySelectorAll('.site-mobile-header__button--open')[i].addEventListener('click', function(){
				document.querySelector('.site-mobile-menu__mail').style.display = "block";
				document.querySelector('.overlay').style.display = "block";
			});
		}
		for (var i = 0; i < document.querySelectorAll('.overlay').length; i++) {
			document.querySelectorAll('.overlay')[i].addEventListener('click', function(){
				for (var i = 0; i < document.querySelectorAll('.site-mobile-menu').length; i++) {
					document.querySelectorAll('.site-mobile-menu')[i].style.display = "none";
					this.style.display = "none";
					document.querySelector('.modal-subscribe').style.display = "none";
					document.querySelector('.modal-bid').style.display = "none";
					document.querySelector('.modal-uslug').style.display = "none";
					document.querySelector('.modal-thankyou').style.display = "none";
					document.querySelector('body').style.overflow = "auto";
				}
			})
		}
	}

	if (document.querySelector('.single-slider__init')) {
		 var swiper = new Swiper(".single-slider__init", {
		 		slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".single-slider__pagination",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
	        },
	        formatFractionTotal: function (number) {
	            return ('0' + number).slice(-2);
	        },
	        renderFraction: function (currentClass, totalClass) {
	            return '<span class="' + currentClass + '"></span>' +
	                   ' / ' +
	                   '<span class="' + totalClass + '"></span>';
	        }        
	      },
        navigation: {
          nextEl: ".single-slider__button-next",
          prevEl: ".single-slider__button-prev",
        },
        breakpoints: {
			    // when window width is >= 320px
			    320: {
			      slidesPerView: 1.2,
			      spaceBetween: 20,
			      centeredSlides: false,
			      loop: true
			    },
			    // when window width is >= 480px
			    586: {
			      slidesPerView: 2,
			      spaceBetween: 30,
			    },
			    // when window width is >= 640px
			    768: {
			      slidesPerView: 1,
			      spaceBetween: 30
			    },
			    993: {
			    	slidesPerView: 3,
			    }
			  }
      });
	}
	if (document.querySelector('.modal-gallery__init')) {
		let modalGalleryInit = new Swiper(".modal-gallery__init", {
			slidesPerView: 1,
		   spaceBetween: 25,
		   centeredSlides: true,
		   loop: true,
			simulateTouch: false
		 });
		let childSwiper = document.querySelectorAll('.swiper-v');
		childSwiper.forEach(function(index, value){
			let swyper = new Swiper(index, {
				slidesPerView: 1,
				navigation: {
					nextEl: index.parentElement.querySelector(".single-slider__button-next"),
					prevEl: index.parentElement.querySelector(".single-slider__button-prev"),
			  },
			  pagination: {
				 el: index.parentElement.querySelector(".single-slider__pagination"),
				 type: "fraction",
				 formatFractionCurrent: function (number) {
				   return ('0' + number).slice(-2);
				   },
				   formatFractionTotal: function (number) {
					   return ('0' + number).slice(-2);
				   },
				   renderFraction: function (currentClass, totalClass) {
					   return '<span class="' + currentClass + '"></span>' +
							  ' / ' +
							  '<span class="' + totalClass + '"></span>';
				   }        
				 },
			});
		})
		
			for (let i = 0; i < document.querySelectorAll('.gallery__item').length; i++) {
				document.querySelectorAll('.gallery__item')[i].addEventListener('click', function(e){
					e.preventDefault();
					document.querySelector('.modal-gallery').style.display = "block"
					modalGalleryInit.slideTo(this.getAttribute('data-gallery'), 0);
				});
			}
			for (let i = 0; i < document.querySelectorAll('.modal-gallery__item-footer-close').length; i++) {
				document.querySelectorAll('.modal-gallery__item-footer-close')[i].addEventListener('click', function(e){
					document.querySelector('.modal__close').click();
				});
			}
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
						selectActive.textContent = "Выберите услугу";
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

	if (document.querySelector('.sidebar-subscribe')) {
		for (var i = 0; i < document.querySelectorAll('.sidebar-subscribe').length; i++) {
			document.querySelectorAll('.sidebar-subscribe')[i].addEventListener('click', function(){
				document.querySelector('.modal-subscribe').style.display = "block";
				document.querySelector('.overlay').style.display = "block";
				document.querySelector('body').style.overflow = "hidden";
			});
		}
	}

	if (document.querySelector('.open__modal__callback')) {
		for (var i = 0; i < document.querySelectorAll('.open__modal__callback').length; i++) {
			document.querySelectorAll('.open__modal__callback')[i].addEventListener('click', function(){
				document.querySelector('.modal-bid').style.display = "block";
				document.querySelector('.overlay').style.display = "block";
				document.querySelector('body').style.overflow = "hidden";
			})
		}
	}

	if (document.querySelector('.open__modal__uslug')) {
		for (var i = 0; i < document.querySelectorAll('.open__modal__uslug').length; i++) {
			document.querySelectorAll('.open__modal__uslug')[i].addEventListener('click', function(){
				document.querySelector('.modal-uslug').style.display = "block";
				document.querySelector('.overlay').style.display = "block";
				document.querySelector('body').style.overflow = "hidden";
			})
		}
	}

	if (document.querySelector('.modal__close')) {
		for (var i = 0; i < document.querySelectorAll('.modal__close').length; i++) {
			document.querySelectorAll('.modal__close')[i].addEventListener('click', function(){
				this.parentElement.style.display = "none";
				document.querySelector('.overlay').style.display = "none";
				if (document.querySelectorAll('.overlay')[1]) {
					document.querySelectorAll('.overlay')[1].style.display = "none";
				}
				document.querySelector('body').style.overflow = "auto";
			});
		}
	}

	var landingSlider__init = new Swiper(".landing-slider__init", {
		loop: true,
		direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".landing-slider__next",
    },
    breakpoints: {
	    0: {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      direction: "horizontal",
	    },
	    1300: {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      direction: "vertical",
	    }
	  }
  });

  		
  var landingReview__initMobile = new Swiper(".landing-review__init-mobile", {
 		slidesPerView: 1.7,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".landing-review__mobile-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                 ' / ' +
                 '<span class="' + totalClass + '"></span>';
      }        
    },
    navigation: {
      nextEl: ".landing-review__mobile-next",
      prevEl: ".landing-review__mobile-prev",
    },
  });

  var landingPortfolio__init = new Swiper(".landing-portfolio__init", {
 		slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".landing-portfolio__init-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                 ' / ' +
                 '<span class="' + totalClass + '"></span>';
      }        
    },
    navigation: {
      nextEl: ".landing-portfolio__init-next",
      prevEl: ".landing-portfolio__init-prev",
    },
  });

  var landingPortfolio__init = new Swiper(".landing-review__init", {
 		slidesPerView: 3,
    spaceBetween: 180,
    loop: true,
    navigation: {
      nextEl: ".landing-review__right",
      prevEl: ".landing-review__left",
    },
    breakpoints: {
    	0: {
	      slidesPerView: 1.6,
	      spaceBetween: 20,
	    },
	    768: {
	      slidesPerView: 3,
	      spaceBetween: 30,
	    },
	    1050: {
	      slidesPerView: 3,
    		spaceBetween: 180,
	    }
	  }
  });
})

if (document.querySelector(".accordion button")) {
	const items = document.querySelectorAll(".accordion button");

	function toggleAccordion() {
	  const itemToggle = this.getAttribute('aria-expanded');
	  
	  for (let i = 0; i < items.length; i++) {
	    items[i].setAttribute('aria-expanded', 'false');
	  }
	  
	  if (itemToggle == 'false') {
	    this.setAttribute('aria-expanded', 'true');
	  }
	}

	items.forEach(item => item.addEventListener('click', toggleAccordion));
}


