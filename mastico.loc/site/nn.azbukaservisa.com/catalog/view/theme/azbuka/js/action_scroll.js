/**
 * Created by IBAH on 19.04.2016.
 */
var jarallax;
var v_easing = 'ease';

// 3 section
function threeSectionAnimationStart() {

    var e = $('.fullscreen-bg').attr('run');
    if (e == 1) {
        /*
         $('.fullscreen-bg').tween({
         top: {
         start: 0,
         stop: -40,
         units: '%',
         duration: 1,
         //effect: v_easing
         },
         onStop: function () {
         $('.fullscreen-bg').css({top: '0'});
         $('.fullscreen-bg').attr('run', 0);
         }
         }).play();
         */

        //$('.fullscreen-bg').css('top', '-70%');
        //$('.fullscreen-bg').css('transition', 'top 1s linear');
        $('.fullscreen-bg').attr('run', 0);
        $('.fullscreen-bg__video').css('top', '0%');
        $('.fullscreen-bg__video').css('transition', 'top 1s linear');

        //return false;
    }
}

function threeSectionAnimationEnd() {
    randDigitDoorsCount();
}

function defaultAction() {
    setTimeout(function () {
        $('#doors_count').html('');
        $('#doors_count').attr('number', 0);
        $('#doors_count').prop('number', 0);

    }, 500);

}

// 6 section
function sixSectionAnimationStart() {
    $('#after-block-parallax').css({position: 'absolute'});
    $('#after-block-parallax').tween({
        top: {
            start: -37,
            stop: 0,
            units: '%',
            duration: 1.05,
            //effect: v_easing
        },
        onStop: function () {
            $('#after-block-parallax').css({position: 'relative'});
        }
    }).play();
}

function randDigitDoorsCount() {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    var d = parseInt($('#doors_count').attr('data-count'));
    console.log(d);
    $('#doors_count').animateNumber(
        {
            number: d,
            easing: 'easeOutExpo',
            numberStep: comma_separator_number_step
        },
        900
    );
}

var start = 0;

function scrollEvent(event, delta) {
    var section_2_top = $('.section_2').offset().top;
    var section_3_top = $('.section_3').offset().top;

    var scroll_pos = window.scrollY;

    var body = $("html, body");

    if (scroll_pos >= 0 && scroll_pos < section_2_top && delta < 0) {
        blurElement(".blur-overlay", 0);
    }

    if (delta > 0 && scroll_pos <= section_2_top) {
        $('body').smoothWheel({remove: true});

        global.first = 1;

        body.animate({scrollTop: 0}, 1000, 'linear', function () {
            console.log(99);
        });
        blurElement(".blur-overlay", 7);
    }


    if (scroll_pos >= section_2_top && scroll_pos < section_3_top && delta < 0 && 0) {

        body.animate(
            {scrollTop: section_3_top}, {
                duration: 1000,
                easing: 'linear',
                queue: false,
                start: function () {
                    var run = $('.fullscreen-bg').attr('run');
                    if (run == 0 || run == undefined) {
                        $('.fullscreen-bg').attr('run', 1);
                        threeSectionAnimationStart();
                    } else {
                        $('.fullscreen-bg__video').css('top', '50%');
                    }
                    setTimeout(function () {
                        $('.fullscreen-bg__video').css('top', '50%');
                    }, 1000);
                },
                done: function () {
                    //alert();
                    //$('.fullscreen-bg').css('top', '0');
                    $('.fullscreen-bg__video').css('top', '50%');
                    console.log('end - 09');
                    //$('body').smoothWheel();
                }
            });

    }

    if (scroll_pos >= section_2_top && scroll_pos < section_3_top && delta < 0) {
        body.stop().animate({scrollTop: section_3_top}, 1000, 'linear', function () {

        });
        //threeSectionAnimationStart();
    }
}