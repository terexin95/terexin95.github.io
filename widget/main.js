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
  <style>input{height:40px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;border:1px solid #ccc;outline:0;padding:0 15px}input:focus{border-color:#1aaf33}input[type=tel],input[type=text]{width:100%}.overlay{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.55);z-index:10000;opacity:0;visibility:hidden;-webkit-transition:.55s opacity,.55s visibility;-o-transition:.55s opacity,.55s visibility;transition:.55s opacity,.55s visibility}.remarked-widget{width:700px;position:fixed;background-color:#fff;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10001;border-radius:20px;color:#fff;opacity:0;visibility:hidden;-webkit-transition:.55s opacity,.55s visibility;-o-transition:.55s opacity,.55s visibility;transition:.55s opacity,.55s visibility}.remarked-widget-classic__header{padding:20px 30px;background-color:#a50204;border-radius:20px 20px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.remarked-widget__close{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.remarked-widget-classic__body{padding:30px}.remarked-widget__userdata{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px}.remarked-widget__userdata input{max-width:47%;-webkit-box-flex:0;-ms-flex:0 0 47%;flex:0 0 47%}.remarked-widget-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -20px;margin-bottom:20px}.remarked-widget-column{max-width:50%;-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.remarked-widget__times{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.remarked-widget__time{max-width:13%;-webkit-box-flex:0;-ms-flex:0 0 13%;flex:0 0 13%;margin-right:1.5%;color:#333;text-align:center;background-color:#ededed;height:40px;border-radius:8px;cursor:pointer;margin-bottom:1.5%;line-height:40px}.remarked-widget__time:nth-child(7n){margin-right:0}.remarked-widget__comment{margin-top:15px;margin-bottom:20px}button{height:40px;padding:0 30px;background-color:#1aaf33;border:0;border-radius:4px;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;cursor:pointer;color:#fff;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}button:active,button:focus,button:hover{background-color:#19a330;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.remarked-widget-none{position:relative;z-index:-1}.remarked-widget-active{position:relative;z-index:1}.remarked-widget-active .overlay,.remarked-widget-active .remarked-widget{opacity:1;visibility:visible}.remarked-widget-title{color:#8a8a8a;margin-bottom:15px;font-weight:500}</style>
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
						<input type="text" placeholder="Имя" name="userName">
					</div>
					<div class="remarked-widget-column">
						<input type="tel" placeholder="Телефон" name="userPhone">
					</div>
				</div>
				<div class="remarked-widget-row">
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Выберите дату</div>
						<input type="date" id="start" name="trip-start" value="${today}" min="${today}" max="${todayMax}">
					</div>
					<div class="remarked-widget-column">
						<div class="remarked-widget-title">Количество гостей</div>
						<input type="number" value="2" max="10" min="1" name="current">
					</div>
				</div>
				<div class="remarked-widget-title">Время</div>
				<div class="remarked-widget__times">
					<div class="remarked-widget__time">9:00</div>
					<div class="remarked-widget__time">9:30</div>
					<div class="remarked-widget__time">10:00</div>
					<div class="remarked-widget__time">10:30</div>
					<div class="remarked-widget__time">11:00</div>
					<div class="remarked-widget__time">11:30</div>
					<div class="remarked-widget__time">12:00</div>
					<div class="remarked-widget__time">12:30</div>
					<div class="remarked-widget__time">13:00</div>
					<div class="remarked-widget__time">13:30</div>
					<div class="remarked-widget__time">14:00</div>
					<div class="remarked-widget__time">14:30</div>
					<div class="remarked-widget__time">15:00</div>
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

let remarkedClose = document.querySelector('.remarked-widget__close');

remarkedClose.addEventListener('click', function(){
	remarkedWidgetClassic.classList.remove('remarked-widget-active');
	remarkedWidgetClassic.classList.add('remarked-widget-none');
});

let remarkedOpenWidget = document.querySelectorAll('.remarked-open-widget');

console.log(remarkedOpenWidget);

for (var i = 0; i < remarkedOpenWidget.length; i++) {
	remarkedOpenWidget[i].addEventListener('click', function(){
		remarkedWidgetClassic.classList.add('remarked-widget-active');
		remarkedWidgetClassic.classList.remove('remarked-widget-none');
	});
}