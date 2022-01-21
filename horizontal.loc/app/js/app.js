// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('.slider__init')) {
		var swiper = new Swiper(".slider__init", {
	    slidesPerView: 1,
	    spaceBetween: 0,
	    mousewheel: true,
	    pagination: {
	      el: ".swiper-pagination",
	      type: "fraction"
	    },
	  });

	  
	  swiper.on('slideChange', function () {
		  if (swiper.activeIndex == 2) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg3.png)';
		  }
		  if (swiper.activeIndex == 3) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg4.png)';
		  }
		  if (swiper.activeIndex == 4) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg.png)';
		  }
	  	if (swiper.activeIndex == 5 || swiper.activeIndex == 6 || swiper.activeIndex == 7 || swiper.activeIndex == 8 || swiper.activeIndex == 9 || swiper.activeIndex == 10) {
	  		document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg2.png)';
	  	}
	  	if (swiper.activeIndex == 11 || swiper.activeIndex == 12 || swiper.activeIndex == 13 || swiper.activeIndex == 14 || swiper.activeIndex == 15) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg5.png)';
		  }
		  if (swiper.activeIndex == 16) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg2.png)';
		  }
		  if (swiper.activeIndex == 17) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg.png)';
		  }
		  if (swiper.activeIndex == 18) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg2.png)';
		  }
		  if (swiper.activeIndex == 19) {
				document.querySelector('.slider__init').style.backgroundImage = 'url(images/dist/bg.png)';
		  }
		});
	}

})
