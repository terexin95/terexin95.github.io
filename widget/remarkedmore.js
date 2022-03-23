function widgetRemarked(options) {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener('touchmove', e => {
        if(e.scale !== 1) {
          e.preventDefault();
        }
      }, {passive: false});
    }
    let remarkedWidgetRooms = document.createElement('div');
    remarkedWidgetRooms.classList.add('remarked-widget-rooms');
    let remarkedWidgetRoomsArr = options.more;
    remarkedWidgetRoomsArr.forEach(function(el){
        let room = document.createElement('div');
        room.classList.add('remarked-widget-room');
        room.setAttribute('data-point', el.POINT);
        room.setAttribute('data-title', el.title);
        room.textContent = el.title;
        remarkedWidgetRooms.append(room);
    })

    //console.log(remarkedWidgetRooms)
    let remarkedToken;
    let remarkedArrDays;
    const remarkedReqUrl = "https://app.remarked.ru/api/v1/ApiReservesWidget";
    function getToken(point) {
        const remarkedXHR = new XMLHttpRequest();

        const remarkedBody = {
            method: 'GetToken',
            point: point,
            request_id: new Date().getTime()
        }


        let remarkedBodyJSON = JSON.stringify(remarkedBody);


        remarkedXHR.open('POST', remarkedReqUrl);

        remarkedXHR.responseType = 'json';
        remarkedXHR.setRequestHeader('Content-Type', 'application/json');

        remarkedXHR.onload = function(){
            
            //console.log(remarkedXHR.response);
            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-0').style.display = "none";
            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--active');
            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.remove('remarked-widget-classic__step-1--none');
            getDates();
            

        }

        remarkedXHR.onreadystatechange = function() {
            if (remarkedXHR.readyState == 4) {
                remarkedToken = remarkedXHR.response.token;
            }
        }

        remarkedXHR.send(remarkedBodyJSON);
        //remarkedToken = remarkedXHR.response.token
        //console.log(remarkedXHR);
        //return remarkedToken;
    }


      function getDates() {
        let data = {
            method: 'GetDates',
            token: remarkedToken,
            request_id: new Date().getTime()
        }
        const xhr = new XMLHttpRequest();
        let json = JSON.stringify(data);
        
        xhr.open('POST', remarkedReqUrl);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            console.log(xhr.response);
            let dates = xhr.response.dates;
            let dateSelect = document.querySelector('.remarked-widget-' +  options.classButton + ' #start');
            let option = dateSelect.querySelectorAll('option');
            for (var i = 0; i < option.length; i++) {
                let date = dates[i].split('-');
                let day = date[2];
                let mm = date[1];
                let year = date[0];
                let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентебря', 'октября', 'ноября', 'декабря'];
                let text = day + ' ' + arr[+mm-1] + ' ' + year;
                console.log(text);
            }
        }

        xhr.send(json);

      }
    

    let remarkedWidgetClassic = document.createElement('div');
    remarkedWidgetClassic.classList.add('remarked-widget-none')
    remarkedWidgetClassic.classList.add('remarked-widget-' + options.classButton);

    
    //Получение даты
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let ddMax = +dd + 5;
    let todayMax = yyyy + '-' + mm + '-' + ddMax;



    remarkedWidgetClassic.innerHTML += `
    <style>.remarked-widget textarea, .remarked-widget input, .remarked-widget select {color: #333} .remarked-widget-active select{height: 40px;width: 80%;border: 1px solid #ccc;border-radius: 4px;padding: 0 15px}.arrow-remarked-prev{position: absolute;cursor: pointer;z-index: 1}input{height:40px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;border:1px solid #ccc;outline:0;padding:0 15px}input:focus{border-color:#1aaf33}input[type=tel],input[type=text]{width:100%}.overlay{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.55);z-index:10000;opacity:0;visibility:hidden;-webkit-transition:.55s opacity,.55s visibility;-o-transition:.55s opacity,.55s visibility;transition:.55s opacity,.55s visibility}.remarked-widget{width:700px;position:fixed;background-color:#fff;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10001;border-radius:20px;color:#fff;opacity:0;visibility:hidden;-webkit-transition:.55s opacity,.55s visibility;-o-transition:.55s opacity,.55s visibility;transition:.55s opacity,.55s visibility}.remarked-widget-classic__header{padding:20px 30px;background-color: ${options.color_red};border-radius:20px 20px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.remarked-widget__close{color:#fff;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.remarked-widget-classic__body{padding:30px}.remarked-widget__userdata{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px}.remarked-widget__userdata input{max-width:47%;-webkit-box-flex:0;-ms-flex:0 0 47%;flex:0 0 47%}.remarked-widget-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -20px;margin-bottom:20px}.remarked-widget-column{max-width:50%;-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.remarked-widget__times{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.remarked-widget__time{max-width:9%;-webkit-box-flex:0;-ms-flex:0 0 13%;flex:0 0 13%;margin-right:1%;color:#333;text-align:center;background-color:#ededed;height:40px;border-radius:8px;cursor:pointer;margin-bottom:1%;line-height:40px;user-select:none}.remarked-widget__time:nth-child(10n){margin-right:0}.remarked-widget__comment{margin-top:15px;margin-bottom:20px}.remarked-widget-days{position:relative}.remarked-widget-days__dropdown{position:absolute;top:calc(100% - 1px);z-index:1;color:#000;background-color:#fff;width:100%}.remarked-widget-days__dropdown-wrap{border:1px solid #1aaf33;border-radius:4px}.remarked-widget-days__dropdown-wrap>div{height:40px;padding:10px;box-sizing:border-box;color:#000}.remarked-widget__comment textarea{resize:none;height:60px;width:100%;box-sizing:border-box;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;border:1px solid #ccc;outline:0;padding:10px 15px;font-family:sans-serif}button{height:40px;padding:0 30px;background-color:#1aaf33;border:0;border-radius:4px;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;cursor:pointer;color:#fff;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}button:active,button:focus,button:hover{background-color:#19a330;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.remarked-widget-none{position:relative;z-index:-1}.remarked-widget-active{position:relative;z-index:1}.remarked-widget-active .overlay,.remarked-widget-active .remarked-widget{opacity:1;visibility:visible}.remarked-widget-title{color:#8a8a8a;margin-bottom:15px;font-weight:500}.mt-2{margin-top:20px}.mb-2{margin-bottom:20px}.remarked-quantity{position:relative}.remarked-quantity input{width:70px;height:40px;line-height:1.65;float:left;display:block;padding:0;margin:0;padding-left:20px;border:1px solid #ccc}.remarked-quantity input:focus{outline:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.remarked-quantity-nav{float:left;position:relative;height:40px}.remarked-quantity-button{position:relative;cursor:pointer;border-left:1px solid #ccc;width:20px;text-align:center;color:#333;font-size:13px;font-family:"Trebuchet MS",Helvetica,sans-serif!important;line-height:1.7;-webkit-transform:translateX(-100%);transform:translateX(-100%);user-select:none}.remarked-quantity-button--up{position:absolute;height:50%;top:0;border-bottom:1px solid #ccc}.remarked-quantity-button--down{position:absolute;bottom:0;height:50%}.remarked-widget-room{height:40px;line-height:40px;padding-left:10px;padding-right:10px;box-sizing:border-box;text-align:center;border:1px solid #1aaf33;color:#333;transition:all .3s ease;margin-bottom:20px;border-radius:4px;transition:all .3s ease;cursor:pointer}.remarked-widget__time--disabled{background-color:#e1dfdf;color:#ccc;cursor:default}.remarked-widget__time--active,.remarked-widget__time-work:active,.remarked-widget__time-work:hover{background-color:#1aaf33;color:#fff;transition:all .3s ease}.remarked-widget-room:active,.remarked-widget-room:hover{background-color:#1aaf33;color:#fff;transition:all .3s ease}.remarked-widget-classic__step-1--none{overflow:hidden;display:none;height:0;transition:height .3s ease}.dremarkedDescriptionsText__wrap a{color:#333}.remarked-widget-classic__step-2,.remarked-widget-classic__step-3{display:none;opacity:0}.remarked-widget-classic__step-1--active,.remarked-widget-classic__step-2--active,.remarked-widget-classic__step-3--active{display:block;opacity:1;transition:opacity 3s ease}.remarked-widget-text{color:#333;text-align:center;font-size:12px;margin-bottom:20px;position:relative;padding:0 25px}.remarked-widget-info{position:absolute;top:50%;display:none;right:0;transform:translateY(-50%)}.circle,.circle-border{width:60px;height:60px;border-radius:50%}.circle{z-index:1;position:relative;background:#fff;transform:scale(1);animation:success-anim .7s ease}.circle-border{z-index:0;position:absolute;background:#8f6;transform:scale(1.1);animation:circle-anim .4s ease}.dremarkedDescriptionsText{position:fixed;width:800px;overflow-y:hidden;overflow-x:hidden;z-index:10002;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%,-50%);background-color:#fff;border-radius:30px;padding:30px;user-select:none}.dremarkedDescriptionsText__close{position:absolute;right:15px;top:15px;cursor:pointer}.dremarkedDescriptionsText__wrap{height:100%;overflow-y:hidden;overflow-x:hidden}@keyframes success-anim{0%{transform:scale(0)}30%{transform:scale(0)}100%{transform:scale(1)}}@keyframes circle-anim{from{transform:scale(0)}to{transform:scale(1.1)}}.success::after,.success::before{content:"";display:block;height:4px;background:#8f6;position:absolute}.success::before{width:17px;top:58%;left:23%;transform:rotateZ(50deg)}.success::after{width:30px;top:50%;left:35%;transform:rotateZ(-50deg)}.remarked-success-wrap{width:60px;margin:auto;position:relative}.remarked-success-text{text-align:center;margin:30px 0;color:#333}.remarked-success-button{text-align:center}@media (max-width:800px){.dremarkedDescriptionsText{width:100%;height:100%;border-radius:0}}@media (max-width:701px){.remarked-widget__time--disabled {display:none;}.remarked-widget{width:100%;height:100%;border-radius:0}.remarked-widget-classic__header{border-radius:0}}@media (max-width:470px){.remarked-widget-classic__body{height:calc(100vh - 121px);overflow-y:scroll}.remarked-widget-room{font-size:13px}.remarked-widget-column{max-width:100%;flex:0 0 100%}.remarked-widget-column:first-child{margin-bottom:20px}.remarked-widget__time{max-width:15%;flex:0 0 15%;margin-right:2%;margin-bottom:2%;font-size:14px}.remarked-widget__time:nth-child(10n){margin-right:2%}.remarked-widget__time:nth-child(6n){margin-right:0}.remarked-widget-classic__step-2 input{width:100%}}</style>
        <div class="overlay"></div>
        <div class="remarked-widget remarked-widget-classic">
            <div class="remarked-widget-classic__header">
                <div class="remarked-widget__title">
                    Выберите заведение
                </div>
                <div class="remarked-widget__close">
                    &#10006;
                </div>
            </div>
            <div class="remarked-widget-classic__body">
                <div class="remarked-widget-classic__step remarked-widget-classic__step-0">

                </div>
                <div class="remarked-widget-classic__step remarked-widget-classic__step-1 remarked-widget-classic__step-1--none">
                    <div class="prevStep0 arrow-remarked-prev">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.238655 6.45579L6.83882 0.2253C7.15702 -0.0750999 7.67322 -0.0750999 7.99142 0.2253L8.7613 0.952094C9.07917 1.25217 9.07951 1.7382 8.76266 2.03892L3.53177 6.99984L8.76232 11.9611C9.07951 12.2618 9.07883 12.7478 8.76096 13.0479L7.99108 13.7747C7.67288 14.0751 7.15668 14.0751 6.83848 13.7747L0.238655 7.54389C-0.0795517 7.24349 -0.0795517 6.75619 0.238655 6.45579V6.45579Z" fill="#696969"/>
                        </svg>                    
                    </div>
                    <div class="remarked-widget-text">
                        Пожалуйста, ознакомьтесь с правилами бронирования
                        <a href="#" class="remarked-widget-info">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 14.4516C4.43445 14.4516 1.54839 11.5667 1.54839 8C1.54839 4.43564 4.43458 1.54839 8 1.54839C11.5642 1.54839 14.4516 4.43455 14.4516 8C14.4516 11.5655 11.5667 14.4516 8 14.4516ZM11.4595 6.21935C11.4595 8.38232 9.12332 8.41561 9.12332 9.21494V9.41935C9.12332 9.63313 8.95 9.80645 8.73623 9.80645H7.26374C7.04997 9.80645 6.87664 9.63313 6.87664 9.41935V9.14003C6.87664 7.98697 7.75084 7.52603 8.41145 7.15564C8.97794 6.83806 9.32513 6.62206 9.32513 6.20148C9.32513 5.64516 8.61548 5.2759 8.04177 5.2759C7.29374 5.2759 6.94842 5.63 6.463 6.24265C6.33213 6.40781 6.09332 6.43848 5.92539 6.31116L5.02784 5.63058C4.8631 5.50568 4.82619 5.27361 4.94255 5.10274C5.70471 3.98358 6.67548 3.35484 8.1869 3.35484C9.76984 3.35484 11.4595 4.59045 11.4595 6.21935V6.21935ZM9.35484 11.6129C9.35484 12.36 8.74706 12.9677 8 12.9677C7.25294 12.9677 6.64516 12.36 6.64516 11.6129C6.64516 10.8658 7.25294 10.2581 8 10.2581C8.74706 10.2581 9.35484 10.8658 9.35484 11.6129Z" fill="#BBBBBB"/>
                            </svg>
                        </a>
                    </div>
                    <div class="remarked-widget-title">Ваши данные</div>
                    <div class="remarked-widget-row">
                        <div class="remarked-widget-column">
                            <input type="text" placeholder="Имя Фамилия" id="remarkedUserInput" name="userName">
                        </div>
                        <div class="remarked-widget-column">
                            <input type="tel" class="remarked-phone" id="remarkedPhoneInput" name="userPhone" placeholder="7 (900) 123-4567">
                        </div>
                        <div class="remarked-widget-column mt-2">
                            <input type="text" placeholder="email@exemple.ru" id="remarkedEmailInput" name="userEmail">
                        </div>
                    </div>
                    <button class="mb-2 nextStep2">Продолжить</button>
                    <div class="remarked-cod-phone" style="display: none;">
                        <div class="remarked-widget-title">Секретный код придет на ваш телефон в течение пары минут</div>
                        <input type="text" name="cod" maxlength="6" placeholder="Введите код" class="remarked-cod-phone-input">
                        <button class="mt-2 nextCode">Продолжить</button>
                    </div>
                </div>
                <div class="remarked-widget-classic__step remarked-widget-classic__step-2">
                    <div class="prevStep1 arrow-remarked-prev">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.238655 6.45579L6.83882 0.2253C7.15702 -0.0750999 7.67322 -0.0750999 7.99142 0.2253L8.7613 0.952094C9.07917 1.25217 9.07951 1.7382 8.76266 2.03892L3.53177 6.99984L8.76232 11.9611C9.07951 12.2618 9.07883 12.7478 8.76096 13.0479L7.99108 13.7747C7.67288 14.0751 7.15668 14.0751 6.83848 13.7747L0.238655 7.54389C-0.0795517 7.24349 -0.0795517 6.75619 0.238655 6.45579V6.45579Z" fill="#696969"/>
                        </svg>                    
                    </div>
                    <div class="remarked-widget-text">
                        Пожалуйста, ознакомьтесь с правилами бронирования 
                        <div class="remarked-widget-info">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 14.4516C4.43445 14.4516 1.54839 11.5667 1.54839 8C1.54839 4.43564 4.43458 1.54839 8 1.54839C11.5642 1.54839 14.4516 4.43455 14.4516 8C14.4516 11.5655 11.5667 14.4516 8 14.4516ZM11.4595 6.21935C11.4595 8.38232 9.12332 8.41561 9.12332 9.21494V9.41935C9.12332 9.63313 8.95 9.80645 8.73623 9.80645H7.26374C7.04997 9.80645 6.87664 9.63313 6.87664 9.41935V9.14003C6.87664 7.98697 7.75084 7.52603 8.41145 7.15564C8.97794 6.83806 9.32513 6.62206 9.32513 6.20148C9.32513 5.64516 8.61548 5.2759 8.04177 5.2759C7.29374 5.2759 6.94842 5.63 6.463 6.24265C6.33213 6.40781 6.09332 6.43848 5.92539 6.31116L5.02784 5.63058C4.8631 5.50568 4.82619 5.27361 4.94255 5.10274C5.70471 3.98358 6.67548 3.35484 8.1869 3.35484C9.76984 3.35484 11.4595 4.59045 11.4595 6.21935V6.21935ZM9.35484 11.6129C9.35484 12.36 8.74706 12.9677 8 12.9677C7.25294 12.9677 6.64516 12.36 6.64516 11.6129C6.64516 10.8658 7.25294 10.2581 8 10.2581C8.74706 10.2581 9.35484 10.8658 9.35484 11.6129Z" fill="#BBBBBB"/>
                            </svg>
                        </div>
                    </div>
                    <div class="remarked-widget-row">
                        <div class="remarked-widget-column">
                            <div class="remarked-widget-title">Выберите дату</div>
                            <select id="start"><option selected="selected" value="07.12.2021">07 декабря 2021</option><option value="08.12.2021">08 декабря 2021</option><option value="09.12.2021">09 декабря 2021</option><option value="10.12.2021">10 декабря 2021</option><option value="11.12.2021">11 декабря 2021</option></select>
                        </div>
                        <div class="remarked-widget-column">
                            <div class="remarked-widget-title">Количество гостей</div>
                            <div class="remarked-quantity">
                                <input type="number" readonly>
                            </div>
                        </div>
                    </div>
                    <button class="nextStep3">Продолжить</button>
                </div>
                <div class="remarked-widget-classic__step remarked-widget-classic__step-3">
                    <div class="prevStep2 arrow-remarked-prev">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.238655 6.45579L6.83882 0.2253C7.15702 -0.0750999 7.67322 -0.0750999 7.99142 0.2253L8.7613 0.952094C9.07917 1.25217 9.07951 1.7382 8.76266 2.03892L3.53177 6.99984L8.76232 11.9611C9.07951 12.2618 9.07883 12.7478 8.76096 13.0479L7.99108 13.7747C7.67288 14.0751 7.15668 14.0751 6.83848 13.7747L0.238655 7.54389C-0.0795517 7.24349 -0.0795517 6.75619 0.238655 6.45579V6.45579Z" fill="#696969"/>
                        </svg>                    
                    </div>
                    <div class="remarked-widget-text">
                        Пожалуйста, ознакомьтесь с правилами бронирования
                        <div class="remarked-widget-info">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 14.4516C4.43445 14.4516 1.54839 11.5667 1.54839 8C1.54839 4.43564 4.43458 1.54839 8 1.54839C11.5642 1.54839 14.4516 4.43455 14.4516 8C14.4516 11.5655 11.5667 14.4516 8 14.4516ZM11.4595 6.21935C11.4595 8.38232 9.12332 8.41561 9.12332 9.21494V9.41935C9.12332 9.63313 8.95 9.80645 8.73623 9.80645H7.26374C7.04997 9.80645 6.87664 9.63313 6.87664 9.41935V9.14003C6.87664 7.98697 7.75084 7.52603 8.41145 7.15564C8.97794 6.83806 9.32513 6.62206 9.32513 6.20148C9.32513 5.64516 8.61548 5.2759 8.04177 5.2759C7.29374 5.2759 6.94842 5.63 6.463 6.24265C6.33213 6.40781 6.09332 6.43848 5.92539 6.31116L5.02784 5.63058C4.8631 5.50568 4.82619 5.27361 4.94255 5.10274C5.70471 3.98358 6.67548 3.35484 8.1869 3.35484C9.76984 3.35484 11.4595 4.59045 11.4595 6.21935V6.21935ZM9.35484 11.6129C9.35484 12.36 8.74706 12.9677 8 12.9677C7.25294 12.9677 6.64516 12.36 6.64516 11.6129C6.64516 10.8658 7.25294 10.2581 8 10.2581C8.74706 10.2581 9.35484 10.8658 9.35484 11.6129Z" fill="#BBBBBB"/>
                            </svg>
                        </div>
                    </div>
                    <div class="remarked-widget-title">Время</div>
                    <div class="remarked-widget__comment">
                        <textarea name="remarked-comment" max-length="150" placeholder="Пожелание к бронированию"></textarea>
                    </div>
                    <button type="submit" class="remarkedSend">Подтвердить</button>
                </div>
            </div>
        </div>
    `;
    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-0').append(remarkedWidgetRooms);
    remarkedWidgetClassic.querySelector('.remarked-widget__title').addEventListener('click', function(){
        console.log(remarkedToken);
    });
    document.querySelector('body').append(remarkedWidgetClassic);
    let remarkedOverlay = document.querySelectorAll('.overlay'); 
    let remarkedClose = document.querySelectorAll('.remarked-widget__close');
    for (var i = remarkedClose.length - 1; i >= 0; i--) {
        remarkedClose[i].addEventListener('click', function(){
            this.parentElement.parentElement.parentElement.classList.remove('remarked-widget-active');
            this.parentElement.parentElement.parentElement.classList.add('remarked-widget-none');
        });
    }
    for (var i = remarkedOverlay.length - 1; i >= 0; i--) {
        remarkedOverlay[i].addEventListener('click', function(){
            remarkedWidgetClassic.classList.remove('remarked-widget-active');
            remarkedWidgetClassic.classList.add('remarked-widget-none');
        });
    }

    let remarkedDescriptions = remarkedWidgetClassic.querySelectorAll('.remarked-widget-info');

    for (let i = 0; i < remarkedDescriptions.length; i++) {
        remarkedDescriptions[i].addEventListener('click', function(e){
            e.preventDefault();
            let dremarkedDescriptionsText = document.createElement('div');
            dremarkedDescriptionsText.classList.add('dremarkedDescriptionsText');
            dremarkedDescriptionsText.innerHTML += `
                    <div class="dremarkedDescriptionsText__close">&#10006;</div>
                    <div class="dremarkedDescriptionsText__wrap"></div>
            `;
            document.querySelector('body').append(dremarkedDescriptionsText);
            let remarkedDescriptionsText__close = document.querySelectorAll('.dremarkedDescriptionsText__close');
            //console.log(remarkedDescriptionsText__close);

            for (var i = 0; i < remarkedDescriptionsText__close.length; i++) {
                remarkedDescriptionsText__close[i].addEventListener('click', function(){
                    //console.log(remarkedDescriptionsText__close);
                    document.querySelector('body > .dremarkedDescriptionsText').remove();
                });
            }
        });
    }

    let remarkedOpenWidget = document.querySelectorAll('.'+options.classButton);

    for (var i = 0; i < remarkedOpenWidget.length; i++) {
        remarkedOpenWidget[i].addEventListener('click', function(){
            remarkedWidgetClassic.classList.add('remarked-widget-active');
            remarkedWidgetClassic.classList.remove('remarked-widget-none');

                let dateSelect = document.querySelector('.remarked-widget-' +  options.classButton + ' #start');
                let option = dateSelect.querySelectorAll('option');
                for (var i = 0; i < option.length; i++) {
                    let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентебря', 'октября', 'ноября', 'декабря'];
                    let arr1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                    let date = new Date();
                    date.setDate(date.getDate() + i);
                    if (i == 0) {
                        option[i].setAttribute('selected', 'selected');
                    }
                    let day = date.getDate();

                    if (day < 10) {
                      day = day.toString();
                      day = '0' + day;
                    }
                    option[i].setAttribute('value', day + '.' + arr1[date.getMonth()] + '.' + date.getFullYear())
                    option[i].textContent = day + ' ' + arr[date.getMonth()] + ' ' + date.getFullYear();
                }
                // let numberInputs = remarkedWidgetClassic.querySelectorAll('.remarked-widget-' + options.classButton + ' .remarked-quantity');

                //     if (numberInputs.length > 0) {
                //         numberInputs.forEach((el, index) => {
                //             quantityInput(el, {
                //             min: 1,
                //             max: 10,
                //             value: 1,
                //             });
                //         });
                //     }

            let remarkedWidgetRoom = remarkedWidgetClassic.querySelectorAll('.remarked-widget-room');
            for (let index = 0; index < remarkedWidgetRoom.length; index++) {
                remarkedWidgetRoom[index].addEventListener('click', function(){
                    this.classList.add('remarked-widget-room--active');

                    remarkedWidgetClassic.querySelector('.remarked-widget__title').textContent = this.getAttribute('data-title');
                    //console.log(+this.getAttribute('data-point'))
                    let point = +this.getAttribute('data-point');
                    getToken(point);
                    //console.log(remarkedToken);
                });
            }
        });
    }


    let remarkedPhone = remarkedWidgetClassic.querySelector('.remarked-phone');

    remarkedPhone.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
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
    const numberInputs = remarkedWidgetClassic.querySelectorAll(".remarked-quantity");
    if (numberInputs.length > 0) {
    numberInputs.forEach((el, index) => {
        quantityInput(el, {
        min: 1,
        max: options.maxPeople,
        value: 1,
        });
    });
    }

    remarkedWidgetClassic.querySelector('.prevStep2').addEventListener('click', function(){
        if (remarkedWidgetClassic.querySelector('.remarked-widget__times')) {
            remarkedWidgetClassic.querySelector('.remarked-widget__times').remove();
        }
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3--active').classList.remove('remarked-widget-classic__step-3--active');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2--none').classList.remove('remarked-widget-classic__step-2--none');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
    });

    remarkedWidgetClassic.querySelector('.prevStep1').addEventListener('click', function(){
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2--active').classList.remove('remarked-widget-classic__step-2--active');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1--none').classList.remove('remarked-widget-classic__step-1--none');
    });

    remarkedWidgetClassic.querySelector('.prevStep0').addEventListener('click', function(){
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-0').style.display = "block";
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.remove('remarked-widget-classic__step-1--active');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
        remarkedWidgetClassic.querySelector('.remarked-widget__title').textContent = "Выберите заведение";
    });

    let remarkedUserInput = remarkedWidgetClassic.querySelector('#remarkedUserInput');
    let remarkedPhoneInput = remarkedWidgetClassic.querySelector('#remarkedPhoneInput');
    let remarkedEmailInput = remarkedWidgetClassic.querySelector('#remarkedEmailInput');
    let remarkedCod = remarkedWidgetClassic.querySelector('.remarked-cod-phone-input');
    

    let remarkedUserInputVal = false;
    let remarkedPhoneInputVal = false;
    let remarkedEmailInputVal = false;
    let remarkedCodInputVal = false;

    if (options.smsCode == false) {
        remarkedCodInputVal = true;
    } else {
        remarkedEmailInputVal = false;
    }

    remarkedCod.addEventListener('input', function(){
        this.value = this.value.replace(/[^\d.]/g, '');

        if (!this.value == "" && this.value.length == 6) {
            remarkedCodInputVal = true;
        } else {
            remarkedCodInputVal = false;
        }
        //console.log(remarkedCodInputVal)
        //console.log(remarkedCodInputVal)
    });

    if (options.email == false) {
        remarkedEmailInputVal = true;
        remarkedWidgetClassic.querySelector('#remarkedEmailInput').style.display = "none";
    } else {
        remarkedEmailInputVal = false;
    }

    if (options.date == false) {
        remarkedWidgetClassic.querySelector('#start').parentElement.style.display = "none";
    }

    if (options.qty == false) {
        remarkedWidgetClassic.querySelector('.remarked-quantity').parentElement.style.display = "none";
    }

    if (options.time == false) {
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3 .remarked-widget-title').style.display = "none";
        if (remarkedWidgetClassic.querySelector('.remarked-widget__times')) {
            remarkedWidgetClassic.querySelector('.remarked-widget__times').style.display = "none";
        }
    }
    
    if (options.text == false) {
        remarkedWidgetClassic.querySelector('.remarked-widget__comment').style.display = "none";
    }

    let remarkedUserInputText;
    let remarkedPhoneInputText;
    let remarkedEmailInputText;

    let nextStep2 = remarkedWidgetClassic.querySelectorAll('.nextStep2');
    if(options.date == false && options.qty == false && options.time == false && options.text == false) {
        nextStep2.textContent = "Забронировать";
    }
    for (var i = nextStep2.length - 1; i >= 0; i--) {
        nextStep2[i].addEventListener('click', function(){
            if(remarkedUserInputVal && remarkedPhoneInputVal && remarkedEmailInputVal) {
                if (options.smsCode) {
                    sendCodRemarked();
                } else {
                    checkInputs();
                }
            } else {
                if (remarkedUserInput.value == '') {
                    remarkedUserInput.style.border = "2px solid " + options.color_red;
                } else {
                    remarkedUserInput.style.border = "2px solid #1aaf33";
                }
                if (remarkedPhoneInput.value !== '' && remarkedPhoneInput.value.length == 15) {
                    remarkedPhoneInput.style.border = "2px solid #1aaf33";
                } else {
                    remarkedPhoneInput.style.border = "2px solid" + options.color_red;
                }
                if (remarkedEmailInput.value == '') {
                    remarkedEmailInput.style.border = "2px solid" + options.color_red;
                } else {
                    remarkedEmailInput.style.border = "2px solid #1aaf33";
                }
            }
            
        });
    }

    function clearRemarkedReserve() {
        remarkedWidgetClassic.classList.remove('remarked-widget-active');
        remarkedWidgetClassic.classList.add('remarked-widget-none');
        remarkedWidgetClassic.querySelector('.success-reserve-remarked').remove();
        remarkedWidgetClassic.querySelector('.remarked-widget__times').remove();
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-0').style.display = "block";
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').removeAttribute('style');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').classList.remove('remarked-widget-classic__step-3--active');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.remove('remarked-widget-classic__step-1--active');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').removeAttribute('style');
        remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').removeAttribute('style');
        remarkedUserInput.value = "";
        remarkedUserInputText = "";
        remarkedPhoneInput.value = "";
        remarkedPhoneInputText = "";
        remarkedEmailInput.value = "";
        remarkedEmailInputText = "";
        remarkedUserInputVal = false;
        remarkedPhoneInputVal = false;
        remarkedEmailInputVal = false;
        remarkedWidgetClassic.querySelector('.remarked-quantity input').value = 1;
        remarkedWidgetClassic.querySelector("#start").value = remarkedWidgetClassic.querySelector('#start option').value;
        remarkedUserInput.removeAttribute('style');
        remarkedPhoneInput.removeAttribute('style');
        remarkedEmailInput.removeAttribute('style');
        remarkedWidgetClassic.querySelector('.remarked-cod-phone').style.display="none";
    }
    
    function sendCodRemarked() {
        if (options.smsCode) {
            let data = {
                 method: 'GetSMSCode',
                 token: remarkedToken,
                 phone: remarkedPhoneInputText.replace(/[^+\d]/g, ''),
                 request_id: new Date().getTime()
            };
            console.log(data);
            const remarkedXHRCod = new XMLHttpRequest();
            
            let dataJSON = JSON.stringify(data);


            remarkedXHRCod.open('POST', remarkedReqUrl);

            remarkedXHRCod.responseType = 'json';
            remarkedXHRCod.setRequestHeader('Content-Type', 'application/json');

            remarkedXHRCod.onload = function(){ 
                if (remarkedXHRCod.response.status == "error") {
                    remarkedPhoneInput.style.border = "2px solid" + options.color_red;
                    remarkedPhoneInputVal == false;
                    // remarkedPhoneInput.addEventListener('input', function(){}
                } else {
                    checkInputs();
                }
                console.log(remarkedXHRCod.response)
            }
            remarkedXHRCod.send(dataJSON);
        }
    }

    function validateCodRemarked() {
        let data = {
            method: "ValidateSMSCode",
            phone: remarkedPhoneInputText.replace(/[^+\d]/g, ''),
            confirm_code: remarkedWidgetClassic.querySelector('.remarked-cod-phone-input').value,
            token: remarkedToken,
            request_id: new Date().getTime()
        }
        console.log(data)
        const remarkedXHRRoom = new XMLHttpRequest();
        
        let remarkedBodyRoomsJSON = JSON.stringify(data);


        remarkedXHRRoom.open('POST', remarkedReqUrl);

        remarkedXHRRoom.responseType = 'json';
        remarkedXHRRoom.setRequestHeader('Content-Type', 'application/json');
        remarkedXHRRoom.onload = function(){
            if(remarkedXHRRoom.response.status == "success") {
                if(options.date == false && options.qty == false && options.time == false && options.text == false) {
                    sendReserveRemarked();
                } else if (options.date == false && options.qty == false && options.time == false && options.text == false) {
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').classList.add('remarked-widget-classic__step-3--active');
                } else {
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
                }
            } else {
                remarkedCod.style.border = "1px solid red";
            }
            //alert(JSON.stringify(remarkedXHRRoom.response));
        }
        remarkedXHRRoom.send(remarkedBodyRoomsJSON);
    }

    function sendReserveRemarked() {
        let remarkedBodyRooms = {
            method: 'CreateReserve',
            token: remarkedToken,
            reserve: {
                name: remarkedUserInputText,
                phone: remarkedPhoneInputText.replace(/[^+\d]/g, ''),
                email: "",
                date: "",
                time: "",
                guests_count: "" 
            },
            request_id: new Date().getTime()
        };
        if (options.email == true) {
            remarkedBodyRooms.reserve.email = remarkedEmailInputText;
        } else {
            remarkedBodyRooms.reserve.email = "";
        }
        if (options.text == true) {
            remarkedBodyRooms.reserve.comment = remarkedWidgetClassic.querySelector('textarea[name="remarked-comment"]').value;
        } else {
            remarkedBodyRooms.reserve.comment = "";
        }
        if (options.date == true) {
            remarkedBodyRooms.reserve.date = remarkedWidgetClassic.querySelector("#start").value;
        } else {
            remarkedBodyRooms.reserve.date = "";
        }
        if (options.time == true) {
            remarkedBodyRooms.reserve.time = remarkedWidgetClassic.querySelector('.remarked-widget__time--active').textContent;
        } else {
            remarkedBodyRooms.reserve.time = "";
        }
        if (options.qty == true) {
            remarkedBodyRooms.reserve.guests_count = remarkedWidgetClassic.querySelector('.remarked-quantity input').value;
        } else {
            remarkedBodyRooms.reserve.guests_count = ""; 
        }
        if (options.smsCode == true) {
            remarkedBodyRooms.confirm_code = remarkedWidgetClassic.querySelector('.remarked-cod-phone-input').value;
        }
        console.log(remarkedBodyRooms);
        const remarkedXHRRoom = new XMLHttpRequest();
        
        let remarkedBodyRoomsJSON = JSON.stringify(remarkedBodyRooms);


        remarkedXHRRoom.open('POST', remarkedReqUrl);

        remarkedXHRRoom.responseType = 'json';
        remarkedXHRRoom.setRequestHeader('Content-Type', 'application/json');

        remarkedXHRRoom.onload = function(){
            if (options.smsCode) {
                if(remarkedXHRRoom.status == 200 && remarkedXHRRoom.response.status == "success") {
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').style.display="none";
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').style.display="none";
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').style.display="none";
                    let remarkedSucsess = document.createElement('div');
                    remarkedSucsess.classList.add('success-reserve-remarked')
                    let remarkedSucsessStroke = remarkedWidgetClassic.querySelector('.remarked-quantity input').value;
                    if (remarkedSucsessStroke == 1) {
                        remarkedSucsessStroke = remarkedSucsessStroke + ' человекa';
                    } else {
                        remarkedSucsessStroke = remarkedSucsessStroke + ' человек';
                    }
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
                                Вы забронировали столик, будем вас ждать! <br>
                                ${remarkedWidgetClassic.querySelector("#start").value}, ${remarkedWidgetClassic.querySelector('.remarked-widget__time--active').textContent}, столик на ${remarkedSucsessStroke}
                            </div>
                            <div class="remarked-success-button">
                                <button id="remarkedCloseModal">Завершить</button>
                            </div>
                        </div>
                    `;
                    remarkedWidgetClassic.querySelector('.remarked-widget-classic__body').append(remarkedSucsess);
                    let remarkedCloseModal = remarkedWidgetClassic.querySelector('#remarkedCloseModal');
                    remarkedCloseModal.addEventListener('click', function(){
                        clearRemarkedReserve();
                    });
                } else {
                    if(!alert('Заполните анкету заново с правильными параметрами')){window.location.reload();}
                }
                //console.log(remarkedXHRRoom.response);
            } else {
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').style.display="none";
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').style.display="none";
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').style.display="none";
                let remarkedSucsess = document.createElement('div');
                remarkedSucsess.classList.add('success-reserve-remarked')
                let remarkedSucsessStroke = remarkedWidgetClassic.querySelector('.remarked-quantity input').value;
                if (remarkedSucsessStroke == 1) {
                    remarkedSucsessStroke = remarkedSucsessStroke + ' человекa';
                } else {
                    remarkedSucsessStroke = remarkedSucsessStroke + ' человек';
                }
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
                            Вы забронировали столик, будем вас ждать! <br>
                            ${remarkedWidgetClassic.querySelector("#start").value}, ${remarkedWidgetClassic.querySelector('.remarked-widget__time--active').textContent}, столик на ${remarkedSucsessStroke}
                        </div>
                        <div class="remarked-success-button">
                            <button id="remarkedCloseModal">Завершить</button>
                        </div>
                    </div>
                `;
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__body').append(remarkedSucsess);
                let remarkedCloseModal = remarkedWidgetClassic.querySelector('#remarkedCloseModal');
                remarkedCloseModal.addEventListener('click', function(){
                    clearRemarkedReserve();
                });
            }
        }

        remarkedXHRRoom.send(remarkedBodyRoomsJSON);
    }
    
    function checkInputs() {

        if (options.smsCode == true) {
            
            remarkedWidgetClassic.querySelector('.nextStep2').style.display = "none";
            remarkedWidgetClassic.querySelector('.remarked-cod-phone').style.display = "block";
            remarkedWidgetClassic.querySelector('.remarked-cod-phone .nextCode').addEventListener('click', function(){
                if (remarkedCodInputVal) {
                    validateCodRemarked();
                } else {
                    remarkedCod.style.border = "1px solid red"
                }
            });

        } else {
            if(options.date == false && options.qty == false && options.time == false && options.text == false) {
                sendReserveRemarked();
            } else if(options.date == false && options.qty == false) {
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').classList.add('remarked-widget-classic__step-3--active');
            } else {
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-1').classList.add('remarked-widget-classic__step-1--none');
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--active');
            }
        }   
    }

    remarkedUserInput.addEventListener('input', function(){
        if (remarkedUserInput.value !== '') {
            remarkedUserInputVal = true;
            remarkedUserInputText = remarkedUserInput.value;
        } else {
            remarkedUserInputVal = false;
        }
    });

    remarkedPhoneInput.addEventListener('input', function(){
        if (remarkedPhoneInput.value !== '' && remarkedPhoneInput.value.length == 15) {
            remarkedPhoneInputVal = true;
            remarkedPhoneInputText = remarkedPhoneInput.value;
        } else {
            remarkedPhoneInputVal = false;
        }
    });

    remarkedPhoneInput.addEventListener('change', function(){
        if (remarkedPhoneInput.value !== '' && remarkedPhoneInput.value.length == 15) {
            
        }
    });

    remarkedEmailInput.addEventListener('input', function(){
        if (remarkedEmailInput.value !== '') {
            remarkedEmailInputVal = true;
            remarkedEmailInputText = remarkedEmailInput.value;
        } else {
            remarkedEmailInputVal = false;
        }
    });

    let remarkedSend = remarkedWidgetClassic.querySelectorAll('.remarkedSend');
    for (var i = remarkedSend.length - 1; i >= 0; i--) {
        remarkedSend[i].addEventListener('click', function(){
            sendReserveRemarked();
        });
    }

    let nextStep3 = remarkedWidgetClassic.querySelectorAll('.nextStep3');

    if (options.text == false && options.time == false) {
        nextStep3.textContent = "Забронировать";
    }
    for (var i = nextStep3.length - 1; i >= 0; i--) {
        nextStep3[i].addEventListener('click', function(){
        if (options.text == false && options.time == false) {
            sendReserveRemarked();
        } else {
            let remarkedWidgetTimes = document.createElement('div');
            remarkedWidgetTimes.classList.add('remarked-widget__times');
            let remarkedTimeClick;
            let remarkedGetDays = {
                method: 'GetTimes',
                token: remarkedToken,
                request_id: new Date().getTime(),
                reserve_date: remarkedWidgetClassic.querySelector("#start").value,
                guests_count: remarkedWidgetClassic.querySelector('.remarked-quantity input').value
            };
            
            
            const remarkedXHRDays = new XMLHttpRequest();
                    
            let remarkedGetDaysJSON = JSON.stringify(remarkedGetDays);


            remarkedXHRDays.open('POST', remarkedReqUrl);

            remarkedXHRDays.responseType = 'json';
            remarkedXHRDays.setRequestHeader('Content-Type', 'application/json');

            remarkedXHRDays.onload = function(){
                remarkedArrDays = remarkedXHRDays.response;
                remarkedArrDays = remarkedArrDays.times;
                for (let i = 0; i < remarkedArrDays.length; i++) {
                    if (window.innerWidth > 450) {
                        if (remarkedArrDays[i].is_free === true) {
                            remarkedWidgetTimes.innerHTML += `<div class="remarked-widget__time remarked-widget__time-work">${ remarkedArrDays[i].time }</div>`
                        } else {
                            remarkedWidgetTimes.innerHTML += `<div class="remarked-widget__time remarked-widget__time--disabled">${ remarkedArrDays[i].time }</div>`
                        }
                    } else {
                        if (remarkedArrDays[i].is_free === true) {
                            remarkedWidgetTimes.innerHTML += `<div class="remarked-widget__time remarked-widget__time-work">${ remarkedArrDays[i].time }</div>`
                        }
                    }
                }
                console.log(remarkedXHRDays.response);
                remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3 .remarked-widget-title').after(remarkedWidgetTimes);
                remarkedTimeClick = remarkedWidgetClassic.querySelectorAll('.remarked-widget__time-work');
                for (let i = 0; i < remarkedTimeClick.length; i++) {
                    remarkedTimeClick[i].addEventListener('click', function(){
                        if (remarkedWidgetClassic.querySelector('.remarked-widget__time--active')){
                            remarkedWidgetClassic.querySelector('.remarked-widget__time--active').classList.remove('remarked-widget__time--active');
                        }
                        this.classList.add('remarked-widget__time--active');
                    });
                }
            }

            remarkedXHRDays.send(remarkedGetDaysJSON);

            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').classList.add('remarked-widget-classic__step-2--none');
            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-2').classList.remove('remarked-widget-classic__step-2--active');
            remarkedWidgetClassic.querySelector('.remarked-widget-classic__step-3').classList.add('remarked-widget-classic__step-3--active');
            
            
        }
    });
    }
    

}
