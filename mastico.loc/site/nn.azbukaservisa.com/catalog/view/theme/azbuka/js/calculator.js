$(document).ready(function () {

	var result = 0;
	$('.styled:checked').each(function () {
		result += parseInt($(this).val());
	});

	$('#price_total').text(result);

	// onchange
	$('.styled').change(function (e) {
		var id = this.id;
		var input_mobile = $('#' + id + '_m');

		var count = $(this).attr('count');
		var input = $(this);

		if (!input.prop('checked')) {
			//$(this).parent().find('.count').text(0);
		} else {
			if (count <= 1) {
				$(this).attr('count', 1);
				$(this).parent('.checkbox').find('.count').text('1');
			}

		}

		input_mobile.prop('checked', !input_mobile.prop('checked'));

		calculate();

	});

	// click on td => change checkbox
	$('.checkbox_mobile .td_table label, .price.td_table').on('click', function (e) {
		e.preventDefault();
		var t = $(this);
		var mobile_input = t.parents('.checkbox_mobile').find('input');
		mobile_input.click();
		return false;
	});

	// onchange - mobile
	$('.component_on_mobile').on('change', function () {
		var mobile_input = $(this);
		var id_mobile = mobile_input.attr('id');
		var id = id_mobile.substring(0, id_mobile.length - 2);
		var input = $('#' + id);
		input.prop('checked', !input.prop('checked'));
		input.attr('count', 1);

		calculate();
	});

	makeNiceScroll();

	window.addEventListener('resize', function () {
		makeNiceScroll();
	});

	$('.plus').click(function () {
		var count = $(this).parent().find('.count').text();
		var result = Number(count) + 1;

		var input = $(this).parents('.checkbox').find('input');
		if (input.attr('percent') == 0 || (input.attr('percent') == 1 && count < 1)) {
			input.prop('checked', true);
			input.attr('count', result);

			$(this).parent().find('.count').text(result);
		}

		calculate();
		return false;
	});

	$('.minus').click(function () {
		var count = Number($(this).parent().find('.count').text());
		var result = count - 1;
		var input = $(this).parents('.checkbox').find('input');

		if (count > 1) {
			input.attr('count', result);
			$(this).parent().find('.count').text(result);
			input.prop('checked', true);
		}

		if (count == 1) {
			input.prop('checked', false);
			$(this).parent().find('.count').text(result);
		}

		calculate();

		return false;
	});
});

function calculate() {

	var result = 0;
	var arr_percent = [];
	$('.styled:checked').each(function () {

		var t = $(this);
		if (t.attr('percent') == 1) {
			arr_percent.push(t.val());
		} else {
			var count = t.attr('count');
			result += parseInt(t.val()) * count;
		}

	});

	arr_percent.forEach(function (percent) {
		result = result + ((result * percent) / 100);
	});

	result = parseInt(result);

	$('#price_total').text(result);
}

function makeNiceScroll() {
	var height_100 = $(window).height();
	var height_bottom_block = $('#bottom_block').outerHeight();
	var h = height_100 - height_bottom_block + 50;

	if (h < 200) {
		h = 200;
	}

	$('.container_calculator').height(h);

	$('.container_calculator').niceScroll({cursorcolor: "rgba(0,0,0,0.5)"});
}