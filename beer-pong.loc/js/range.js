// 'use strict';

// /* 
// * список дата атрибутов
// * data-width: задает шиину range в px
// * data-type: тип: duble - двойной, single - одинарный
// * data-units: отображение единиц измерения
// * data-value: применяется к max и к min, 
// * задает максимаьное и минимальное значение диапазона соотетственно
// */

// // получаем элементы min, max, fill и самого блока range
// const min = document.querySelector('.min-range-item');
// const max = document.querySelector('.max-range-item');
// const rangeBlock = document.querySelector('.range');
// let fill = document.querySelector('.range-fill');
// const infoBox = document.querySelector('.info');

// // блоки для вывода текущих параметров сортировки по цене (min - max)
// let minInfo = document.querySelector('.min-price');
// let maxInfo = document.querySelector('.max-price');

// // получаем настройки из data аттрибутов
// const dataWidth = +rangeBlock.dataset.width;
// const dataType = rangeBlock.dataset.type;
// const dataUnits = rangeBlock.dataset.units;
// const dataMinVal = +min.dataset.value;
// const dataMaxVal = +max.dataset.value;

// // получаем начальную точку блока range
// const startX = rangeBlock.getBoundingClientRect().x;

// // если 2 ползука берём их ширину для расчетов, чтоб не наезжали друг на друга
// let shiftMax = max.clientWidth;
// let shiftMin = min.clientWidth;

// // проверяем настрйки типа, если одинарный - убираем минимальный ползунок
// if (dataType === 'single') {
//   min.style.display = 'none';
//   document.querySelector('.min-box').style.display = 'none';
//   shiftMin = 0;
// }
// if (dataType === 'duble') {
//   min.style.display = 'block';
//   document.querySelector('.min-box').style.display = 'block';
// }

// // параметры ползунков
// let minValue = startX;
// let maxValue = startX + dataWidth - shiftMax;

// // задаем стили их дата атрибутов
// rangeBlock.style.width = dataWidth + 'px';
// infoBox.style.width = dataWidth + 'px';
// minInfo.insertAdjacentHTML('beforebegin', dataUnits);
// minInfo.insertAdjacentHTML('afterbegin', dataMinVal);
// maxInfo.insertAdjacentHTML('beforebegin', dataUnits);
// maxInfo.insertAdjacentHTML('afterbegin', dataMaxVal);

// // задаем инлайново стили, чтобы потом былм данные
// min.style.left = 0 + 'px';
// max.style.left = dataWidth - shiftMax + 'px';

// /**
//  * запускаем функцию при нажатии кнопки мыши
//  * @param event {Event} событие
//  */
// const check = (event) => {

//     // чтобы не терять таргет - отслеживаем тот ползунок, на котором было событие mousedown
//     let targetMain = event.target;

//     // корректные значения допустимые для перемещения ползунка, используются дальше
//     let currentMaxValue, currentMinValue;

//     *
//      * отслеживаем перемещение мыши и вычисляем координаты ползунка)
//      * @param event {Event} событие
     
//     const move = (event) => {

//         // у touch события массив эвентов, сводим к одной переменой этим условием
//         let e;
//         (event.type === 'touchmove') ? e = event.touches[0] : e = event;
        
//         // если таргет максимальное значение
//         if (targetMain === max) {
//             currentMaxValue = maxValue;
//             currentMinValue = parseInt(min.style.left) + shiftMin + startX;
//         }

//         // если таргет минимальное значение
//         if (targetMain === min) {
//             currentMinValue = minValue;
//             currentMaxValue = parseInt(max.style.left) - shiftMax + startX;
//         }

//         // меняем положение активного ползунка от края и до другого ползунка
//         if (e.clientX - (shiftMin / 2) > currentMinValue && e.clientX - (shiftMax / 2) < currentMaxValue) {
//             targetMain.style.left = e.clientX - startX - (shiftMax / 2) + 'px';
//         } else if (e.clientX < currentMinValue && targetMain === min) {
//             targetMain.style.left = 0 + 'px';
//         } else if (e.clientX > currentMaxValue && targetMain === max) {
//             targetMain.style.left = dataWidth - shiftMax + 'px';
//         } else if (e.clientX < currentMinValue && targetMain === max && shiftMin === 0) {
//           targetMain.style.left = 0 + 'px';
//           }

//         // изменяем зарисовку между ползунками
//         fill.style.left = min.style.left;
//         fill.style.width = parseInt(max.style.left) - parseInt(min.style.left) + shiftMax + 'px';

//         // выводим информацию о выбранном диапазоне цен
//         let targetPrice;
//         (targetMain === max) ? targetPrice = maxInfo : targetPrice = minInfo;
//         targetPrice.textContent = Math.floor(parseInt(targetMain.style.left) * (dataMaxVal - dataMinVal ) / (dataWidth - shiftMax) + dataMinVal + '');
//     }

//     // вешаем слушатель на движение мыши по всему документу
//     document.addEventListener('mousemove', move);
//     document.addEventListener('touchmove', move);

//     /**
//      * если отпустили кнопку - удаляем слушатели на перемещение мыши
//      */
//     let mouseUpFn = () => {
//         document.removeEventListener('mousemove', move);
//         document.removeEventListener('touchmove', move);
//     }

//     // ждем отпускания лкм чтобы убить слушатель движения мыши
//     document.addEventListener('mouseup', mouseUpFn);
//     document.addEventListener('touchend', mouseUpFn);
// }

// rangeBlock.addEventListener('mousedown', check);
// rangeBlock.addEventListener('touchstart', check);
