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
			console.log(document.querySelectorAll('.breadcrumbs')[i].offsetWidth)
			console.log(document.querySelectorAll('.breadcrumbs')[i].clientWidth)
			console.log(getComputedStyle(document.querySelectorAll('.breadcrumbs')[i]).width)
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
					this.style.display = "none"
				}
			})
		}
	}



})
