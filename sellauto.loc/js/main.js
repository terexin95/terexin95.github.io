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