// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

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
	if (document.querySelector('.tabs')) {
		document.querySelectorAll('.tabs').forEach(tab =>{
		  const tabs = new Tabs(tab);
		  tabs.init();
		})
	}

	if (document.querySelector('.fensys__mobile-option')) {
		document.querySelector('.fensys__mobile-option').addEventListener('click', function(){
			document.querySelector('.fensys__header .tabs__button-group').classList.toggle('tabs__button-group--block')
		});
		let button = document.querySelectorAll('.fensys__header .tabs__button-group .tabs__toggle');
		for (var i = 0; i < button.length; i++) {
			button[i].addEventListener('click', function(){
			  let text = this.getAttribute('data-text');
			  document.querySelector('.fensys__mobile-option span').textContent = text;
			  document.querySelector('.fensys__header .tabs__button-group').classList.toggle('tabs__button-group--block');
			});
		}
	}
	if (document.querySelector('.fensys__humburger')) {
		document.querySelector('.fensys__humburger').addEventListener('click', function(){
			document.querySelector('.fensys__sidebar').classList.toggle('fensys__sidebar--block');
		});
		document.querySelector('.fensys__sidebar-close').addEventListener('click', function(){
			document.querySelector('.fensys__sidebar').classList.remove('fensys__sidebar--block');
		});
	}
})
