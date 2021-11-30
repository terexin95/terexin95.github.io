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

 window.addEventListener('resize', function() {
  
    let trSlAll = document.querySelectorAll('.ter-slider-block__wrap .ter-slider-block__wrap--img');
  let trSlWrap = document.querySelector('.ter-slider-block__wrap');
  let trWSl = 875;
  // alert('resize ' + trWSl);
  let trLeft = document.querySelector('.ter-slider-block__left');
  let trRight = document.querySelector('.ter-slider-block__right');
  // let trCounter = 0;
  // let trPos = 0;
  // let trPosThumb = 0;
  // let trCloneImg = trSlWrap.cloneNode(true);
  let terSliderBlockNumMin = document.querySelector('.ter-slider-block__num-min');
  let terSliderBlockNumMax = document.querySelector('.ter-slider-block__num-max');
  terSliderBlockNumMax.textContent = trSlAll.length;
  terSliderBlockNumMin.textContent = trCounter + 1;

  // trCloneImg.classList.remove('ter-slider-block__wrap');
  // trCloneImg.classList.add('ter-slider-block__thumb');
  let trCloneImg = document.querySelector('.ter-slider-block__thumb');
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
document.querySelectorAll('.ter-filter-block__buttons--height')[2].style.height = '140px';
document.querySelectorAll('.ter-filter-block__buttons--height')[1].style.height = '140px';


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
  cloneProductsDescrip = cloneProducts.querySelectorAll('.ter-filter-block__decription');
  for (var i = 0; i < cloneProductsDescrip.length; i++) {
    cloneProductsDescrip[i].remove();
  }
  for (let i = 0; i < cloneProducts.querySelectorAll('.ter-filter-block__button').length; i++) {
    cloneProducts.querySelectorAll('.ter-filter-block__button')[i].addEventListener('click', function(){
      let attr = this.getAttribute('data-category-ter');
      let parent = this.parentElement.parentElement.parentElement.parentElement;
      console.log(parent.querySelectorAll('.ter-products-block'));
      for (var i = 0; i < parent.querySelectorAll('.ter-products-block').length; i++) {
        parent.querySelectorAll('.ter-products-block')[i].style.display = "none"
      }
      for (var i = 0; i < parent.querySelectorAll('.'+attr).length; i++) {
        parent.querySelectorAll('.'+attr)[i].style.display = "flex";
      }
      parent.querySelector('.ter-filter-block__button--active').classList.remove('ter-filter-block__button--active');
      this.classList.add('ter-filter-block__button--active');
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
      console.log(parent)
      let price = parent.querySelector('.ter-products-block__new').getAttribute('data-price-cart');
      let text = parent.querySelector('.ter-prod-count');
      let textNum = text.value;
      let sku = this.getAttribute('data-sku');
      
      if (this.classList.contains('ter-prod-check--active')) {
        this.classList.remove('ter-prod-check--active');
        sum = +sum - (+price * textNum);
        console.log(+price * textNum)
        textNum = 0;
        text.value = textNum;
        document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
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
        console.log(cartText);
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
        console.log(cartText);
        document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
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
      console.log(cartText);
      document.querySelector('.mc-right .mcr-total .t-total .order-total').textContent = sum;
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
    });
  }
  let wrapProducts = document.querySelector('.nmo-ter .mc-left');
  wrapProducts.append(cloneProducts);
}

// function checkSubmitForm() {
//   let name = false;
//   let phone = false;
//   let address = false;
//   let button = document.querySelector('.mcr-btn2');
//   let nameInput = document.querySelector('input[name="name2"]');
//   let phoneInput = document.querySelector('#phone22');
//   console.log(phoneInput.textContent)
//   let addressInput = document.querySelector('input[name="adress"]');
//   nameInput.addEventListener('input', function(){
//     if (!nameInput.value == "") {
//       name = true;
//     } else {
//       name = false;
//     }
//     if (name && phone && address) {
//       button.classList.remove('disabled');
//       button.setAttribute('disabled', ' ');
//     }
//     console.log(nameInput, name)
//   });
//   phoneInput.addEventListener('change', function(){
//     if (!phoneInput.value == "") {
//       phone = true
//     } else {
//       phone = false
//     }
//     if (name && phone && address) {
//       button.classList.remove('disabled');
//       button.setAttribute('disabled', ' ');
//     }
//     console.log(phoneInput, phone);
//   });
//   addressInput.addEventListener('input', function(){
//     if (!addressInput.value == "") {
//       address = true
//     } else {
//       address = false
//     }
//     if (name && phone && address) {
//       button.classList.remove('disabled');
//       button.setAttribute('disabled', ' ');
//     }
//     console.log(addressInput, address)
//     console.log(phoneInput.value, phone)
//   });
// }

// checkSubmitForm();