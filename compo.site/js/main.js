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
});