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

var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion__item--active");
  });
}

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

