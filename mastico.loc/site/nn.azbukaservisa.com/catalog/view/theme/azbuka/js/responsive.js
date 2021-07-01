/**
 * Created by IBAH on 18.07.2016.
 */


// on ready
$(document).ready(function () {

    $(window).resize(function () {
        Responsive();
    });

    Responsive();

});

function Responsive() {
    var width = $(window).width();

    var carousels = $('.carousel-block');
    var slideshows = $("div[id^='slideshow']");

    // mobile 768
    if (width > 0 && width < 769) {
        var module_class = $('.class_for_text_modules');
        module_class.each(
            function () {
                var t = $(this);
                var block_height = t.height();

                // standard block
                var container_height = t.find('.container').height();
                var block_height_css = t.css('height');
                if (container_height > block_height && block_height_css != 'auto') {
                    t.css('height', 'auto');
                }

                // not standard block
                var not_standard = t.find('.not-standard');
                if (not_standard.length > 0) {
                    var not_standard_height = not_standard.height();
                    if (block_height < not_standard_height && block_height_css != 'auto') {
                        t.css('height', 'auto');
                    }
                }
            }
        );

        // carousel
        carousels.each(
            function () {
                var t = $(this);
                t.find('.block_1200').addClass('block_mobile');
            }
        );

        // slideshow
        slideshows.each(
            function () {
                var t = $(this);
                var w = t.find('.item').width();
                t.find('.item .block_gallery').width(w);
            }
        );

        // category
        $('#block_set').removeClass('no-mobile');

        // remove transition
        $('#block_set .price .block_pack').addClass('disable-transform');


    } else if (width >= 769 && width < 1200) {
        // remove transition
        $('#block_set .price .block_pack').addClass('disable-transform');

    } else {
        defaultResponsive();
    }

    // center horizontal scroll bars
    window.scrollTo(
        (document.body.offsetWidth - document.documentElement.offsetWidth ) / 2,
        (document.body.offsetHeight - document.documentElement.offsetHeight) / 2
    );

}

function defaultResponsive() {
    var carousels = $('.carousel-block');
    var slideshows = $("div[id^='slideshow']");

    // carousel
    carousels.each(
        function () {
            var t = $(this);
            t.find('.block_1200').removeClass('block_mobile');
        }
    );

    // slideshow
    slideshows.each(
        function () {
            var t = $(this);
            t.find('.item .block_gallery').removeAttr('width');
        }
    );

    // category
    $('#block_set').addClass('no-mobile');

    // add transition
    $('#block_set .price .block_pack').removeClass('disable-transform');
}