var global = {};

$(document).ready(function () {


    var speed = 1.1;
    var lastScrollTop = 0;

    var top_5_text = 100;
    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            global.scroll_direcrion = 'down';
            global.delta = -1;
        } else {
            global.scroll_direcrion = 'up';
            global.delta = 1;
        }
        lastScrollTop = st;

        if ($(this).scrollTop() > 0) {
            $('#nav_type').addClass('fixed');
        }
        else if ($(this).scrollTop() < 40) {
            $('#nav_type').removeClass('fixed');
        }

        if ($(this).scrollTop() > 40) {
            $('.section_goods_1').addClass('section_goods_1_top');
        }
        else if ($(this).scrollTop() < 100) {
            $('.section_goods_1').removeClass('section_goods_1_top');
        }
    });

    if (jQuery.isFunction($(window).stellar)) {


        $(window).stellar({
            horizontalOffset: 0,
            verticalScrolling: !isMobile.any(),
            scrollProperty: 'scroll',
            horizontalScrolling: false,
            verticalOffset: 0,
            //hideDistantElements: true,
            hideDistantElements: false,
            responsive: true,
            afterInit: function () {
                $("div[id^='slideshow'] .block_gallery").css('opacity', 1);
            }
        });


    }
    //$('#smooth-scroll').smoothWheel();
});

