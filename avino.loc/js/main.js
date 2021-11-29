const observer = lozad();
observer.observe();

document.addEventListener("DOMContentLoaded", function() {
  
  let trSlAll = document.querySelectorAll('.ter-slider-block__wrap .ter-slider-block__wrap--img');
  let trSlWrap = document.querySelector('.ter-slider-block__wrap');
  let trWSl = trSlAll[0].offsetWidth + 45;
  document.addEventListener('resize', function() {
    let trWSl = trSlAll[0].offsetWidth + 45;
  })
  let trLeft = document.querySelector('.ter-slider-block__left');
  let trRight = document.querySelector('.ter-slider-block__right');
  let trCounter = 0;
  let trPos = 0;
  let trPosThumb = 0;
  let trCloneImg = trSlWrap.cloneNode(true);
  let terSliderBlockNumMin = document.querySelector('.ter-slider-block__num-min');
  let terSliderBlockNumMax = document.querySelector('.ter-slider-block__num-max');
  terSliderBlockNumMax.textContent = trSlAll.length;
  terSliderBlockNumMin.textContent = trCounter + 1;

  trCloneImg.classList.remove('ter-slider-block__wrap');
  trCloneImg.classList.add('ter-slider-block__thumb');
  let trWThumbImg = 153;
  for (var i = 0; i < trCloneImg.querySelectorAll('img').length; i++) {
  	trCloneImg.querySelectorAll('img')[i].setAttribute('width', '134');
  	trCloneImg.querySelectorAll('img')[i].setAttribute('height', '100');
  	if (i == 0) {
			trCloneImg.querySelectorAll('img')[i].setAttribute('data-translate', "0px");
			trCloneImg.querySelectorAll('img')[i].setAttribute('data-translatethumb', "0px");
			trCloneImg.querySelectorAll('img')[i].classList.add('active');
  	} else {
  		trCloneImg.querySelectorAll('img')[i].setAttribute('data-translate', trWSl*i);
  		trCloneImg.querySelectorAll('img')[i].setAttribute('data-translatethumb', trWThumbImg*i);
  	}
  	trCloneImg.querySelectorAll('img')[i].setAttribute('data-indeximg', i);
  	trCloneImg.querySelectorAll('img')[i].addEventListener('click', function(){
  		if (this.getAttribute('data-translate') == '0px') {
				trSlWrap.style.transform = 'translateX(' + this.getAttribute('data-translate') +')'
				//trCloneImg.style.transform = 'translateX(' + this.getAttribute('data-translatethumb') +')'
  		} else {
  			trSlWrap.style.transform = 'translateX(-' + this.getAttribute('data-translate') +'px)'
  			//trCloneImg.style.transform = 'translateX(-' + this.getAttribute('data-translatethumb') +')'
  			trPos = -this.getAttribute('data-translate');
  			trCounter = this.getAttribute('data-indeximg');
        terSliderBlockNumMin.textContent = +trCounter + 1;
  		}
  		if(this.getAttribute('data-indeximg') % 7 == 0) {
  			
        
        if (document.querySelector('.ter-slider-block__thumb').style.transform.replace(/[^+\d]/g, '') == this.getAttribute('data-translatethumb')) {
          trCloneImg.style.transform = 'translateX(-' + -1000 +'px)'
          console.log(document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb'));
          if (document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb') == "0px") {
            trCloneImg.style.transform = 'translateX(0px)';
          } else {
            trCloneImg.style.transform = 'translateX(-' + document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb') +'px)'
          }
        } else {
          trCloneImg.style.transform = 'translateX(-' + this.getAttribute('data-translatethumb') +'px)'
        }

  		}
  		document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
  		this.classList.add('active');
  	});
  }

  trSlWrap.after(trCloneImg);
  trRight.addEventListener('click', function(){
  	if (trCounter % 7 == 0) {
  		trCloneImg.style.transform = 'translateX(-' + trCounter * 153 +'px)';
      terSliderBlockNumMin.textContent = trCounter + 1;
  	}
  	if (trPos == (trSlAll.length - 1)* -trWSl) {
  		trPos = 0;
  		trSlWrap.style.transform = 'translateX(' + trPos +'px)';
  		trCounter = 0;
      terSliderBlockNumMin.textContent = trCounter + 1;
  		trCloneImg.style.transform = 'translateX(0px)';
  		document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
  		trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
  	} else {
  		trPos = trPos - trWSl;
	  	trSlWrap.style.transform = 'translateX(' + trPos +'px)';
	  	console.log(trPos);
	  	++trCounter;
      terSliderBlockNumMin.textContent = trCounter + 1;
	  	document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
	  	trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
	  	if (trCounter % 7 == 0) {
	  		trCloneImg.style.transform = 'translateX(-' + trCounter * 153 +'px)';
	  	}
  	}
  });
  trLeft.addEventListener('click', function(){
  	if (trCounter % 7 == 0) {
      terSliderBlockNumMin.textContent = trCounter + 1;
			trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
		}
  	if(trPos == 0) {
  		trPos = (trSlAll.length - 1)* -trWSl;
  		trSlWrap.style.transform = 'translateX(' + trPos +'px)';
  		trCounter = trSlAll.length - 1;
  		trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
  		document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
  		trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
      terSliderBlockNumMin.textContent = trCounter + 1;
  	} else {
  		--trCounter;
      terSliderBlockNumMin.textContent = trCounter + 1;
  		trPos = trPos + trWSl
  		trSlWrap.style.transform = 'translateX(' + trPos +'px)';
  		if (trCounter % 7 == 0) {
  			trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
        terSliderBlockNumMin.textContent = trCounter + 1;
  		}
  		document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
  		trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
  	}
  });
});

if (document.querySelector('.ter-filter-block__decription-open')) {
  let terFilterBlockDecriptionOpen = document.querySelectorAll('.ter-filter-block__decription-open');
  for (var i = 0; i < terFilterBlockDecriptionOpen.length; i++) {
    terFilterBlockDecriptionOpen[i].addEventListener('click', function(){
      this.parentElement.classList.toggle('ter-filter-block__decription--active');
      if (this.textContent == "Показать полностью") {
        this.textContent = "Скрыть";
      } else {
        this.textContent ="Показать полностью";
      }
    });
  }
}

if (document.querySelector('.ter-products-block__text-open')) {
  let terProductsBlockTextOpen = document.querySelectorAll('.ter-products-block__text-open');
  for (var i = 0; i < terProductsBlockTextOpen.length; i++) {
    terProductsBlockTextOpen[i].addEventListener('click', function(){
      if (this.textContent == "Показать все характеристики") {
        this.textContent = "Скрыть все характеристики";
      } else {
        this.textContent ="Показать все характеристики";
      }
      this.parentElement.classList.toggle('ter-products-block__text--active');
    });
  }
}

if (document.querySelector('.ter-filter-block__button')) {
  let terFilterBlockButton = document.querySelectorAll('.ter-filter-block__button');
  for (var i = 0; i < terFilterBlockButton.length; i++) {
    terFilterBlockButton[i].addEventListener('click', function(){
      let parent = this.parentElement.parentElement.parentElement.parentElement;
      console.log(parent)
      let attrClass = this.getAttribute('data-category-ter');
      if (!this.classList.contains('ter-filter-block__button--none')) {
        for (var i = 0; i < parent.querySelectorAll('.ter-products-block').length; i++) {
          parent.querySelectorAll('.ter-products-block')[i].style.display = "none";
        }
        for (var i = 0; i < parent.querySelectorAll('.ter-filter-block__decription').length; i++) {
          parent.querySelectorAll('.ter-filter-block__decription')[i].style.display = "none";
        }
        for (var i = 0; i < parent.querySelectorAll('.' + attrClass + '').length; i++) {
          parent.querySelectorAll('.' + attrClass + '')[i].style.display = "flex";
        }

        parent.querySelector('.ter-filter-block__button--active').classList.remove('ter-filter-block__button--active');
        this.classList.add('ter-filter-block__button--active');
      }
    });
  }
}

var wrap = function (toWrap, divclass) {
    wrapper = document.createElement('div');
    wrapper.classList.add(divclass)
    toWrap.parentNode.prepend(wrapper);
    return wrapper.appendChild(toWrap);
};

for (var i = 0; i < document.querySelectorAll('.ter-filter-block__buttons--wrap').length; i++) {
  wrap(document.querySelectorAll('.ter-filter-block__buttons--wrap')[i], 'ter-filter-block__buttons--height');
}

document.querySelectorAll('.ter-filter-block__buttons--height')[0].style.height = '70px';
document.querySelectorAll('.ter-filter-block__buttons--height')[2].style.height = '70px';
document.querySelectorAll('.ter-filter-block__buttons--height')[1].style.height = '210px';


if (document.querySelector('.ter-filter-block__header-item')) {
  let terFilterBlockHeaderItem = document.querySelectorAll('.ter-filter-block__header .ter-filter-block__header-item');
  for (var i = 0; i < terFilterBlockHeaderItem.length; i++) {
    terFilterBlockHeaderItem[i].setAttribute('data-category-js', i);
    terFilterBlockHeaderItem[i].addEventListener('click', function() {
      let parent = this.parentElement.parentElement;
      for (var i = 0; i < parent.querySelectorAll('.ter-filter-block__thumb').length; i++) {
        parent.querySelectorAll('.ter-filter-block__thumb')[i].style.display = "none"
      }
      parent.querySelectorAll('.ter-filter-block__thumb')[this.getAttribute('data-category-js')].style.display = "block";
      parent.querySelector('.ter-filter-block__header-item--active').classList.remove('ter-filter-block__header-item--active');
      this.classList.add('ter-filter-block__header-item--active');
    })
  }
}

if(document.querySelector('.ter-filter-block__body')) {
  window.addEventListener('scroll', function(){
    if (this.pageYOffset > document.querySelector('.ter-filter-block__body').offsetTop+100 && this.pageYOffset < document.querySelector('.ter-slider-block').offsetTop+200) {
      for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons').length; i++) {
        document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons--wrap')[i].style.top = "0";
      }
      setTimeout(function(){
        for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons').length; i++) {
          document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons--wrap')[i].classList.add('ter-filter-block__buttons--active');
        }
      }, 100)
    } else {
      if (document.querySelector('.ter-filter-block__buttons--active')) {
        for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons').length; i++) {
          document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons--wrap')[i].style.top = "-500px";
        }
        setTimeout(function(){
          for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons').length; i++) {
            document.querySelectorAll('body > .ter-filter-block .ter-filter-block__buttons--wrap')[i].classList.remove('ter-filter-block__buttons--active');
          }
        }, 100)
      }
    }
  });
}



if (document.querySelector('ter-filter-block__button--none')) {
  const anchors = document.querySelectorAll('.ter-filter-block__button--none')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

if (document.querySelector('.nmo-ter .mc-left')) {
  let products = document.querySelector('.ter-filter-block');
  let cloneProducts = products.cloneNode(true);
  cloneProductsDescrip = cloneProducts.querySelectorAll('.ter-filter-block__decription')
  for (var i = 0; i < cloneProductsDescrip.length; i++) {
    cloneProductsDescrip[i].remove();
  }
  let wrapProducts = document.querySelector('.nmo-ter .mc-left');
  wrapProducts.append(cloneProducts);
}