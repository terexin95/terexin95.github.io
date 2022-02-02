document.addEventListener("DOMContentLoaded", function(event) {
	if (document.querySelector('.input-block')) {
		for (var i = 0; i < document.querySelectorAll('.input-block').length; i++) {
			document.querySelectorAll('.input-block')[i].addEventListener('click', function(e){
				if (e.target.tagName == "LABEL") {
					if (this.querySelector('input')) {
						this.querySelector('input').focus();
					}
				}
			});
		}
	}

	if (document.querySelector('.block-products__phone')) {
		document.querySelector('.block-products__phone').addEventListener('click', function(){
			this.querySelector('a').click();
		})
	}

	if (document.querySelector('body.page-404')) {
		if (window.innerWidth < 500) {
			if (document.querySelector('body').classList.contains('white-theme-site')) {
				document.querySelector('body').classList.remove('white-theme-site');
			}
		}
		window.addEventListener('resize', function(){
			if (window.innerWidth < 500) {
				if (document.querySelector('body').classList.contains('white-theme-site')) {
					document.querySelector('body').classList.remove('white-theme-site');
				}
			} else {
				if (!document.querySelector('body').classList.contains('white-theme-site')) {
					document.querySelector('body').classList.add('white-theme-site');
				}
			}
		});
	}

	if (document.querySelector('.site-nav-cat')) {
		var arrF = [];
		for (var i = 0; i < document.querySelectorAll('.site-nav-cat ul li span').length; i++) {
			document.querySelectorAll('.site-nav-cat ul li span')[i].setAttribute('data-click', '2');
			document.querySelectorAll('.site-nav-cat ul li span')[i].addEventListener('click', function(){
				var thx = this;
				if (arrF.length > 0 && thx.getAttribute('data-filter') != arrF[arrF.length-1]) {
					document.querySelector('span[data-filter="'+arrF[arrF.length-1]+'"]').setAttribute('data-click', '2');
				}
				if (thx.getAttribute('data-filter') != 'all') {
					arrF.push(thx.getAttribute('data-filter'));
				}
				
				if (this.getAttribute('data-click') == 1 && this.classList.contains('mixitup-control-active')){
					thx.setAttribute('data-click', '2');
					document.querySelector('.reset-mixtup').click();
					
				} else {
					thx.setAttribute('data-click', '1');
				}
			})
		}
	}

	if (document.querySelector('body.post') || document.querySelector('body.archive')) {
		window.addEventListener('scroll', function() {
			function getOffset( el ) {
			    var _x = 0;
			    var _y = 0;
			    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
			        _x += el.offsetLeft - el.scrollLeft;
			        _y += el.offsetTop - el.scrollTop;
			        el = el.offsetParent;
			    }
			    return { top: _y, left: _x };
			}
			var topFooter = getOffset( document.querySelector('.site-footer') ).top;
			if (pageYOffset > 1000 && pageYOffset < topFooter-500) {
				document.querySelector('.button-top').style.opacity = "1";
			} else {
				document.querySelector('.button-top').style.opacity = "0";
			}

			
		})
	}

	if (document.querySelector('#progressBar')) {
		function progressBar() {
		    // Узнаем на сколько страница прокручена
		    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
		    // Узнаем высоту всей страницы
		    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		    // Получаем в % на сколько прокручена страница
		    let scrolled = scroll / height * 100;

		    // Подставляем % прокрутки в ширину нашей линии
		    document.getElementById('progressBar').style.width = scrolled + '%';
		}

		// Запускаем функцию, когда пользователя скролит
		window.addEventListener('scroll', progressBar);
	}
	if (document.querySelector('.site-single-slider__init')) {
		
		var siteSingleSliderInit = new Swiper('.site-single-slider__init', {
			loop: true,
			slidesPerView: 2,
			spaceBetween: 35,
			navigation: {
				nextEl: '.site-single-slider__next',
				prevEl: '.site-single-slider__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1.3,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				993: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}
		});

		document.querySelector('.site-single-slider__next-button').addEventListener('click', function(){
			siteSingleSliderInit.slideNext();
		})
	}
	if (document.querySelector('.site-posts__item-more-copy')) {
		for (var i = 0; i < document.querySelectorAll('.site-posts__item-more-copy').length; i++) {
			document.querySelectorAll('.site-posts__item-more-copy')[i].addEventListener('click', function(){
				var copyText = this.querySelector(".site-posts__item-more-copy-input");
				copyText.select();
				document.execCommand("copy");
			})
		}
	}
    
	if (document.querySelector('.site-posts__item-repost')) {
	    for (var i = 0; i < document.querySelectorAll('.site-posts__item-repost').length; i++) {
	    	document.querySelectorAll('.site-posts__item-repost')[i].addEventListener('click', function(){
	    		this.closest('.site-posts__item').querySelector('.site-posts__item-more').classList.add('site-posts__item-more--active')
	    	})
	    }
    }

    if ( document.querySelector('.site-posts__item-more-close')) {
	    for (var i = 0; i < document.querySelectorAll('.site-posts__item-more-close').length; i++) {
	    	document.querySelectorAll('.site-posts__item-more-close')[i].addEventListener('click', function(){
	    		this.closest('.site-posts__item').querySelector('.site-posts__item-more').classList.remove('site-posts__item-more--active')
	    	})
	    }
    }

    if (document.querySelector('.open__cat')) {
	    for (var i = 0; i < document.querySelectorAll('.open__cat').length; i++) {
	    	document.querySelectorAll('.open__cat')[i].addEventListener('click', function(){
	    		document.querySelector('.site-nav-cat').classList.toggle('site-nav-cat--active')
	    		this.classList.toggle('open__cat--active')
	    	})
	    }
    }

    if (document.querySelector(".phone-mask")) {
		var selector = document.getElementsByClassName("phone-mask");
		var im = new Inputmask("9 (999)-999-99-99");
		im.mask(selector);
	}

	var open__modal__js = document.querySelectorAll('.open__modal__js');
	open__modal__js.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.overlay').style.display = "block";
			document.querySelector('.modal-callback').style.display = "block";
			document.querySelector('body').style.overflow = "hidden";
			if (document.querySelector('.modal-callback').classList.contains('fadeOutModal')) {
				document.querySelector('.modal-callback').classList.remove('fadeOutModal')
			}
		}
	});
	var overlay = document.querySelectorAll('.overlay');
	overlay.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.modal-callback').classList.add('fadeOutModal');
			setTimeout(function(){
				document.querySelector('.overlay').style.display = "none";
				document.querySelector('body').style.overflow = "initial";
				document.querySelector('.modal-callback').style.display = "none";
				document.querySelector('.modal-callback form').reset();
				for (var i = document.querySelectorAll('.input-block__error').length - 1; i >= 0; i--) {
					document.querySelectorAll('.input-block__error')[i].style.opacity = 0;
				}
			}, 300)
		}
	});
	var close = document.querySelectorAll('.modal-callback__close');
	close.forEach(function(el){
		el.onclick = function(){
			document.querySelector('.modal-callback').classList.add('fadeOutModal');
			setTimeout(function(){
				document.querySelector('.overlay').style.display = "none";
				document.querySelector('body').style.overflow = "initial";
				document.querySelector('.modal-callback').style.display = "none";
				document.querySelector('.modal-callback form').reset();
				for (var i = document.querySelectorAll('.input-block__error').length - 1; i >= 0; i--) {
					document.querySelectorAll('.input-block__error')[i].style.opacity = 0;
				}
			}, 300)
			
		}
	});

	if (document.querySelector('.animation-fade')) {
		var fadeInAnimation = document.querySelectorAll('.animation-fade')
		if (fadeInAnimation.length > 0) {
			window.addEventListener('scroll', aOnScroll)
			function aOnScroll() {
				for (var i = 0; i < fadeInAnimation.length; i++) {
					var fadeInAnimationItem = fadeInAnimation[i];
					var fadeInAnimationItemHeight = fadeInAnimationItem.offsetHeight;
					var fadeInAnimationItemOffset = offset(fadeInAnimationItem).top;
					var animStart = 4;

					var animItemPoint = window.innerHeight - fadeInAnimationItemHeight / animStart;
					if(fadeInAnimationItemHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animStart;
					}
					if (fadeInAnimationItem.classList.contains('block-create__item')) {
						if((pageYOffset+450 > fadeInAnimationItemOffset - animItemPoint) && pageYOffset < (fadeInAnimationItemOffset + fadeInAnimationItemHeight)) {
							fadeInAnimationItem.classList.add("_active");
						}
					} else {
						if((pageYOffset > fadeInAnimationItemOffset - animItemPoint) && pageYOffset < (fadeInAnimationItemOffset + fadeInAnimationItemHeight)) {
							fadeInAnimationItem.classList.add("_active");
						}
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
	}

	if (document.querySelector('.block-team__init')) {
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
	}

	
	if (document.querySelector('.block-products__init')) {
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
			document.querySelector('.block-products__phone-img a').href = document.querySelector('.block-products .swiper-slide[data-swiper-slide-index="'+ blockProductsInit.realIndex +'"] img').src;
		});

		var blockProductsItem = document.querySelectorAll('.block-products__item');
		for (var i = 0; i < blockProductsItem.length; i++) {
			blockProductsItem[i].addEventListener('click', function(){
				var imgSrc = this.querySelector('img').getAttribute('src');
				document.querySelector('.block-products__phone-img img').src = imgSrc;
				document.querySelector('.block-products__phone-img a').href = imgSrc;
			});
		}
	}

	document.querySelector('.mobile-humburger').addEventListener('click', function(){
		document.querySelector('body').classList.add('site-header--active');
		document.querySelector('.overlay').style.display = "block";
		document.querySelector('.overlay').style.zIndex = "7";
		document.querySelector('.overlay').addEventListener('click', function(){
			document.querySelector('.mobile-close').click();
		})

	});

	document.querySelector('.mobile-close').addEventListener('click', function(){
		document.querySelector('body').classList.remove('site-header--active');
		document.querySelector('.overlay').style.display = "none";
		document.querySelector('.overlay').style.zIndex = "9";

	})

	window.addEventListener('resize', function(){
		if (window.innerWidth > 769) {
			document.querySelector('.mobile-close').click();
		}
	})

	var anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	  anchor.addEventListener('click', function (e) {
	    e.preventDefault()
	    
	    var blockID = anchor.getAttribute('href').substr(1)
	    
	    document.getElementById(blockID).scrollIntoView({
	      behavior: 'smooth',
	      block: 'start'
	    })
	  })
	}

	for (var i = 0; i < document.querySelectorAll('.click-close-js').length; i++) {
		document.querySelectorAll('.click-close-js')[i].addEventListener('click', function(){
			document.querySelector('.mobile-close').click();
		});
	}

	var buttonInput = document.querySelectorAll('.form-ajax .button-primary');
	for (var i = 0; i < buttonInput.length; i++) {
		
		buttonInput[i].addEventListener('click', function(e){
		var parent = this.closest('.form-ajax');
		if (parent.querySelector('input[name="name"]').value == "") {
			e.preventDefault();
			parent.querySelector('input[name="name"]').parentElement.querySelector('.input-block__error').style.opacity = 1;
		} else if (parent.querySelector('input[name="phone"]').value.length != 17) {
			e.preventDefault();
			parent.querySelector('input[name="phone"]').parentElement.querySelector('.input-block__error').style.opacity = 1;
		}
	});
	}

	var msgInput = document.querySelectorAll('.input-block__msg input');
	for (var i = 0; i < msgInput.length; i++) {
		msgInput[i].addEventListener('input', function(){
			if (this.value.length > 400) {
				this.parentElement.querySelector('.input-block__error').style.opacity = 1;
			} else if (this.value.length < 400) {
				this.parentElement.querySelector('.input-block__error').style.opacity = 0;
			}
		});
	}

	var textareaInput = document.querySelectorAll('.input-block__textarea textarea');
	for (var i = 0; i < textareaInput.length; i++) {
		textareaInput[i].addEventListener('input', function(){
			if (this.value.length > 400) {
				this.parentElement.querySelector('.input-block__error').style.opacity = 1;
			} else if (this.value.length < 400) {
				this.parentElement.querySelector('.input-block__error').style.opacity = 0;
			}
		});
	}
	
});