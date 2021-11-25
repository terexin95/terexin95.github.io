let lang = document.querySelectorAll('.lang');

for (var i = lang.length - 1; i >= 0; i--) {
		lang[i].querySelector('.lang__instance').addEventListener('click', function(){
		this.parentElement.querySelector('.lang__list').style.display = "block"
	});
}

let langItem = document.querySelectorAll('.lang__list .lang__item');

for (var i = 0; i < langItem.length; i++) {
	langItem[i].addEventListener('click', function(){
		let parent = this.parentElement.parentElement;
		let clone = this.cloneNode(true);
		parent.querySelector('.lang__instance .lang__item').remove();
		parent.querySelector('.lang__instance').prepend(clone);
		this.parentElement.style.display = "none";
	});
}

document.addEventListener('click', function(event) {
	for (var i = lang.length - 1; i >= 0; i--) {
		var e = lang[i];
  	if (!e.contains(event.target)) e.querySelector('.lang__list').style.display='none';
	}
  
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

let slBtn = document.querySelectorAll('.slider__button-item');
let slI = document.querySelector('.slider__item');
let slIAll = document.querySelectorAll('.slider__item');
for (var i = 0; i < slBtn.length; i++) {
	slBtn[i].addEventListener('click', function(){
		document.querySelector('.slider__button-item--active').classList.remove('slider__button-item--active');
		this.classList.add('slider__button-item--active');
		this.getAttribute('data-sl');
		document.querySelector('.slider__item--active').classList.remove('.slider__item--active');
		slIAll[this.getAttribute('data-sl')].classList.add('slider__item--active');
		document.querySelector('.slider__wrap').style.transform = "translateX(-" + this.getAttribute('data-sl') * slI.offsetWidth + 'px)';
	});
}

document.querySelector('.site-header__hum .hum').addEventListener('click', function(){
	this.parentElement.classList.add('site-header__hum--active');
	document.querySelector('.mobile-menu').style.display = 'block';
	document.querySelector('body').style.overflow = "hidden";
});

document.querySelector('.site-header__hum .close').addEventListener('click', function(){
	this.parentElement.classList.remove('site-header__hum--active');
	document.querySelector('.mobile-menu').style.display = 'none';
	document.querySelector('body').style.overflow = "auto";
});