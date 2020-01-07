$(".humburder").click(function(){
    $(this).toggleClass('open');
    $('.slide-mobile').stop(true,true).slideToggle();
    $('.overlay').fadeOut();
    $('.modal').fadeOut(); 
});


// $('.login').click(function(){
//     $('.overlay').fadeIn();
//     $('.modal').fadeIn();
//     return false;
// });

$('.overlay').click(function(){
    $('.overlay').fadeOut();
    $('.modal').fadeOut();
    $('#modal-1').fadeOut();
    $('body').css({'overflow-y': 'visible'});
    $('#modal-2').fadeOut();
    $('body').removeClass('overflow-y');
});

$('.modal-wrap-tab-1').click(function(){
    $('.modal-item-tab-1').show();
    $('.modal-item-tab-2').hide();
    $('.modal-wrap-tab-2').removeClass('active');
    $('.modal-wrap-tab-1').addClass('active');
});

$('.modal-wrap-tab-2').click(function(){
    $('.modal-item-tab-2').show();
    $('.modal-item-tab-1').hide();
    $('.modal-wrap-tab-1').removeClass('active');
    $('.modal-wrap-tab-2').addClass('active');
});

$(".add-member").click(function(){
    $('#modal-1').fadeIn();
    $('.overlay').fadeIn();
    return false;
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay : true,
    autoplayTimeout : 7000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

$(".select-options li").click(function(){
    $(this).parent().find('.select-active').removeClass('select-active');
    $(this).addClass('select-active');
    $(this).parent().prev().addClass('select-styled-active');
});

$(".login-on").append('<div class="arrow-menu"></div>')

$(".login-on-img, .login-on > a, .menu-login").wrapAll("<div class='login-on-wrap' />")



$('.arrow-menu').click(function(){
    $('.menu-login').stop(true,true).slideToggle();
    $(this).toggleClass('arrow-menu-click');
});

$(".upload-img").click(function(){
    $(".form-img-upload").click();
    return false;
});

$(".create-modal").click(function(){
    $('#modal-2').fadeIn();
    $('.overlay').fadeIn();
    $('body').css({'overflow-y': 'hidden'});
    return false;
});

$(".modal-1-close, .modal-1-wrap-button-2").click(function(){
    $('#modal-2').fadeOut();
    $('#modal-1').fadeOut();
    $('.overlay').fadeOut();
    $('body').css({'overflow-y': 'visible'});
    return false;
});

if($(window).width() < 767) {
    $('.login').click(function(){
        $('.modal').fadeIn();
        return false;
    });
  } else {
    $('.login').click(function(){
        $('.overlay').fadeIn();
        $('.modal').fadeIn();
        $('body').addClass('overflow-y');
        return false;
    });
    $(".login-on-wrap").hover(function(){
        $('.menu-login').stop(true,true).slideToggle();
    });
  }