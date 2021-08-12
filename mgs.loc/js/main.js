

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