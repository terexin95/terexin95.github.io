/**
 * Created by IBAH on 19.05.2016.
 */
var gl_name = {};

// onready
$(function () {

	$('img').each(function () {
		var img = $(this);
		var file = img.attr('src');
		var filename = file.replace(/^.*[\\\/]/, '');
		var alt = img.attr('alt');
		if (alt == '' || alt == undefined || alt == null) {
			//img.attr('alt', 'Alternative ' + filename);
		}

	});


	// set selected item value
	$(".dropdown-menu").on('click', 'li a', function () {
		var dropdown = $(this).parents('.dropdown');
		dropdown.find('button .name-value').text($(this).text());
	});


	$('#closeButton #a_close').click(function () {
		window.open('', '_self', ''); //bug fix
		window.close();
	});

	// cancel modal
	$("div[id^='callModal'] .a_cancel,#CallBackModal .a_cancel").click(function () {
		var a = $(this);
		//var modal = a.parents("div[id^='callModal']");
		var modal = a.parents('.modal');
		modal.modal('hide');
	});


	$(window).scroll(function () {

		// Партнеры
		var brand = $('.brand');
		if (brand.length > 0) {
			//  in scroll:  fadein brands
			if (typeof(checkIfInView) == "function") {
				checkIfInView('.brand', function () {
					fadeInNextElement(brand.find('div'));
				});
			}
		}


	});

	// select regions - show dialog, which don't closing
	$('#select-region-dialog').modal('show').on('hide.bs.modal', function (e) {
		e.preventDefault();
		return false;
	});

	// confirm selected region
	$('#select-region-dialog  .select-region').click(function () {
		var region = $('#select-region-dialog li.active');
		var url = region.attr('url');
		var id = region.attr('value');
		if (id > 0) {
			//$.cookie('region_id', id);
		}
		console.log(url);
		if (url != undefined) {
			location = url;
		}
	});

	// set active region
	$('#select-region-dialog li').click(function () {
		$('#select-region-dialog li').removeClass('active');
		var li = $(this).addClass('active');
	});

	var menu_click = false;

	// menu open/hide
	$("#menu_big").click(function () {
		var menu_content = $("#menu_open");

		// hidden
		if (!menu_content.is(':visible') || menu_content.css('opacity') == '0.5') {
			// save current scroll top
			global.st = $(window).scrollTop();

			menu_content.show();
			if ($(document).hasScrollBarV()) {
				$('body, html').addClass('no-scroll-bar');
			}

			$('.overlay-for-menu').show();
			menu_content.animateCss('fadeIn', function () {
				menu_content.css('opacity', '1');
			});

			$('body, html').addClass('menu_big_open_menu');
			menu_click = true;

		} else {
			$('body, html').removeClass('menu_big_open_menu');
			$('body, html').removeClass('no-scroll-bar');

			$(window).scrollTop(global.st);

			setTimeout(function () {
				$('.overlay-for-menu').hide();
				menu_content.hide();
			}, 100);


		}

		var ts = menu_content.hasScrollBar();
		if (ts) {
			menu_content.addClass('fix-scroll-bar');
		} else {
			menu_content.removeClass('fix-scroll-bar');
		}

	});

	$('#next-section').click(function () {
		var par = $(this).parents('.class_for_text_modules').first();
		var next_block = par.next('.class_for_text_modules ').first();

		if (next_block.length) {
			animateToElement(next_block);
		} else {
			var gallery = $('[id^=run_carousel]');
			if (gallery.length) {
				animateToElement(gallery);
			}
		}

	});

	$("[type='phone'], [type='tel'], " +
		"[name='phone']").inputmask('+7(999) 999-99-99', {placeholder: '_'});

	var allls = $('#menu_open .ul-header-menu .li-item-menu .text-bold');

	allls.each(function () {
		var a = $(this);
		a.parent().addClass('li_margin');
	});

	// mobile go to home
	$('header .logo h2:not(a)').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $link = $(this).find('a');
		var href = $link.attr('href');
		location = href;
		return false;
	});

	// file select for forms
	$(document).on('change', '.type_file', function () {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		var name_file = label.substring(0, 14);
		var name = input.attr('name');
		gl_name[name] = name_file;
		var file_label = $("[data-target='" + name + "']");
		file_label.text(name_file);

	});

	// select file
	$('.btn-file').click(function (e) {
		var tag_name = e.target.tagName;
		if (tag_name == 'INPUT') return false;
		e.preventDefault();
		e.stopPropagation();
		var t = $(this);
		var file = $("[name='" + t.attr('data-target') + "']")[0];
		file.click();
		return false;
	});

	// click on pack
	$('#block_set .price .block_pack .type-color').not('.make_order').click(function (e) {
		var cl = e.target.className;

		if (cl.indexOf('make_order') === -1) {
			var t = $(this);
			var a = t.find('.show_invoice');
			window.location = a.attr('href');
			return false;
		}

	});

	// hover pack center
	$('#block_set .price .block_pack:nth-child(2)').hover(function () {
		var left = $('#block_set .price .block_pack:nth-child(1)');
		var right = $('#block_set .price .block_pack:nth-child(3)');
		left.addClass('translate_left');
		right.addClass('translate_right');

	}, function () {
		var left = $('#block_set .price .block_pack:nth-child(1)');
		var right = $('#block_set .price .block_pack:nth-child(3)');

		right.removeClass('translate_right');
		left.removeClass('translate_left');

	});

	// hover pack left
	$('#block_set .price .block_pack:nth-child(1)').hover(function () {
		var center = $('#block_set .price .block_pack:nth-child(2)');
		var right = $('#block_set .price .block_pack:nth-child(3)');
		center.addClass('translate_right');
		right.addClass('translate_right');
	}, function () {
		var center = $('#block_set .price .block_pack:nth-child(2)');
		var right = $('#block_set .price .block_pack:nth-child(3)');
		center.removeClass('translate_right');
		right.removeClass('translate_right');
	});

	// hover pack right
	$('#block_set .price .block_pack:nth-child(3)').hover(function () {
		var center = $('#block_set .price .block_pack:nth-child(2)');
		var left = $('#block_set .price .block_pack:nth-child(1)');
		center.addClass('translate_left');
		left.addClass('translate_left');
	}, function () {
		var center = $('#block_set .price .block_pack:nth-child(2)');
		var left = $('#block_set .price .block_pack:nth-child(1)');
		center.removeClass('translate_left');
		left.removeClass('translate_left');
	});

	// hover category
	$('.nav_type ul li .category-info .div_img_menu').not('.active_category').hover(function () {
		var t = $(this);
		var act = t.attr('src');
		t.css('background-image', 'url(' + act + ')');
	}, function () {
		var t = $(this);
		var def = t.attr('src_def');
		t.css('background-image', 'url(' + def + ')');
	});

	// close all modals
	$('.modal .btn_ok').click(function () {
		$('.modal').removeClass('zoomOut');
		$('.modal').modal('hide');
		//alert();
	});

	// small gallery categories
	var gallery_menu_small = $("#main_menu_category_small");

	if (gallery_menu_small.length > 0) {
		gallery_menu_small.owlCarousel({
			loop: true,
			items: 3,
			//itemsDesktop: [1199, 5],
			itemsDesktopSmall: [768, 3],
			itemsTablet: [600, 2],
			itemsMobile: [500, 1],
			pagination: false,
			navigation: true,
			navigationText: ['<img src="/catalog/view/theme/azbuka/image/gallery-arrow-big.svg">', '<img class="mirror" src="/catalog/view/theme/azbuka/image/gallery-arrow-big.svg">'],
			responsive: true,
			dots: false,
			margin: 0,
			responsiveRefreshRate: 100
		});
	}

	$('#add_question_consultant').click(function () {
		//alert();
		jivo_api.open();


		return false;
		if (global.consultant_open == undefined || !global.consultant_open) {
			if (jivo_api !== undefined) {
				alert(global.consultant_open);
				alert(jivo_api);
				jivo_api.open();
			}

		} else {
			$('#jivo_container').contents().find('#jivo_close_button').click();
			$('#jivo_container').contents().find('#jivo_close_button').trigger('click');
		}
	});


	$('.modal').on('show.bs.modal', function () {
		var div_modal = $(this);
		var id = div_modal.attr('id');
		if (id != 'videoModal') {

			var for_blur = $('.for-blur');
			//alert(for_blur.length);
			if (for_blur.length > 1) {
				//for_blur = $('.for-blur').last();
			}
			for_blur.first().addClass('blur');
			//console.log(div_modal.attr('id'));
		}
	});

	$('.modal').on('hide.bs.modal', function () {
		$('.for-blur').removeClass('blur');
	});


});


function jivo_onLoadCallback() {
	$('#jivo_container').addClass('black_shadow');
}


function jivo_onOpen() {
	global.consultant_open = true;
	$('.jivo-iframe-container-bottom').get(0).style.setProperty('bottom', '45px', 'important');
	$('.jivo-iframe-container-bottom').get(0).style.setProperty('z-index', Math.pow(2, 32) - 1, 'important');
}

function jivo_onClose() {
	global.consultant_open = false;
	//alert('op close');
	$('.jivo-iframe-container-bottom').get(0).style.setProperty('z-index', -1, 'important');
	$('.jivo-iframe-container-bottom').get(0).style.setProperty('bottom', '-100px', 'important');
}


$(window).load(function () {
	$('#orderNotification').on('hidden.bs.modal', function (e) {
		$('.modal').removeClass('zoomOut');
		$('.modal').modal('hide');
	})

});

$(window).resize(function () {
	// fix menu scrollbar
	var t = $('#menu_open');
	if (t.length > 0) {
		var ts = t.hasScrollBar();
		if (ts) {
			t.addClass('fix-scroll-bar');
		} else {
			t.removeClass('fix-scroll-bar');
		}
	}
});

function goToGalleryImage(caller) {
	var t = caller;
	var run_carousel = t.parents("div[id^='run_carousel']").last();
	var image_id = t.find('img').attr('data-image');
	var module_id = run_carousel.attr('data-module-id');
	var link = 'gallery/?gallery=' + module_id + '&image=' + image_id;
	window.open(link, '_blank');
}

