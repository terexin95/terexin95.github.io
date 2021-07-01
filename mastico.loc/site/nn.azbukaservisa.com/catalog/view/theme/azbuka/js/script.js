/**
 * Created by IBAH on 18.04.2016.
 */
var global = {
    count_up: 10
};

// on ready
$(document).ready(function () {


    global.delta = -1;
    global.anim_scroll = false;
    global.next_click = 0;
    var lastScrollTop = 0;

    // block scroll
    var counter = 1;
    $(window).scroll(function (e) {
        //console.log('scroll event');
        global.scroll_direcrion = 'hz';

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            global.scroll_direcrion = 'down';
            global.delta = -1;
        } else {
            global.scroll_direcrion = 'up';
            global.delta = 1;
        }
        lastScrollTop = st;

        //$('body').smoothWheel();

        var currentScrollTop = $(document.body).scrollTop();


        /*
         if (currentScrollTop < $('.section_2').offset().top - 200 && global.delta == -1 && global.scroll_direcrion == 'down') {
         e.preventDefault();
         if (!global.anim_scroll) {
         global.anim_scroll = true;
         blurElement('.blur-overlay', 0);
         //$('#bottom-div-next').hide(0);
         $('html, body').stop().animate({scrollTop: $('.section_2').offset().top},
         {
         duration: 500,
         easing: 'linear',
         queue: false,
         start: function () {
         },
         done: function () {
         //$('body').smoothWheel();
         global.anim_scroll = false;
         }
         }
         );
         }
         }
         if ($('.section_2').offset().top > currentScrollTop && global.delta == 1 && global.scroll_direcrion == 'up') {
         e.preventDefault();
         if (!global.anim_scroll) {
         global.anim_scroll = true;
         counter++;
         blurElement('.blur-overlay', 5);
         console.log(counter);
         $('html, body').stop().animate({scrollTop: 0},
         {
         duration: 500,
         easing: 'linear',
         queue: false,
         start: function () {
         },
         done: function () {
         global.anim_scroll = false;
         global.next_click = 1;
         //$('#bottom-div-next').fadeIn(300);
         }
         }
         );
         }
         }
         */

        //console.log(global.delta);
        //console.log(global.scroll_direcrion);

    });


    $('body').mousewheel(function (event, delta, deltaX, deltaY) {
        global.delta = delta;
    });

    $('#next-1').click(function () {
        $(window).scrollTop(1);
    });

    $('#next-2').click(function () {
        animateToElement('.block_gallery');
    });

    $('#next-3').click(function () {
        animateToElement('.section.section_3_partner');
    });

    $('#next-4').click(function () {
        animateToElement('.partner-block');
    });
    /*
     $('.full999').onepage_scroll({
     sectionContainer: ".block-scroll999",
     easing: "linear",

     animationTime: 1100,
     pagination: false,
     updateURL: false,
     beforeMove: function (index) {
     $(window).trigger('scroll');
     switch (index) {
     case 1:
     blurElement(".blur-overlay", 7);
     break;
     case 2:
     blurElement(".blur-overlay", 0);
     break;

     case 3:
     threeSectionAnimationStart();
     break;
     case 6:
     sixSectionAnimationStart();
     break;
     default:

     break;
     }
     defaultAction();

     },
     afterMove: function (index) {
     switch (index) {
     case 2:
     $('.two-video').show();
     break;
     case 3:
     threeSectionAnimationEnd();

     break;
     default:
     randDigitDoorsCount();
     break;
     }
     defaultAction();
     },
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
     });
     */


})
;

if (!String.prototype.contains) {
    String.prototype.contains = function (arg) {
        return !!~this.indexOf(arg);
    };
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll(el) {

    if (el.addEventListener) // older FF
        el.addEventListener('DOMMouseScroll', preventDefault, false);
    el.onwheel = preventDefault; // modern standard
    el.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    el.ontouchmove = preventDefault; // mobile
    el.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


function blurElement(element, size) {

    var filterVal = 'blur(' + size + 'px)';
    $(element)
        .css('filter', filterVal)
        .css('webkitFilter', filterVal)
        .css('mozFilter', filterVal)
        .css('oFilter', filterVal)
        .css('msFilter', filterVal)
        .css('transition', 'filter 1s linear')
        //.css('transition', '1s -webkit-filter linear')
        .css('-webkit-transition', '-webkit-filter 1s linear')
        .css('-moz-transition', 'filter 1s linear')
        .css('-o-transition', 'filter 1s linear');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.wait = function (ms) {
    var defer = $.Deferred();
    setTimeout(function () {
        defer.resolve();
    }, ms);
    return defer;
};

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },


    AsHeight: function () {
        var w = $(window).innerWidth();
        return (w < 769) ? 'Mob' : 0;
    },

    any: function () {
        return (isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
            || isMobile.AsHeight()
        );
    }
};

function stopPropagation(evt) {
    if (typeof evt.stopPropagation == "function") {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }
}
