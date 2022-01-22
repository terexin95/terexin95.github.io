const observer = lozad();
observer.observe();

function updateZoomOut(item) {
    item.addEventListener('wheel', function(){
        if(this.querySelector('img').getAttribute('data-scale') > 1 ) {
           if(document.querySelector('.modal-master__zoom-out').classList.contains('modal-master__buttons--disabled')) document.querySelector('.modal-master__buttons--disabled').classList.remove('modal-master__buttons--disabled');
        }
        if(this.querySelector('img').getAttribute('data-scale') == 1 ){
            document.querySelector('.modal-master__zoom-out').classList.add('modal-master__buttons--disabled');
        }
    });
}

const swiper = new Swiper('.modal-master__init', {
    simulateTouch: false,
    on: {
        init: function () {
            let current = this.activeIndex;
            let item = document.querySelectorAll('.modal-master__init .zoom')[current]
            updateZoomOut(item)
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.modal-master-next',
        prevEl: '.modal-master-prev',
    },

});

swiper.on('slideChange', function () {
    for (let index = 0; index < document.querySelectorAll('.modal-master__init .zoom img').length; index++) {
        const element = document.querySelectorAll('.modal-master__init .zoom img')[index];
        element.setAttribute('data-scale', '1')
        element.setAttribute('data-translate-x', '0')
        element.setAttribute('data-translate-y', '0')
        element.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1)`;
        document.querySelector('.modal-master__zoom-out').classList.add('modal-master__buttons--disabled');
        let current = this.activeIndex;
        let item = document.querySelectorAll('.modal-master__init .zoom')[current]
        updateZoomOut(item)
    }
  });

function zoomOutImage() {
    if(!document.querySelector('.modal-master__zoom-out').classList.contains('modal-master__buttons--disabled')){
        let img = document.querySelector('.swiper-slide-active .zoom img');
        let current = +img.getAttribute('data-scale');
        current = Math.floor(current);
        --current;
        console.log(current)
        if(current > 1) {
            img.setAttribute('data-scale', current)
            img.style.transform = `scale(${current}, ${current})`;
        } else {
            document.querySelector('.modal-master__zoom-out').classList.add('modal-master__buttons--disabled');
            img.setAttribute('data-scale', '1')
            img.style.transform = `scale(1, 1)`;
        }
        
    }
}

function zoomInImage() {
    let img = document.querySelector('.swiper-slide-active .zoom img');
    let current = +img.getAttribute('data-scale');
    current = Math.floor(current);
    ++current;
    img.setAttribute('data-scale', current)
    img.style.transform = `scale(${current}, ${current})`;
    if(document.querySelector('.modal-master__zoom-out').classList.contains('modal-master__buttons--disabled')) document.querySelector('.modal-master__buttons--disabled').classList.remove('modal-master__buttons--disabled');
}



document.querySelector('.modal-master__zoom-in').onclick = zoomInImage;
document.querySelector('.modal-master__zoom-out').onclick = zoomOutImage;

// let open__master = document.querySelectorAll('.open__master');

// let arrayImg = ['img/woomen/1.png', 'img/woomen/2.png', 'img/woomen/3.png', 'img/woomen/4.png']

// for (let index = 0; index < open__master.length; index++) {
//     const item = open__master[index];
//     item.addEventListener('click', function())
    
// }