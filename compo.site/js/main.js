document.addEventListener("DOMContentLoaded", function(event) {
    var selector = document.getElementById("phone-mask");

	var im = new Inputmask("9 (999)-999-99-99");
	im.mask(selector);

	var open__modal__js = document.querySelectorAll('.open__modal__js');
	open__modal__js.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('.modal-callback').style.display = "block";
		}
	});
	var overlay = document.querySelectorAll('.overlay');
	overlay.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.overlay').style.display = "none";
			document.querySelector('.modal-callback').style.display = "none";
		}
	});
	var close = document.querySelectorAll('.modal-callback__close');
	close.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.overlay').style.display = "none";
			document.querySelector('.modal-callback').style.display = "none";
		}
	});

	var fadeInAnimation = document.querySelectorAll('.animation-fade')
	if (fadeInAnimation.length > 0) {
		window.addEventListener('scroll', aOnScroll)
		function aOnScroll() {
			for (var i = 0; i < fadeInAnimation.length; i++) {
				var fadeInAnimationItem = fadeInAnimation[i];
				var fadeInAnimationItemHeight = fadeInAnimationItem.offsetHeight;
				var fadeInAnimationItemOffset = offset(fadeInAnimationItem).top;
				var animStart = 10;

				var animItemPoint = window.innerHeight - fadeInAnimationItemHeight / animStart;
				if(fadeInAnimationItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if((pageYOffset > fadeInAnimationItemOffset - animItemPoint*1.2) && pageYOffset < (fadeInAnimationItemOffset + fadeInAnimationItemHeight)) {
					fadeInAnimationItem.classList.add("_active");
				}
			}
		}
		function offset(el) {
			var rect = el.getBoundingClientRect();
			var scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
		aOnScroll()
	}

	var blockTeamInit = new Swiper('.block-team__init', {
	  loop: true,
	  slidesPerView: 2,
	  spaceBetween: 35,
	  navigation: {
	    nextEl: '.block-team__header-next',
	    prevEl: '.block-team__header-prev',
	  },
	  breakpoints: {
		    // when window width is >= 320px
		    0: {
		      slidesPerView: 1.5,
		      spaceBetween: 15
		    },
		    // when window width is >= 480px
		    768: {
		      slidesPerView: 2,
	  			spaceBetween: 35,
		    },
		}
	});

	var currentSrc;

	var blockProductsInit = new Swiper('.block-products__init', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 25,
		navigation: {
			nextEl: '.block-products__next',
			prevEl: '.block-products__prev',
		},
		breakpoints: {
		    0: {
		      slidesPerView: 2.2,
		      spaceBetween: 15
		    },
		    768: {
		    	slidesPerView: 3,
				spaceBetween: 25,
		    },
		}
	});


	blockProductsInit.on('slideChange', function() {
		document.querySelector('.block-products__phone-img img').src = document.querySelector('.block-products .swiper-slide[data-swiper-slide-index="'+ blockProductsInit.realIndex +'"] img').src;
		console.log(blockProductsInit.previousIndex)
	})

	var blockProductsItem = document.querySelectorAll('.block-products__item');
	for (var i = 0; i < blockProductsItem.length; i++) {
		blockProductsItem[i].addEventListener('click', function(){
			var imgSrc = this.querySelector('img').getAttribute('src');
			document.querySelector('.block-products__phone-img img').src = imgSrc;
		});
	}

	document.querySelector('.mobile-humburger').addEventListener('click', function(){
		this.style.display = "none";
		document.querySelector('.mobile-close').style.display = "block";
		document.querySelector('.site-header').style.backgroundColor = "#191C26";
		document.querySelector('.site-header').style.boxShadow = "0 0 0 0 transparent";
		document.querySelector('.site-header__phone').style.opacity = "0";
		document.querySelector('.mobile-menu').style.height = "236px";
	});

	document.querySelector('.mobile-close').addEventListener('click', function(){
		this.style.display = "none";
		document.querySelector('.mobile-humburger').style.display = "block";
		document.querySelector('.site-header').style.backgroundColor = "#111319";
		document.querySelector('.site-header').style.boxShadow = "0px 4px 20px rgb(74 75 78 / 18%)";
		document.querySelector('.site-header__phone').style.opacity = "1";
		document.querySelector('.mobile-menu').style.height = "0";
	})
	
});