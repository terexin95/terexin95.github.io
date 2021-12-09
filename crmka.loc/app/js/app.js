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
})
