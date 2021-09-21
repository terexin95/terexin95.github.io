if (document.querySelector('.input-check__input')) {
	var inputCheckbox = document.querySelectorAll('.input-check__input');
	for (var i = 0; i < inputCheckbox.length; i++) {
		inputCheckbox[i].addEventListener('click', function(){
			this.classList.toggle('input-check__input--active');
		})
	}
}