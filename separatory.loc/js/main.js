const observer = lozad();
observer.observe();

document.addEventListener("DOMContentLoaded", function() {
  let terProductsBlockPay = document.querySelectorAll('.ter-products-block__pay')
  for (var i = 0; i < terProductsBlockPay.length; i++) {
    terProductsBlockPay[i].addEventListener('click', function(){
      document.querySelector('.nmo-ter').style.display = "block";
      document.querySelector('.modal-back').style.display = "block";
      document.querySelector('body').style.overflow = "hidden";
    })
  }
  document.querySelector('.ter-block-title__button').addEventListener('click', function(){
    document.querySelector('.nmo-ter').style.display = "block";
    document.querySelector('.modal-back').style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
  })
  document.querySelector('.nmo-ter .modal_close').addEventListener('click', function(){
      document.querySelector('.nmo-ter').style.display = "none";
      document.querySelector('.modal-back').style.display = "none";
      document.querySelector('body').style.overflow = "auto";
  });
  document.querySelector('.modal-back').addEventListener('click', function(){
      document.querySelector('.nmo-ter').style.display = "none";
      document.querySelector('.modal-back').style.display = "none";
      document.querySelector('body').style.overflow = "auto";
  });
  let trSlAll = document.querySelectorAll('.ter-slider-block__wrap .ter-slider-block__wrap--img');
  let trSlWrap = document.querySelector('.ter-slider-block__wrap');
  let trWSl = 875;
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

 // window.addEventListener('resize', function() {
  
 //    let trSlAll = document.querySelectorAll('.ter-slider-block__wrap .ter-slider-block__wrap--img');
 //    let trSlWrap = document.querySelector('.ter-slider-block__wrap');
 //    let trWSl = 875;
 //    // alert('resize ' + trWSl);
 //    let trLeft = document.querySelector('.ter-slider-block__left');
 //    let trRight = document.querySelector('.ter-slider-block__right');
 //    let trCounter = document.querySelector('.ter-slider-block__thumb img.active').getAttribute('data-indeximg');
 //    // let trPos = 0;
 //    // let trPosThumb = 0;
 //    // let trCloneImg = trSlWrap.cloneNode(true);
 //    let terSliderBlockNumMin = document.querySelector('.ter-slider-block__num-min');
 //    let terSliderBlockNumMax = document.querySelector('.ter-slider-block__num-max');
 //    terSliderBlockNumMax.textContent = trSlAll.length;
 //    terSliderBlockNumMin.textContent = trCounter + 1;

 //    // trCloneImg.classList.remove('ter-slider-block__wrap');
 //    // trCloneImg.classList.add('ter-slider-block__thumb');
 //    let trCloneImg = document.querySelector('.ter-slider-block__thumb');
 //    let trWThumbImg = 153;
 //    for (var i = 0; i < trCloneImg.querySelectorAll('img').length; i++) {
 //      trCloneImg.querySelectorAll('img')[i].setAttribute('width', '134');
 //      trCloneImg.querySelectorAll('img')[i].setAttribute('height', '100');
 //      if (i == 0) {
 //        trCloneImg.querySelectorAll('img')[i].setAttribute('data-translate', "0px");
 //        trCloneImg.querySelectorAll('img')[i].setAttribute('data-translatethumb', "0px");
 //        trCloneImg.querySelectorAll('img')[i].classList.add('active');
 //      } else {
 //        trCloneImg.querySelectorAll('img')[i].setAttribute('data-translate', trWSl*i);
 //        trCloneImg.querySelectorAll('img')[i].setAttribute('data-translatethumb', trWThumbImg*i);
 //      }
 //      trCloneImg.querySelectorAll('img')[i].setAttribute('data-indeximg', i);
 //      trCloneImg.querySelectorAll('img')[i].addEventListener('click', function(){
 //        if (this.getAttribute('data-translate') == '0px') {
 //          trSlWrap.style.transform = 'translateX(' + this.getAttribute('data-translate') +')'
 //          //trCloneImg.style.transform = 'translateX(' + this.getAttribute('data-translatethumb') +')'
 //        } else {
 //          trSlWrap.style.transform = 'translateX(-' + this.getAttribute('data-translate') +'px)'
 //          //trCloneImg.style.transform = 'translateX(-' + this.getAttribute('data-translatethumb') +')'
 //          trPos = -this.getAttribute('data-translate');
 //          trCounter = this.getAttribute('data-indeximg');
 //          terSliderBlockNumMin.textContent = +trCounter + 1;
 //        }
 //        if(this.getAttribute('data-indeximg') % 7 == 0) {
          
          
 //          if (document.querySelector('.ter-slider-block__thumb').style.transform.replace(/[^+\d]/g, '') == this.getAttribute('data-translatethumb')) {
 //            trCloneImg.style.transform = 'translateX(-' + -1000 +'px)'
 //            console.log(document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb'));
 //            if (document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb') == "0px") {
 //              trCloneImg.style.transform = 'translateX(0px)';
 //            } else {
 //              trCloneImg.style.transform = 'translateX(-' + document.querySelectorAll('.ter-slider-block__thumb img')[trCounter - 7].getAttribute('data-translatethumb') +'px)'
 //            }
 //          } else {
 //            trCloneImg.style.transform = 'translateX(-' + this.getAttribute('data-translatethumb') +'px)'
 //          }

 //        }
 //        document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
 //        this.classList.add('active');
 //      });
 //    }

 //    trSlWrap.after(trCloneImg);
 //    trRight.addEventListener('click', function(){
 //      if (trCounter % 7 == 0) {
 //        trCloneImg.style.transform = 'translateX(-' + trCounter * 153 +'px)';
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //      }
 //      if (trPos == (trSlAll.length - 1)* -trWSl) {
 //        trPos = 0;
 //        trSlWrap.style.transform = 'translateX(' + trPos +'px)';
 //        trCounter = 0;
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //        trCloneImg.style.transform = 'translateX(0px)';
 //        document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
 //        trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
 //      } else {
 //        trPos = trPos - trWSl;
 //        trSlWrap.style.transform = 'translateX(' + trPos +'px)';
 //        console.log(trPos);
 //        ++trCounter;
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //        document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
 //        trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
 //        if (trCounter % 7 == 0) {
 //          trCloneImg.style.transform = 'translateX(-' + trCounter * 153 +'px)';
 //        }
 //      }
 //    });
 //    trLeft.addEventListener('click', function(){
 //      if (trCounter % 7 == 0) {
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //        trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
 //      }
 //      if(trPos == 0) {
 //        trPos = (trSlAll.length - 1)* -trWSl;
 //        trSlWrap.style.transform = 'translateX(' + trPos +'px)';
 //        trCounter = trSlAll.length - 1;
 //        trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
 //        document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
 //        trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //      } else {
 //        --trCounter;
 //        terSliderBlockNumMin.textContent = trCounter + 1;
 //        trPos = trPos + trWSl
 //        trSlWrap.style.transform = 'translateX(' + trPos +'px)';
 //        if (trCounter % 7 == 0) {
 //          trCloneImg.style.transform = 'translateX(-' + (trCounter-7) * 153 +'px)';
 //          terSliderBlockNumMin.textContent = trCounter + 1;
 //        }
 //        document.querySelector('.ter-slider-block__thumb img.active').classList.remove('active');
 //        trCloneImg.querySelectorAll('img')[trCounter].classList.add('active');
 //      }
 //    });
 //  });

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
        console.log(this.closest('.ter-products-block').offsetTop)
      } else {
        this.textContent ="Показать все характеристики";
        window.scrollTo(0, this.closest('.ter-products-block').offsetTop - 300);
        console.log(this.closest('.ter-products-block').offsetTop)
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


if (document.querySelector('.ter-filter-block__header-item')) {
  let terFilterBlockHeaderItem = document.querySelectorAll('.ter-filter-block__header .ter-filter-block__header-item');
  for (var i = 0; i < terFilterBlockHeaderItem.length; i++) {
    terFilterBlockHeaderItem[i].setAttribute('data-category-js', i);
    terFilterBlockHeaderItem[i].addEventListener('click', function() {
      let parent = this.parentElement.parentElement.parentElement;
      for (var i = 0; i < parent.querySelectorAll('.ter-filter-block__thumb').length; i++) {
        parent.querySelectorAll('.ter-filter-block__thumb')[i].style.display = "none"
      }
      console.log(parent)
      parent.querySelectorAll('.ter-filter-block__thumb')[this.getAttribute('data-category-js')].style.display = "block";
      parent.querySelector('.ter-filter-block__header-item--active').classList.remove('ter-filter-block__header-item--active');
      this.classList.add('ter-filter-block__header-item--active');
    })
  }
}

if(document.querySelector('.ter-filter-block__body')) {
  window.addEventListener('scroll', function(){
    if (this.pageYOffset > document.querySelector('.ter-filter-block__body').offsetTop+100 && this.pageYOffset < document.querySelector('.ter-slider-block').offsetTop) {
      for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header').length; i++) {
        document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header')[i].style.top = "0";
      }
      setTimeout(function(){
        for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header').length; i++) {
          document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header')[i].classList.add('ter-filter-block__buttons--active');
        }
      }, 100)
    } else {
      if (document.querySelector('.ter-filter-block__buttons--active')) {
        for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header').length; i++) {
          document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header')[i].style.top = "-500px";
        }
        setTimeout(function(){
          for (var i = 0; i < document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header').length; i++) {
            document.querySelectorAll('body > .ter-filter-block .ter-filter-block__header')[i].classList.remove('ter-filter-block__buttons--active');
          }
        }, 100)
      }
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 7.5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 7.5,
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 45,
  slidesPerView: 1.3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".ter-button-next",
    prevEl: ".ter-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 45,
    }
  }
});


if (document.querySelector('.ter-filter-block--scroll')) {
  const anchors = document.querySelectorAll('.ter-filter-block--scroll')
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
  cloneProductsDescrip = cloneProducts.querySelectorAll('.ter-filter-block__decription');
  for (var i = 0; i < cloneProductsDescrip.length; i++) {
    cloneProductsDescrip[i].remove();
  }
  for (let i = 0; i < cloneProducts.querySelectorAll('.ter-filter-block--scroll').length; i++) {
    cloneProducts.querySelectorAll('.ter-filter-block--scroll')[i].addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.nmo-ter div.modal-order-form').scrollTop = 0;
    });
  }
  for (var i = 0; i < cloneProducts.querySelectorAll('.ter-filter-block__header-item').length; i++) {
    cloneProducts.querySelectorAll('.ter-filter-block__header-item')[i].addEventListener('click', function(){
      cloneProducts.querySelector('.ter-filter-block__header-item--active').classList.remove('ter-filter-block__header-item--active');
      this.classList.add('ter-filter-block__header-item--active');
      let attr = this.getAttribute('data-category-js');
      for (var i = 0; i < cloneProducts.querySelectorAll('.ter-filter-block__thumb').length; i++) {
        cloneProducts.querySelectorAll('.ter-filter-block__thumb')[i].style.display = "none";
      }
      cloneProducts.querySelectorAll('.ter-filter-block__thumb')[attr].style.display = "flex";
    });
  }
  cloneProductsPrice = cloneProducts.querySelectorAll('.ter-products-block__new');
  for (var i = 0; i < cloneProductsPrice.length; i++) {
    cloneProductsPrice[i].setAttribute('data-price-cart', cloneProductsPrice[i].textContent.replace(/\D+/g,""))
  }

  let cloneProductText = cloneProducts.querySelectorAll('.ter-products-block__text');
  let cloneProduct = cloneProducts.querySelectorAll('.ter-products-block');
  for (let i = 0; i < cloneProductText.length; i++) {
    let templateQty = document.createElement('div');
    templateQty.classList.add('ter-prod-r-bot');
    templateQty.innerHTML = `
      <div class="ter-prod-r-bot">
        <div class="ter-prod-add">
          <div class="ter-prod-minus">-</div>
          <input type="text" class="ter-prod-count" value="0" readonly="">
          <div class="ter-prod-plus">+</div>
        </div>
        <div class="ter-prod-check"></div>
      </div>
    `
    cloneProductText[i].append(templateQty);
    let titleProduct = cloneProductText[i].querySelector('h2');
    let templateTitle = document.createElement('div')
    templateTitle.classList.add('ter-products-block__title');
    templateTitle.append(titleProduct);
    cloneProductText[i].parentElement.prepend(templateTitle);
  }
  let cloneProductPlus = cloneProducts.querySelectorAll('.ter-prod-plus');
  let cloneProductMinus = cloneProducts.querySelectorAll('.ter-prod-minus');
  let cloneProductCheck = cloneProducts.querySelectorAll('.ter-prod-check');
  let sum = 0;
  let cart = {}
  for (var i = 0; i < cloneProductCheck.length; i++) {
    cloneProductCheck[i].setAttribute('data-sku', 'sku'+i);
    cloneProductCheck[i].addEventListener('click', function(){
      let parent = this.parentElement.parentElement.parentElement.parentElement;
      let price = parent.querySelector('.ter-products-block__new').getAttribute('data-price-cart');
      let text = parent.querySelector('.ter-prod-count');
      let textNum = text.value;
      let sku = this.getAttribute('data-sku');
      
      if (this.classList.contains('ter-prod-check--active')) {
        this.classList.remove('ter-prod-check--active');
        sum = +sum - (+price * textNum);
        textNum = 0;
        text.value = textNum;
        document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
        document.querySelector('input[name="products-total"]').value = sum;
        let obj = {
          name: parent.querySelector('.ter-products-block__title h2').textContent,
          qty: textNum
        }
        cart[''+sku+''] = obj;
        let cartArr = Object.entries(cart);
        let cartText = "";
        cartArr.forEach(([key, value]) => {
          if (!value.qty == 0) {
            cartText += value.name + ", количество:" + value.qty + '  '
          }
        });
        //console.log(cartText);
        document.querySelector('input[name="title-products"]').value = cartText;
      } else {
        this.classList.add('ter-prod-check--active');
        textNum++;
        text.value = textNum;
        sum += +price;
        let obj = {
          name: parent.querySelector('.ter-products-block__title h2').textContent,
          qty: textNum
        }
        cart[''+sku+''] = obj;
        let cartArr = Object.entries(cart);
        let cartText = "";
        cartArr.forEach(([key, value]) => {
          if (!value.qty == 0) {
            cartText += value.name + ", количество:" + value.qty + '  '
          }
        });
        //console.log(cartText);
        document.querySelector('input[name="title-products"]').value = cartText;
        document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
        document.querySelector('input[name="products-total"]').value = sum;
      }
    })
  }
  for (var i = 0; i < cloneProductPlus.length; i++) {
    cloneProductPlus[i].setAttribute('data-sku', 'sku'+i); 
    cloneProductPlus[i].addEventListener('click', function(){
      let parent = this.parentElement.parentElement.parentElement.parentElement.parentElement;
      parent.querySelector('.ter-prod-check').classList.add('ter-prod-check--active');
      let price = parent.querySelector('.ter-products-block__new').getAttribute('data-price-cart');
      let text = parent.querySelector('.ter-prod-count');
      let textNum = text.value;
      let sku = this.getAttribute('data-sku');
      textNum++;
      text.value = textNum;
      sum += +price;
      let obj = {
        name: parent.querySelector('.ter-products-block__title h2').textContent,
        qty: textNum
      }
      cart[''+sku+''] = obj;
      let cartArr = Object.entries(cart);
      let cartText = "";
      cartArr.forEach(([key, value]) => {
        if (!value.qty == 0) {
          cartText += value.name + ", количество:" + value.qty + '  '
        }
      });
      //console.log(cartText);
      document.querySelector('input[name="title-products"]').value = cartText;
      document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
      document.querySelector('input[name="products-total"]').value = sum;
    });
  }

  for (var i = 0; i < cloneProductMinus.length; i++) {
    cloneProductMinus[i].setAttribute('data-sku', 'sku'+i);
    cloneProductMinus[i].addEventListener('click', function(){
      let parent = this.parentElement.parentElement.parentElement.parentElement.parentElement;
      let price = parent.querySelector('.ter-products-block__new').getAttribute('data-price-cart');
      let text = parent.querySelector('.ter-prod-count');
      let textNum = text.value;
      let sku = this.getAttribute('data-sku');
      if (textNum == 0) {
        textNum = 0
        text.value = textNum;
        sum;
        let obj = {
          name: parent.querySelector('.ter-products-block__title h2').textContent,
          qty: textNum
        }
        cart[''+sku+''] = obj;
        let cartArr = Object.entries(cart);
        let cartText = "";
        cartArr.forEach(([key, value]) => {
          if (!value.qty == 0) {
            cartText += value.name + ", количество:" + value.qty + '  '
          }
        });
      } else {
        if (textNum == 1) {
          parent.querySelector('.ter-prod-check--active').classList.remove('ter-prod-check--active');
        }
        textNum--;
        text.value = textNum;
        sum = sum - price;
        let obj = {
          name: parent.querySelector('.ter-products-block__title h2').textContent,
          qty: textNum
        }
        cart[''+sku+''] = obj;
        let cartArr = Object.entries(cart);
        let cartText = "";
        cartArr.forEach(([key, value]) => {
          if (!value.qty == 0) {
            cartText += value.name + ", количество:" + value.qty + '  '
          }
        });
      }
      
      document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
      document.querySelector('input[name="products-total"]').value = sum;
      document.querySelector('input[name="title-products"]').value = cartText;
    });
  }
  let wrapProducts = document.querySelector('.nmo-ter .mc-left');
  wrapProducts.append(cloneProducts);
}

// window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.tel-ter'), function(input) {
//     var keyCode;
//     function maskTer(event) {
//         event.keyCode && (keyCode = event.keyCode);
//         var pos = this.selectionStart;
//         if (pos < 3) event.preventDefault();
//         var matrix = "+7 (9__) ___ ____",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, ""),
//             new_value = matrix.replace(/[_\d]/g, function(a) {
//                 return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//             });
//         i = new_value.indexOf("_");
//         if (i != -1) {
//             i < 5 && (i = 3);
//             new_value = new_value.slice(0, i)
//         }
//         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return "\\d{1," + a.length + "}"
//             }).replace(/[+(9)]/g, "\\$&");
//         reg = new RegExp("^" + reg + "$");
//         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//         if (event.type == "blur" && this.value.length < 5)  this.value = ""
//     }

//     input.addEventListener("input", maskTer, false);
//     input.addEventListener("focus", maskTer, false);
//     input.addEventListener("blur", maskTer, false);
//     input.addEventListener("keydown", maskTer, false)

//   });

// });

function checkSubmitForm() {
  let name = false;
  let phone = false;
  let address = false;
  let button = document.querySelector('.mcr-btn2');
  let nameInput = document.querySelector('input[name="name2"]');
  let phoneInput = document.querySelector('#phone22');
  let addressInput = document.querySelector('input[name="adress"]');
  nameInput.addEventListener('input', function(){
    if (!nameInput.value == "") {
      name = true;
    } else {
      name = false;
    }
    if (name && phone && address) {
      button.classList.remove('disabled');
      button.removeAttribute('disabled');
    }
  });
  phoneInput.addEventListener('input', function(){
    if (!phoneInput.value == "" && phoneInput.value.length >= 17) {
      phone = true
    } else {
      phone = false
    }
    if (name && phone && address) {
      button.classList.remove('disabled');
      button.removeAttribute('disabled');
    }
  });
  addressInput.addEventListener('input', function(){
    if (!addressInput.value == "") {
      address = true
    } else {
      address = false
    }
    if (name && phone && address) {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
    }
  });
}

checkSubmitForm();


function callbackTer() {
  let name = false;
  let phone = false;
  let button = document.querySelector('button.mcr-btn1');
  let nameInput = document.querySelector('input[name="name1"]');
  let phoneInput = document.querySelector('input[name="phone1"]');
  nameInput.addEventListener('input', function(){
      if (!nameInput.value == "") {
        name = true;
      } else {
        name = false;
      }
      if (name && phone) {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
      }
    });
  phoneInput.addEventListener('input', function(){
      if (!phoneInput.value == "" && phoneInput.value.length >= 17) {
        phone = true
      } else {
        phone = false
      }
      if (name && phone) {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
      }
    });
}

callbackTer()

document.querySelector('.nmo-ter div.modal-order-form').addEventListener('scroll', function(){
  // if(this.scrollTop > 1) {
  //   document.querySelector('.mc-right').style.top = "-22px";

  // } else {
  //   document.querySelector('.mc-right').style.top = "-27px";
  //}
  // if(this.scrollTop > 250) {
  //   for (var i = 0; i <  document.querySelectorAll('.nmo-ter .ter-filter-block__buttons--wrap').length; i++) {
  //     document.querySelectorAll('.nmo-ter .ter-filter-block__buttons--wrap')[i].classList.add('ter-filter-block__buttons--wrap--fixed')
  //   }
    
  // } else {
  //   for (var i = 0; i <  document.querySelectorAll('.nmo-ter .ter-filter-block__buttons--wrap').length; i++) {
  //     document.querySelectorAll('.nmo-ter .ter-filter-block__buttons--wrap')[i].classList.remove('ter-filter-block__buttons--wrap--fixed')
  //   }
  // }
})


let terDate = new Date();
let terMonth = terDate.getMonth();
let terDay = terDate.getDate();
let terMonthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентебря', 'октября', 'ноября', 'декабря'];
let terMonthArrNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
console.log(terDay + ' ' + terMonthArr[terMonth]);

let terYear = terDate.getFullYear()

Date.prototype.daysInMonth = function() {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let terMonthMaxDay = terDate.daysInMonth()

let terMonthNext;

if (terDate.getMonth() + 1 == 12) {
  terMonthNext = 0;
} else {
  terMonthNext = terDate.getMonth() + 1
}

console.log(terYear);

function terDateText(terDay, terMonth, terMonthNext, terMonthArr, terYear, terMonthArrNum) {
  let terTextSale;
  let terTextDate;
  if (terDay < 3) {
    terTextSale = "Скидка до 3 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '03.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 6) {
    terTextSale = "Скидка до 6 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '06.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 9) {
    terTextSale = "Скидка до 9 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '09.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 12) {
    terTextSale = "Скидка до 12 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '12.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 15) {
    terTextSale = "Скидка до 15 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '15.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 18) {
    terTextSale = "Скидка до 18 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '18.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 21) {
    terTextSale = "Скидка до 21 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '21.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 24) {
    terTextSale = "Скидка до 24 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '24.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay < 27) {
    terTextSale = "Скидка до 27 " + terMonthArr[terMonth] + ' ' + terYear;
    terTextDate = '27.' + terMonthArrNum[terMonth] + '.' + terYear
  } else if (terDay >= 27) {
    if (terMonthNext == 0) {
      terYear += 1;
      terTextSale = "Скидка до 1 " + terMonthArr[terMonthNext] + ' ' + terYear;
      terTextDate = '01.' + terMonthArrNum[terMonthNext] + '.' + terYear
    } else {
      terTextSale = "Скидка до 1 " + terMonthArr[terMonthNext] + ' ' + terYear;
      terTextDate = '01.' + terMonthArrNum[terMonth] + '.' + terYear
    }
  }
  let terProductsBlockDate = document.querySelectorAll('.ter-products-block__date');
  for (var i = 0; i < terProductsBlockDate.length; i++) {
    terProductsBlockDate[i].textContent = terTextSale
  }
  let terProductOtherItemTime = document.querySelectorAll('.ter-product-other__item-time');
  for (var i = 0; i < terProductOtherItemTime.length; i++) {
    terProductOtherItemTime[i].textContent = terTextDate;
  }
  let terDateStyle = document.createElement('style');
  terDateStyle.innerHTML += `.nmo-ter .mc-left .ter-products-block__price:after {content: "${terTextDate}"}`;
  document.querySelector('body').append(terDateStyle);
}

terDateText(terDay, terMonth, terMonthNext, terMonthArr, terYear, terMonthArrNum);

// selector of all videos on the page
const tervideos = document.querySelectorAll('.tervideo');

// generate video url
let tergenerateUrl = function(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let tercreateIframe = function(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', tergenerateUrl(id));

  return iframe;
};

// main code
tervideos.forEach((el) => {
  let videoHref = el.getAttribute('data-video');

  let deletedLength = 'https://youtu.be/'.length;

  let videoId = videoHref.substring(deletedLength, videoHref.length);

  let img = el.querySelector('img');
  let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
  img.setAttribute('src', youtubeImgSrc);

  el.addEventListener('click', (e) => {
    e.preventDefault();

    let iframe = tercreateIframe(videoId);
    el.querySelector('img').remove();
    el.appendChild(iframe);
    el.querySelector('button').remove();
  });
});