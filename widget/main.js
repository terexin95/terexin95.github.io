let remarkedToken;
const remarkedReqUrl = "https://app.remarked.ru/api/v1/ApiReservesWidget";

const remarkedXHR = new XMLHttpRequest();

const remarkedBody = {
	method: 'GetToken',
	request_id: new Date().getTime()
}


let remarkedBodyJSON = JSON.stringify(remarkedBody);


remarkedXHR.open('POST', remarkedReqUrl);

remarkedXHR.responseType = 'json';
remarkedXHR.setRequestHeader('Content-Type', 'application/json');

remarkedXHR.onload = function(){
	
	remarkedToken = remarkedXHR.response.token;

}

remarkedXHR.send(remarkedBodyJSON);

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
			<div class="remarked-widget-classic__step remarked-widget-classic__step-0">
				<div class="remarked-widget-rooms">
					<div class="remarked-widget-room">Хачапури и вино Малая Конюшенная, 9</div>
					<div class="remarked-widget-room">Хачапури и вино Коломяжский, 15к2</div>
					<div class="remarked-widget-room">Хачапури и вино Казанская, 29</div>
					<div class="remarked-widget-room">Хачапури и вино Маяковского, 56</div>
					<div class="remarked-widget-room">Хачапури и вино Правды, 9</div>
					<div class="remarked-widget-room">Хачапури и вино Кадетская, 29</div>
					<div class="remarked-widget-room">Хачапури и вино Большой Проспект ПС, 74</div>
				</div>
			</div>
			<div class="remarked-widget-classic__step remarked-widget-classic__step-1">
				<div class="remarked-widget-text">
					«Пожалуйста, сохраните в телефоне сообщение о подтверждении бронирования от ресторана.» 
					<a href="#" class="remarked-widget-info">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 14.4516C4.43445 14.4516 1.54839 11.5667 1.54839 8C1.54839 4.43564 4.43458 1.54839 8 1.54839C11.5642 1.54839 14.4516 4.43455 14.4516 8C14.4516 11.5655 11.5667 14.4516 8 14.4516ZM11.4595 6.21935C11.4595 8.38232 9.12332 8.41561 9.12332 9.21494V9.41935C9.12332 9.63313 8.95 9.80645 8.73623 9.80645H7.26374C7.04997 9.80645 6.87664 9.63313 6.87664 9.41935V9.14003C6.87664 7.98697 7.75084 7.52603 8.41145 7.15564C8.97794 6.83806 9.32513 6.62206 9.32513 6.20148C9.32513 5.64516 8.61548 5.2759 8.04177 5.2759C7.29374 5.2759 6.94842 5.63 6.463 6.24265C6.33213 6.40781 6.09332 6.43848 5.92539 6.31116L5.02784 5.63058C4.8631 5.50568 4.82619 5.27361 4.94255 5.10274C5.70471 3.98358 6.67548 3.35484 8.1869 3.35484C9.76984 3.35484 11.4595 4.59045 11.4595 6.21935V6.21935ZM9.35484 11.6129C9.35484 12.36 8.74706 12.9677 8 12.9677C7.25294 12.9677 6.64516 12.36 6.64516 11.6129C6.64516 10.8658 7.25294 10.2581 8 10.2581C8.74706 10.2581 9.35484 10.8658 9.35484 11.6129Z" fill="#BBBBBB"/>
						</svg>
					</a>
				</div>
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
				<button id="nextStep2" class="mb-2">Продолжить</button>
			</div>
			<div class="remarked-widget-classic__step remarked-widget-classic__step-2">
				<div class="remarked-widget-text">
					«Пожалуйста, сохраните в телефоне сообщение о подтверждении бронирования от ресторана.» 
					<div class="remarked-widget-info">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 14.4516C4.43445 14.4516 1.54839 11.5667 1.54839 8C1.54839 4.43564 4.43458 1.54839 8 1.54839C11.5642 1.54839 14.4516 4.43455 14.4516 8C14.4516 11.5655 11.5667 14.4516 8 14.4516ZM11.4595 6.21935C11.4595 8.38232 9.12332 8.41561 9.12332 9.21494V9.41935C9.12332 9.63313 8.95 9.80645 8.73623 9.80645H7.26374C7.04997 9.80645 6.87664 9.63313 6.87664 9.41935V9.14003C6.87664 7.98697 7.75084 7.52603 8.41145 7.15564C8.97794 6.83806 9.32513 6.62206 9.32513 6.20148C9.32513 5.64516 8.61548 5.2759 8.04177 5.2759C7.29374 5.2759 6.94842 5.63 6.463 6.24265C6.33213 6.40781 6.09332 6.43848 5.92539 6.31116L5.02784 5.63058C4.8631 5.50568 4.82619 5.27361 4.94255 5.10274C5.70471 3.98358 6.67548 3.35484 8.1869 3.35484C9.76984 3.35484 11.4595 4.59045 11.4595 6.21935V6.21935ZM9.35484 11.6129C9.35484 12.36 8.74706 12.9677 8 12.9677C7.25294 12.9677 6.64516 12.36 6.64516 11.6129C6.64516 10.8658 7.25294 10.2581 8 10.2581C8.74706 10.2581 9.35484 10.8658 9.35484 11.6129Z" fill="#BBBBBB"/>
						</svg>
					</div>
				</div>
				<div class="remarked-widget-row">
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Выберите дату</div>
						<input type="date" id="start" name="trip-start" value="${today}" min="${today}">
					</div>
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Количество гостей</div>
						<div class="remarked-quantity">
						  <input type="number" value="1" readonly>
						</div>
					</div>
				</div>
				<button id="nextStep3" class="mb-2">Продолжить</button>
			</div>
			<div class="remarked-widget-classic__step remarked-widget-classic__step-3">
				<div class="remarked-widget-title">Время</div>
				<div class="remarked-widget__times">
					<div class="remarked-widget__time remarked-widget__time--disabled">12:00</div>
					<div class="remarked-widget__time remarked-widget__time-work remarked-widget__time--active">12:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">13:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">13:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">14:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">14:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">15:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">15:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">16:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">16:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">17:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">17:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">18:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">18:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">19:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">19:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">20:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">20:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">21:00</div>
					<div class="remarked-widget__time remarked-widget__time-work">21:30</div>
					<div class="remarked-widget__time remarked-widget__time-work">22:00</div>
				</div>
				<div class="remarked-widget__comment">
					<textarea name="remarked-comment" placeholder="Пожелание к бронированию"></textarea>
				</div>
				<button type="submit" id="remarkedSend">Подтвердить</button>
			</div>
		</div>
	</div>
`;
// let inpDay = document.createElement('div');
// function getDayOfWeek(date) {
// const dayOfWeek = new Date(date).getDay();    
// return isNaN(dayOfWeek) ? null : 
// 	['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
// }



// inpDay.classList.add('remarked-widget-days__dropdown-wrap');
// for(let i = 1; i < 10; i++) {
// 	let ddMax = +dd + i;
// 	let todayMax = yyyy + '-' + mm + '-' + ddMax;
// 	let textDay = getDayOfWeek(todayMax);
// 	inpDay.innerHTML += `<div data-remarkedDay="${todayMax}">${ddMax} ${textDay}</div>`
// }

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

let remarkedDescriptions = document.querySelectorAll('.remarked-widget-info');

for (let i = 0; i < remarkedDescriptions.length; i++) {
	remarkedDescriptions[i].addEventListener('click', function(e){
		e.preventDefault();
		let dremarkedDescriptionsText = document.createElement('div');
		dremarkedDescriptionsText.classList.add('dremarkedDescriptionsText');
		dremarkedDescriptionsText.innerHTML += `

				<div class="dremarkedDescriptionsText__close">&#10006;</div>
				<div class="dremarkedDescriptionsText__wrap">
					<strong>Мы бронируем столики на 2 часа. Если вам нужно больше времени – позвоните нам.</strong>
					<br><br>
					Мы разносторонние и многоуровневые – у нас есть высокие столики с высокими стульями, столики у окон, столики около растений и столики в тихих уголках. Позвоните и расскажите о столике своей мечты, а мы постараемся найти вариант, который подойдёт лучше всего. Вот номер: +78129028000
					<br><br>
					Мы любим наше вино и десерты, но понимаем тех, кто хочет прийти со «своим». Сбор за бутылку вина (объемом 0.75 литра) составит 500 рублей, сбор за бутылку крепкого алкоголя (объемом до 1 литра) - 800 рублей. Пожалуйста, возьмите с собой чек – так надо по закону.
					<br><br>
					Большие компании – это супер. Если вас будет больше чем шестеро, то позвоните нам по телефону, подумаем, как вместить всех!
					<br><br>
					Мы dog-friendly – к нам можно с собаками. Любим собачек. Приходите!
				</div>
		`;
		document.querySelector('body').append(dremarkedDescriptionsText);
		let dremarkedDescriptionsText__close = document.querySelector('.dremarkedDescriptionsText__close');

		dremarkedDescriptionsText__close.addEventListener('click', function(){
			document.querySelector('body > .dremarkedDescriptionsText').remove();
		});
	});
}




let remarkedOpenWidget = document.querySelectorAll('.remarked-open-widget');

for (var i = 0; i < remarkedOpenWidget.length; i++) {
	remarkedOpenWidget[i].addEventListener('click', function(){
		remarkedWidgetClassic.classList.add('remarked-widget-active');
		remarkedWidgetClassic.classList.remove('remarked-widget-none');
		//document.querySelector('.remarked-widget-days__dropdown').append(inpDay);

		//room

		let remarkedWidgetRoom = document.querySelectorAll('.remarked-widget-room');
		for (let index = 0; index < remarkedWidgetRoom.length; index++) {
			remarkedWidgetRoom[index].addEventListener('click', function(){
				this.classList.add('remarked-widget-room--active');
				document.querySelector('.remarked-widget-classic__step-0').style.display = "none";
				document.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--active');
			});
		}
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

let remarkedUserInputText;
let remarkedPhoneInputText;
let remarkedEmailInputText;

remarkedUserInput.addEventListener('change', function(){
	if (remarkedUserInput.value !== '') {
		remarkedUserInputVal = true;
		remarkedUserInputText = remarkedUserInput.value;
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
		remarkedPhoneInputText = remarkedPhoneInput.value;
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
		remarkedEmailInputText = remarkedEmailInput.value;
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
	let remarkedTimeClick = document.querySelectorAll('.remarked-widget__time-work');
	for (let i = 0; i < remarkedTimeClick.length; i++) {
		remarkedTimeClick[i].addEventListener('click', function(){
			document.querySelector('.remarked-widget__time--active').classList.remove('remarked-widget__time--active');
			this.classList.add('remarked-widget__time--active');
		});
	}
	let remarkedSend = document.querySelector('#remarkedSend');
	let remarkedSucsess = document.createElement('div');
	remarkedSucsess.innerHTML += `
		<div class="remarked-widget-classic__step-4">
			<div class="remarked-success-wrap">
				<div class="circle-border"></div>
				<div class="circle">
					<div class="success"></div>
					</div>
				</div>
			</div>
			<div class="remarked-success-text">
				Успешно забронировано
			</div>
			<div class="remarked-success-button">
				<button id="remarkedCloseModal">Завершить</button>
			</div>
		</div>
	`;
	remarkedSend.addEventListener('click', function(){
		let remarkedBodyRooms = {
			method: 'CreateReserve',
			token: remarkedToken,
			reserve: {
				name: remarkedUserInputText,
				phone: "+7" + remarkedPhoneInputText,
				email: remarkedEmailInputText,
				date: document.querySelector("#start").value,
				time: document.querySelector('.remarked-widget__time--active').textContent,
				guests_count: document.querySelector('.remarked-quantity input').value       
			},
			request_id: new Date().getTime()
		};
			const remarkedXHRRoom = new XMLHttpRequest();
			
			let remarkedBodyRoomsJSON = JSON.stringify(remarkedBodyRooms);


			remarkedXHRRoom.open('POST', remarkedReqUrl);

			remarkedXHRRoom.responseType = 'json';
			remarkedXHRRoom.setRequestHeader('Content-Type', 'application/json');

			remarkedXHRRoom.onload = function(){
				console.log(remarkedBodyRooms);
				if(remarkedXHRRoom.status == 200) {
					document.querySelector('.remarked-widget-classic__step-3').style.display="none";
					document.querySelector('.remarked-widget-classic__body').append(remarkedSucsess);
					let remarkedCloseModal = document.querySelector('#remarkedCloseModal');
					remarkedCloseModal.addEventListener('click', function(){
						remarkedWidgetClassic.classList.remove('remarked-widget-active');
						remarkedWidgetClassic.classList.add('remarked-widget-none');
					});
				}
			}

			remarkedXHRRoom.send(remarkedBodyRoomsJSON);
			});
		});



