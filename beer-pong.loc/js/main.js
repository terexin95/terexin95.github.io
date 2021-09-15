window.onscroll = function() {myFunction()};

var header = document.getElementById("header-sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var acc = document.getElementsByClassName("accordion__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("accordion__item--active");
  });
}

// if(document.querySelector('.shop__filter')){
// 	document.querySelector('.shop__filter').addEventListener('click', function(){
// 		document.querySelector('.shop__sidebar').classList.add('shop__sidebar--active');
// 	});

// 	document.querySelector('.shop__sidebar-header-close').addEventListener('click', function(){
// 		document.querySelector('.shop__sidebar').classList.remove('shop__sidebar--active');
// 	});

// }

if(document.querySelector('.delivery__content-button')){
	var delBtn = document.querySelectorAll('.delivery__content-button');

	for(var i = 0; i < delBtn.length; i++){
		delBtn[i].addEventListener('click', function(){
			this.parentElement.classList.toggle('delivery__wrap--active');
		});
	}
}

if(document.querySelector('.slider-header__wrap')){
	var sliderHeaderPosition = 0;
	var sliderHeaderWrap = document.querySelector('.slider-header__wrap');
	var sliderHeaderLeft = document.querySelector('.slider-header__btn-left');
	var sliderHeaderRight = document.querySelector('.slider-header__btn-right');
	var sliderHeaderItem = document.querySelectorAll('.slider-header-item').length;


	var sliderHeaderWidth = sliderHeaderItem * -305 + 610;
	sliderHeaderRight.addEventListener('click', function(){
		sliderHeaderPosition = sliderHeaderPosition - 305;
		console.log(sliderHeaderPosition, sliderHeaderWidth);
		if (sliderHeaderPosition === sliderHeaderWidth) {
			sliderHeaderPosition = 0;
			sliderHeaderWrap.style.transform = "translateX(0px)";
		} else {
			sliderHeaderWrap.style.transform = "translateX("+sliderHeaderPosition+"px)";
		}
	});

	sliderHeaderLeft.addEventListener('click', function(){
		if (sliderHeaderPosition === 0) {
			sliderHeaderWrap.style.transform = "translateX(0px)";
		} else {
			sliderHeaderPosition = sliderHeaderPosition + 305;
			sliderHeaderWrap.style.transform = "translateX("+sliderHeaderPosition+"px)";
		}
	});
}

if(document.querySelector('.header__burger')){
	document.querySelector('.header__burger').addEventListener('click', function(){
		document.querySelector('.header__burger').classList.add('header__burger--active');
		document.querySelector('.modal-menu').classList.add('modal-menu--active');
		document.querySelector('.header__close').classList.add('header__close--active');
	});
	document.querySelector('.header__close').addEventListener('click', function(){
		document.querySelector('.header__burger').classList.remove('header__burger--active');
		document.querySelector('.modal-menu').classList.remove('modal-menu--active');
		document.querySelector('.header__close').classList.remove('header__close--active');
	});
};
