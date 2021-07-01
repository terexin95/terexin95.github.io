function checkIfInView(el, inner, outer) {
    var $animation_elements = $(el);
    var $window = $(window);
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (inner != undefined) {
                inner.apply($animation_elements);
            }

        } else {
            if (outer != undefined) {
                outer.apply($animation_elements);
            }
        }
    });
}

function fadeInNextElement(elementArray) {
    if (elementArray.length > 0) {
        var element = Array.prototype.shift.apply(elementArray);

        $(element).stop().animate({opacity: 1}, {
                duration: 450,
                complete: function () {
                    //$(element).removeAttr('style');
                    fadeInNextElement(elementArray);
                }
            }
        );

    }
}

function animateToElement(el) {
    if ($(el).length) {
        var top = $(el).offset().top - 80;
        $('html, body').stop().animate({scrollTop: top},
            {
                duration: 500,
                easing: 'linear',
                queue: false,
                start: function () {
                },
                done: function () {
                }
            }
        );
    }
}

function setProgresObj(el) {
    var lock = false;
    return {
        get: function () {
            if (!lock) {
                var count = 0;
                $(el).css('width', 0 + "%");
                var myVar = setInterval(function () {
                    RunTimer();
                }, 70);

                function RunTimer() {
                    if (count < 97) {
                        $(el).css('width', count + "%");
                        count += 2;
                    }
                    else {
                        lock = true;
                        clearInterval(myVar);
                    }
                }
            }
        },
        set: function (val) {
            lock = val;
        }
    };
}

$.fn.extend({
    animateCss: function (animationName, eventEnd) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (eventEnd != undefined) {
                eventEnd();
            }
        });
    }
});

(function ($) {
    $.fn.hasScrollBar = function () {
        return this.get(0).scrollHeight > this.height();
    }

    $.fn.hasScrollBarV = function () {
        var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
        return hasScrollbar;
    }

})(jQuery);