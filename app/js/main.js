$(function () {
	$('.testimonials__slider').not('.slick-initialized').slick({
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.custom-slick-prev',
		nextArrow: '.custom-slick-next',
		variableWidth: true,
	})

	$('.testimonials__btn-container, .slick-dots').on('click', function () {
		$('.slick-slide').css('opacity', '1')

		$('.slick-current').prev().animate({ opacity: '0' }, 200)
	})
})
