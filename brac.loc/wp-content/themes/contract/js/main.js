$(document).ready(function(){
  $('.slider-bad, .slider-good').slick({
    infinite: true,
    prevArrow: '<div class="prev"><svg width="73" height="84" viewBox="0 0 73 84" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.284 64L35.78 83.999L0.273987 63.999H0.280987V20H72.281V64H71.284ZM35.78 -0.00100708L71.286 19.999H0.273987L35.78 -0.00100708Z" fill="#FFAD7E"/><path d="M71.284 64L35.78 83.999L0.273987 63.999H0.280987V20H72.281V64H71.284ZM35.78 -0.00100708L71.286 19.999H0.273987L35.78 -0.00100708Z" fill="url(#paint0_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.058 34.784C31.412 34.423 32.001 34.423 32.368 34.784C32.722 35.132 32.722 35.713 32.368 36.061L26.724 41.603H48.648C49.159 41.604 49.566 42.004 49.566 42.507C49.566 43.01 49.159 43.424 48.648 43.424H26.724L32.368 48.953C32.722 49.314 32.722 49.896 32.368 50.243C32.001 50.604 31.411 50.604 31.058 50.243L23.841 43.153C23.474 42.804 23.474 42.223 23.841 41.875L31.058 34.784Z" fill="white"/></g><defs><linearGradient id="paint0_linear" x1="0.273987" y1="-0.00100708" x2="0.273987" y2="83.999" gradientUnits="userSpaceOnUse"><stop stop-color="#B09F94"/><stop offset="1" stop-color="#A09086"/></linearGradient><clipPath id="clip0"><rect width="73" height="84" fill="white"/></clipPath></defs></svg></div>',
		nextArrow: '<div class="next"><svg width="73" height="84" viewBox="0 0 73 84" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.284 64L35.78 83.999L0.274002 63.999H0.281002V20H72.281V64H71.284ZM35.78 -0.00100708L71.286 19.999H0.274002L35.78 -0.00100708Z" fill="#FFAD7E"/><path d="M71.284 64L35.78 83.999L0.274002 63.999H0.281002V20H72.281V64H71.284ZM35.78 -0.00100708L71.286 19.999H0.274002L35.78 -0.00100708Z" fill="url(#paint0_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.058 34.784C31.412 34.423 32.001 34.423 32.368 34.784C32.722 35.132 32.722 35.713 32.368 36.061L26.724 41.603H48.648C49.159 41.604 49.566 42.004 49.566 42.507C49.566 43.01 49.159 43.424 48.648 43.424H26.724L32.368 48.953C32.722 49.314 32.722 49.896 32.368 50.243C32.001 50.604 31.411 50.604 31.058 50.243L23.841 43.153C23.474 42.804 23.474 42.223 23.841 41.875L31.058 34.784Z" fill="white"/><g clip-path="url(#clip1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.373 64L35.869 83.999L0.363998 63.999H0.374998V20H72.375V64H71.373ZM35.869 -0.00100708L71.375 19.999H0.363998L35.869 -0.00100708Z" fill="#FFAD7E"/><path d="M71.373 64L35.869 83.999L0.363998 63.999H0.374998V20H72.375V64H71.373ZM35.869 -0.00100708L71.375 19.999H0.363998L35.869 -0.00100708Z" fill="url(#paint1_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41.973 34.692C41.619 34.331 41.03 34.331 40.663 34.692C40.309 35.041 40.309 35.621 40.663 35.969L46.307 41.51H24.383C23.871 41.512 23.465 41.912 23.465 42.415C23.465 42.918 23.871 43.331 24.383 43.331H46.307L40.663 48.861C40.309 49.222 40.309 49.803 40.663 50.151C41.03 50.511 41.62 50.511 41.973 50.151L49.19 43.06C49.557 42.712 49.557 42.131 49.19 41.783L41.973 34.692Z" fill="white"/></g></g><defs><linearGradient id="paint0_linear" x1="0.274002" y1="-0.00100708" x2="0.274002" y2="83.999" gradientUnits="userSpaceOnUse"><stop stop-color="#B09F94"/><stop offset="1" stop-color="#A09086"/></linearGradient><linearGradient id="paint1_linear" x1="0.363998" y1="-0.00100708" x2="0.363998" y2="83.999" gradientUnits="userSpaceOnUse"><stop stop-color="#B09F94"/><stop offset="1" stop-color="#A09086"/></linearGradient><clipPath id="clip0"><rect width="73" height="84" fill="white"/></clipPath><clipPath id="clip1"><rect width="73" height="84" fill="white"/></clipPath></defs></svg></div>'
  });

  $('.overlay').click(function(){
  	$('.modal-callback').fadeOut();
  	$('.overlay').fadeOut();
  	$('.modal-for-history').fadeOut();
  });

  $('.open-modal').click(function(){
  	$('.modal-callback').fadeIn();
  	$('.overlay').fadeIn();
  	return false;
  });

  $('.open-history-modal').click(function(){
  	var textHistory = $(this).parent().find('.text-for-full-history').html();
  	console.log($(this).parent().find('.text-for-full-history').text())
  	$('.modal-for-history-wrap').html(textHistory);
  	$('.modal-for-history').fadeIn();
  	$('.overlay').fadeIn();
  	return false;
  });

  $('.close').click(function(){
  	$('.overlay').fadeOut();
  	$('.modal-for-history').fadeOut();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $(".nav-fixed").addClass("fix");
    } else {
      $(".nav-fixed").removeClass("fix");
    }
  });

});