class Tabs {
  constructor(element) {
    this.tabs = element;
    this.toggles = this.tabs.querySelectorAll('.tabs__toggle');
    this.panels = this.tabs.querySelectorAll('.tabs__tab-panel')
  }
  init() {
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        this.toggles.forEach(toggle => {
          toggle.classList.remove('active');
        })
        this.panels.forEach(panel => {
          panel.classList.remove('active');
        })
        e.target.classList.add('active');
        this.tabs.querySelector(`.tabs__tab-panel[data-tab='${e.target.dataset.tab}']`).classList.add('active')
      })
    })
  }
}

document.querySelectorAll('.tabs').forEach(tab =>{
  const tabs = new Tabs(tab);
  tabs.init();
})


if (document.querySelector('.single__images img')) {
  var singleImg = document.querySelectorAll('.single__images img');
  for (var i = 0; i < singleImg.length; i++) {
    singleImg[i].addEventListener('click', function(){
      document.querySelector('.modal-carusel').classList.add('modal-carusel--active');
    });
  }

  document.querySelector('.single__images-item-overlay').addEventListener('click', function(){
    document.querySelector('.modal-carusel').classList.add('modal-carusel--active');
  });

  document.querySelector('.modal-carusel__close').addEventListener('click', function(){
    document.querySelector('.modal-carusel').classList.remove('modal-carusel--active');
  });
}

if (document.getElementsByClassName("accordion__title")) {
  var acc = document.getElementsByClassName("accordion__title");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.parentElement.classList.toggle("accordion__item--active");
    });
  }
}

if (document.querySelector('.single-paintwork__item-img')) {
  var spii = document.querySelectorAll('.single-paintwork__item-img');

  for (var i = 0; i < spii.length; i++) {
    spii[i].addEventListener('click', function(){
      document.querySelector('.modal-carusel').classList.add('modal-carusel--active');
    });
  }
}

if (document.querySelector('.form-step__search-input')) {
  for (var i = 0; i < document.querySelectorAll('.form-step__search-input').length; i++) {
    document.querySelectorAll('.form-step__search-input')[i].addEventListener('focusin', function(){
      console.log(this.parentElement);
      this.parentElement.querySelector('.form-step__search-result').classList.add('form-step__search-result--active');
    });
    document.querySelectorAll('.form-step__search-input')[i].addEventListener('focusout', function(){
      this.parentElement.querySelector('.form-step__search-result').classList.remove('form-step__search-result--active');
    });
  }
}

if (document.querySelector('.form-step__more')) {
  for (var i = 0; i < document.querySelectorAll('.form-step__more').length; i++) {
    document.querySelectorAll('.form-step__more')[i].addEventListener('click', function(){
    this.parentElement.parentElement.classList.add('form-step__inner--active');
    this.parentElement.style.display = "none";
  });
  }
}

if (document.querySelector('.toggle-button__item')) {
  var tglBtnItem = document.querySelectorAll('.toggle-button__item');
  for (var i = 0; i < tglBtnItem.length; i++) {
    tglBtnItem[i].addEventListener('click', function(){
      if (this.parentElement.querySelector('.toggle-button__item--active')) {
        this.parentElement.querySelector('.toggle-button__item--active').classList.remove('toggle-button__item--active');
      }
      this.classList.add('toggle-button__item--active');
    });
  }

  var tgBtnsOne = false;
  var tgBtnsOneItem = document.querySelectorAll('.toggle-button-1 .toggle-button__item');
  for (var i = tgBtnsOneItem.length - 1; i >= 0; i--) {
    tgBtnsOneItem[i].addEventListener('click', function(){
      tgBtnsOne = true;
      if (tgBtnsOne1 === true & tgBtnsOne === true & tgBtnsOne2 === true & tgBtnsOne3 === true & tgBtnsOne4 === true) {
        document.querySelector('.form-step-3').style.display = "none";
        document.querySelector('.form-step-4').style.display = "block";
      }
    });
  }

  var tgBtnsOne1 = false;
  var tgBtnsOneItem1 = document.querySelectorAll('.toggle-button-2 .toggle-button__item');
  for (var i = tgBtnsOneItem1.length - 1; i >= 0; i--) {
    tgBtnsOneItem1[i].addEventListener('click', function(){
      tgBtnsOne1 = true;
      if (tgBtnsOne1 === true & tgBtnsOne === true & tgBtnsOne2 === true & tgBtnsOne3 === true & tgBtnsOne4 === true) {
        document.querySelector('.form-step-3').style.display = "none";
        document.querySelector('.form-step-4').style.display = "block";
      }
    });
  }

  var tgBtnsOne2 = false;
  var tgBtnsOneItem2 = document.querySelectorAll('.toggle-button-3 .toggle-button__item');
  for (var i = tgBtnsOneItem2.length - 1; i >= 0; i--) {
    tgBtnsOneItem2[i].addEventListener('click', function(){
      tgBtnsOne2 = true;
      if (tgBtnsOne1 === true & tgBtnsOne === true & tgBtnsOne2 === true & tgBtnsOne3 === true & tgBtnsOne4 === true) {
        document.querySelector('.form-step-3').style.display = "none";
        document.querySelector('.form-step-4').style.display = "block";
      }
    });
  }

  var tgBtnsOne3 = false;
  var tgBtnsOneItem3 = document.querySelectorAll('.toggle-button-4 .toggle-button__item');
  for (var i = tgBtnsOneItem3.length - 1; i >= 0; i--) {
    tgBtnsOneItem3[i].addEventListener('click', function(){
      tgBtnsOne3 = true;
      if (tgBtnsOne1 === true & tgBtnsOne === true & tgBtnsOne2 === true & tgBtnsOne3 === true & tgBtnsOne4 === true) {
        document.querySelector('.form-step-3').style.display = "none";
        document.querySelector('.form-step-4').style.display = "block";
      }
    });
  }

  var tgBtnsOne4 = false;
  var tgBtnsOneItem4 = document.querySelectorAll('.toggle-button-5 .toggle-button__item');
  for (var i = tgBtnsOneItem4.length - 1; i >= 0; i--) {
    tgBtnsOneItem4[i].addEventListener('click', function(){
      tgBtnsOne4 = true;
      if (tgBtnsOne1 === true & tgBtnsOne === true & tgBtnsOne2 === true & tgBtnsOne3 === true & tgBtnsOne4 === true) {
        document.querySelector('.form-step-3').style.display = "none";
        document.querySelector('.form-step-4').style.display = "block";
      }
    });
  }
}

if (document.querySelector('.form-step-1 .form-step__column')) {
  var stpAutoBrand = document.querySelectorAll('.form-step-1 .form-step__column');

  for (var i = 0; i < stpAutoBrand.length; i++) {
    stpAutoBrand[i].addEventListener('click', function(){
      document.querySelector('.form-step-1').style.display = "none";
      document.querySelector('.form-step-2').style.display = "block";
    });
  }
}

if (document.querySelector('.form-step-2 .form-step__column')) {
  var stpAutoBrand1 = document.querySelectorAll('.form-step-2 .form-step__column');

  for (var i = 0; i < stpAutoBrand1.length; i++) {
    stpAutoBrand1[i].addEventListener('click', function(){
      document.querySelector('.form-step-2').style.display = "none";
      document.querySelector('.form-step-3').style.display = "block";
    });
  }
}

if(document.querySelector('.modal-carusel__thumbs')){
  var sliderHeaderPosition = 0;
  var sliderHeaderWrap = document.querySelector('.modal-carusel__thumbs');
  var sliderHeaderLeft = document.querySelector('.modal-carusel__btn-left');
  var sliderHeaderRight = document.querySelector('.modal-carusel__btn-right');
  var sliderHeaderItem = document.querySelectorAll('.modal-carusel__thumb').length;


  var sliderHeaderWidth = sliderHeaderItem * -172 + 344;
  sliderHeaderRight.addEventListener('click', function(){
    sliderHeaderPosition = sliderHeaderPosition - 172;
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
      sliderHeaderPosition = sliderHeaderPosition + 172;
      sliderHeaderWrap.style.transform = "translateX("+sliderHeaderPosition+"px)";
    }
  });

  var thumbImg = document.querySelectorAll('.modal-carusel__thumb');

  for (var i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', function(){
      // this.querySelector('img').getAttribute('src');
      // console.log(this.querySelector('img').src);
      document.querySelector('.modal-carusel__top img').src = this.querySelector('img').getAttribute('src');
    });
  }
}

