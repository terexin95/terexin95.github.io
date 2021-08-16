

$('.test-item-1 .test-item-1-item').click(function(){
	$('.test-item-1 .test-item-1-item').removeClass('active');
	$(this).addClass('active');

	$('input[name="item1"]').val($(this).data('itemone'));
});

$('.test-item-5 .test-item-1-item').click(function(){
	$('.test-item-5 .test-item-1-item').removeClass('active');
	$(this).addClass('active');
	$('.test-text-item-5').addClass('test-text-item-active');
	$('input[name="item6"]').val($(this).data('itemone'));
});

$('.test-item-2-item-form-label').click(function(){
	$('.test-item-2-item-form-label, .test-item-2-item-form-label-radio').removeClass('test-item-2-item-form-label-radio-active');
	$(this).find('.test-item-2-item-form-label-radio').addClass('test-item-2-item-form-label-radio-active');
	$('.test-text-item-2').addClass('test-text-item-active');
	$('input[name="item2"]').val($(this).data('itemtwo'));
});

$('.test-item-3-item-form-label').click(function(){
	$('.test-item-3-item-form-label, .test-item-3-item-form-label-radio').removeClass('test-item-3-item-form-label-radio-active');
	$(this).find('.test-item-3-item-form-label-radio').addClass('test-item-3-item-form-label-radio-active');
	$('.test-text-item-3').addClass('test-text-item-active');
	$('input[name="item3"]').val($(this).data('itemthree'));
});

$('.test-item-4-item-form-label').click(function(){
	$('.test-item-4-item-form-label, .test-item-4-item-form-label-radio').removeClass('test-item-4-item-form-label-radio-active');
	$(this).find('.test-item-4-item-form-label-radio').addClass('test-item-4-item-form-label-radio-active');
	$('.test-text-item-4').addClass('test-text-item-active');
	$('input[name="item4"]').val($(this).data('itemfour'));
});

$('#textarea').change(function(){
	$('input[name="item5"]').val($(this).val());
});

$('.test-item-6-item-form-label').click(function(){
	$('.test-item-6-item-form-label, .test-item-6-item-form-label-radio').removeClass('test-item-6-item-form-label-radio-active');
	$(this).find('.test-item-6-item-form-label-radio').addClass('test-item-6-item-form-label-radio-active');
	$('.test-text-item-6').addClass('test-text-item-active');
	$('input[name="item7"]').val($(this).data('itemsix'));
});

var testItem = 1;

$('.test-inner-button').click(function(){
	testItem++;
	$(this).parent().hide();
	$('.test-item-'+testItem).addClass('test-item-active');
});

$('.tabs-line-item').click(function(){
	$('.tabs-line-item').removeClass('tabs-line-item-active');
	$(this).addClass('tabs-line-item-active');
	$('.tabs-block').removeClass('df');
	$($(this).data('tab')).addClass('df');
});

$('#file').on('change', function() {
  var splittedFakePath = this.value.split('\\');
  $('.file-input-text').text(splittedFakePath[splittedFakePath.length - 1]);
});

var advSlide = 1;
var advSlider = $('.advantage-slider-wrap').length;
$('.advantage-slider-button').click(function(){
	advSlide++;
	if (advSlide > advSlider) {
		advSlide = 1;
	}
	$('.advantage-slider-wrap').removeClass('df');
	$('.advantage-slider-wrap-'+advSlide).addClass('df');
});

var revSlideOne = 0;
var revSlideTwo = 3;
var revSlideLength = $('.reviews-slide-slider li').length;
$('.reviews-slide-slider li').each(function(i){
	i++;
	$(this).addClass('reviews-slide-slider-li-'+i);
});
$('.reviews-slide-slider-right').click(function(){
	revSlideOne++;
	revSlideTwo++;
	if (revSlideTwo > revSlideLength) {
		revSlideOne = 0;
		revSlideTwo = 3;
		$('.reviews-slide-slider li').hide();
		$('.reviews-slide-slider-li-1, .reviews-slide-slider-li-2, .reviews-slide-slider-li-3').show();
	}
	$('.reviews-slide-slider-li-'+revSlideOne).hide();
	$('.reviews-slide-slider-li-'+revSlideTwo).show();
});

$('.reviews-slide-slider-left').click(function(){
	revSlideOne--;
	revSlideTwo--;
	var revSlideTwoOne = revSlideTwo-2;
	if (revSlideOne < 0 || revSlideTwo < 0) {
		revSlideOne = 0;
		revSlideTwo = 3;
		$('.reviews-slide-slider li').hide();
		$('.reviews-slide-slider-li-1, .reviews-slide-slider-li-2, .reviews-slide-slider-li-3').show();
	}
	$('.reviews-slide-slider-li-'+revSlideTwoOne).show();
	$('.reviews-slide-slider-li-'+revSlideTwo).show();
});

$('.faq-item').click(function(){
	$('.faq-item').removeClass('faq-item-active');
	$('.faq-item-text').slideUp();
	$(this).find('.faq-item-text').slideDown();
	$(this).addClass('faq-item-active');
});

$('.link-top-svg').click(function(){
	$('html').animate({
  scrollTop: 0
}, 1500);
});

var niveWrapOne = $('.reviews-slide').length;
niveWrapOne--;
var niveWrapOneItem = 0;
$('.reviews-slider-left').click(function(){
	niveWrapOneItem--;
	if (niveWrapOneItem < 0) {
		niveWrapOneItem = niveWrapOne;
	}
	$('.reviews-slide').hide();
	$('.reviews-slide').eq(niveWrapOneItem).show();
	console.log(niveWrapOneItem);
});

$('.reviews-slider-right').click(function(){
	niveWrapOneItem++;
	if (niveWrapOneItem > niveWrapOne) {
		niveWrapOneItem = 0;
	}
	$('.reviews-slide').hide();
	$('.reviews-slide').eq(niveWrapOneItem).show();
	console.log(niveWrapOneItem);
});