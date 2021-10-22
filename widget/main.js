let remarkedWidgetClassic = document.createElement('div');
remarkedWidgetClassic.classList.add('remarked-widget-none')


//Получение даты
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
let ddMax = +dd + 5;
let todayMax = yyyy + '-' + mm + '-' + ddMax;

remarkedWidgetClassic.innerHTML += `
  
	<div class="overlay"></div>
	<div class="remarked-widget remarked-widget-classic">
		<div class="remarked-widget-classic__header">
			<div class="remarked-widget__title">
				Бронирование
			</div>
			<div class="remarked-widget__close">
				&#10006;
			</div>
		</div>
		<div class="remarked-widget-classic__body">
			<div class="remarked-widget-classic__step remarked-widget-classic__step-1">
				<div class="remarked-widget-title">Ваши данные</div>
				<div class="remarked-widget-row">
					<div class="remarked-widget-column">
						<input type="text" placeholder="Имя" id="remarkedUserInput" name="userName">
					</div>
					<div class="remarked-widget-column">
						<input type="tel" class="remarked-phone" id="remarkedPhoneInput" name="userPhone" placeholder="(900) 123-4567">
					</div>
					<div class="remarked-widget-column mt-2">
						<input type="text" placeholder="email@exemple.ru" id="remarkedEmailInput" name="userEmail">
					</div>
				</div>
				<div class="remarked-widget-text">
					«Пожалуйста, сохраните в телефоне сообщение о подтверждении бронирования от ресторана.» 
				</div>
			</div>
			<div class="remarked-widget-classic__step remarked-widget-classic__step-2">
				<div class="remarked-widget-row">
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Выберите дату</div>
						<input type="date" id="start" name="trip-start" value="${today}" min="${today}" max="${todayMax}">
					</div>
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Количество гостей</div>
						<div class="remarked-quantity">
						  <input type="number" value="1" readonly>
						</div>
					</div>
				</div>
				<button id="nextStep3" class="mb-2">Продолжить</button>
				<div class="remarked-widget-text">
					«Пожалуйста, сохраните в телефоне сообщение о подтверждении бронирования от ресторана.» 
				</div>
			</div>
			<div class="remarked-widget-classic__step remarked-widget-classic__step-3">
				<div class="remarked-widget-title">Время</div>
				<div class="remarked-widget__times">
					<div class="remarked-widget__time">12:00</div>
					<div class="remarked-widget__time">12:30</div>
					<div class="remarked-widget__time">13:00</div>
					<div class="remarked-widget__time">13:30</div>
					<div class="remarked-widget__time">14:00</div>
					<div class="remarked-widget__time">14:30</div>
					<div class="remarked-widget__time">15:00</div>
					<div class="remarked-widget__time">15:30</div>
					<div class="remarked-widget__time">16:00</div>
					<div class="remarked-widget__time">16:30</div>
					<div class="remarked-widget__time">17:00</div>
					<div class="remarked-widget__time">17:30</div>
					<div class="remarked-widget__time">18:00</div>
					<div class="remarked-widget__time">18:30</div>
					<div class="remarked-widget__time">19:00</div>
					<div class="remarked-widget__time">19:30</div>
					<div class="remarked-widget__time">20:00</div>
					<div class="remarked-widget__time">20:30</div>
					<div class="remarked-widget__time">21:00</div>
					<div class="remarked-widget__time">21:30</div>
					<div class="remarked-widget__time">22:00</div>
				</div>
				<div class="remarked-widget__comment">
					<input type="text" placeholder="Пожелание к бронированию">
				</div>
				<button type="submit">Подтвердить</button>
			</div>
		</div>
	</div>
`;

document.querySelector('body').append(remarkedWidgetClassic);
let remarkedOverlay = document.querySelector('.overlay'); 
let remarkedClose = document.querySelector('.remarked-widget__close');

remarkedClose.addEventListener('click', function(){
	remarkedWidgetClassic.classList.remove('remarked-widget-active');
	remarkedWidgetClassic.classList.add('remarked-widget-none');
});

remarkedOverlay.addEventListener('click', function(){
	remarkedWidgetClassic.classList.remove('remarked-widget-active');
	remarkedWidgetClassic.classList.add('remarked-widget-none');
});

let remarkedOpenWidget = document.querySelectorAll('.remarked-open-widget');

for (var i = 0; i < remarkedOpenWidget.length; i++) {
	remarkedOpenWidget[i].addEventListener('click', function(){
		remarkedWidgetClassic.classList.add('remarked-widget-active');
		remarkedWidgetClassic.classList.remove('remarked-widget-none');
	});
}

let remarkedPhone = document.querySelector('.remarked-phone');

remarkedPhone.addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});


//Количество гостей

/*
*
* Custom quantity input
* Element requires following HTML structure
* <div class="quantity"><input type="number"/></div>
* 
*
*/

function quantityInput(element, options) {
  const spinner = element;

  const defaultOptions = {
    min: 1,
    max: 250,
    value: 1,
  };

  options = Object.assign({}, defaultOptions, options);

  const obj = {

    input: spinner.querySelector('input[type="number"]'),
    init() {
      this.setup();
      this.events();
      return this;
    },
    setup() {

      this.input.value = options.value;
      this.max = options.max;
      this.min = options.min;

      const qNav = document.createElement('div');
      const qUp = document.createElement('div');
      const qDown = document.createElement('div');

      qNav.setAttribute('class', 'remarked-quantity-nav');
      qUp.setAttribute('class', 'remarked-quantity-button remarked-quantity-button--up');
      qDown.setAttribute('class', 'remarked-quantity-button remarked-quantity-button--down');

      qUp.innerHTML = '+';
      qDown.innerHTML = '-';
      qNav.appendChild(qUp);
      qNav.appendChild(qDown);
      spinner.appendChild(qNav);

      this.btnUp = spinner.querySelector('.remarked-quantity-button--up');
      this.btnDown = spinner.querySelector('.remarked-quantity-button--down');
    },
    trigger() {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      return event;
    },
    events() {
      this.btnUp.addEventListener('click', () => {
        const oldValue = parseFloat(this.input.value);
        let newVal;
        if (oldValue >= this.max) {
          newVal = oldValue;
        } else {
          newVal = oldValue + 1;
        }
        this.input.value = newVal;
        this.input.dispatchEvent(this.trigger());
      });

      this.btnDown.addEventListener('click', () => {
        const oldValue = parseFloat(this.input.value);
        let newVal;
        if (oldValue <= this.min) {
          newVal = oldValue;
        } else {
          newVal = oldValue - 1;
        }
        this.input.value = newVal;
        this.input.dispatchEvent(this.trigger());
      });
      this.input.addEventListener('change', () => {
        if (parseInt(this.input.value, 16) < this.min) {
          this.input.value = this.min;
        }
        if (parseInt(this.input.value, 16) > this.max) {
          this.input.value = this.max;
        }
      });
    },
  }
  return obj.init();
}

const numberInputs = document.querySelectorAll(".remarked-quantity");

if (numberInputs.length > 0) {
  numberInputs.forEach((el, index) => {
    quantityInput(el, {
      min: 1,
      max: 10,
      value: 1,
    });
  });
}

let remarkedUserInput = document.querySelector('#remarkedUserInput');
let remarkedPhoneInput = document.querySelector('#remarkedPhoneInput');
let remarkedEmailInput = document.querySelector('#remarkedEmailInput');

let remarkedUserInputVal = false;
let remarkedPhoneInputVal = false;
let remarkedEmailInputVal = false;

remarkedUserInput.addEventListener('change', function(){
	if (remarkedUserInput.value !== '') {
		remarkedUserInputVal = true;
	} else {
		remarkedUserInputVal = false;
	}
	if(remarkedUserInputVal && remarkedPhoneInputVal && remarkedEmailInputVal) {
		document.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
		document.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
	}
});

remarkedPhoneInput.addEventListener('change', function(){
	if (remarkedPhoneInput.value !== '' && remarkedPhoneInput.value.length == 14) {
		remarkedPhoneInputVal = true;
	} else {
		remarkedPhoneInputVal = false;
	}
	if(remarkedUserInputVal && remarkedPhoneInputVal && remarkedEmailInputVal) {
		document.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
		document.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
	}
});

remarkedEmailInput.addEventListener('change', function(){
	if (remarkedEmailInput.value !== '') {
		remarkedEmailInputVal = true;
	} else {
		remarkedEmailInputVal = false;
	}
	if(remarkedUserInputVal && remarkedPhoneInputVal && remarkedEmailInputVal) {
		document.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
		document.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
	}
});

let nextStep3 = document.querySelector('#nextStep3');

nextStep3.addEventListener('click', function(){
	document.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--none');
	document.querySelector('.remarked-widget-classic__step-2').classList.remove('remarked-widget-classic__step-2--active');
	document.querySelector('.remarked-widget-classic__step-3').classList.add('remarked-widget-classic__step-3--active');
});