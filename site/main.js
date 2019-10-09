$('.six-has-image img').click(function(){
	var imgSrc = $(this).attr("src");
	console.log(imgSrc);
	$('.overlay, .image-full').fadeIn();
	$('.image-full img').attr("src", imgSrc)
});

$('.overlay').click(function(){
	$('.overlay, .image-full').fadeOut();
});

