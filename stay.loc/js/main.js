if(document.querySelector('.input-checkbox__item')){
	var inpCheck = document.querySelectorAll('input[type=checkbox]');
	for (var i = 0; i < inpCheck.length; i++) {
		inpCheck[i].addEventListener('click', function(){
			this.parentElement.classList.toggle('input-checkbox__item--active')
		})
	}
}