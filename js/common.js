$(document).ready(function () {

/*scroll*/
if ($('.reviews').length>0) {
	$('.reviews').jScrollPane();
};

/*tabs*/
$('.js-reviews').hide();
$('.tabs li a').click(function() {
	$('.js-reviews, .js-info').hide();
	$('.tabs li a').removeClass('active');
	$(this).addClass('active');
	tabs_val = $(this).attr('href');
	$('.'+tabs_val).show();
	return false;
});

/*popup*/
$('.content__map-shadow').click(function() {
	$('.js-popup-map').fadeIn(300);
});
$('.popup__close').click(function() {
	$('.js-popup-map').fadeOut(300);
});

/*popup menu*/
$('.content__check a').click(function() {
	$('.js-popup-menu').fadeIn(300);
	return false;
});
$('.popup__close').click(function() {
	$('.js-popup-menu').fadeOut(300);
});

/*select*/
$('.select select').change(function() {
	sel_val = $(this).val();
	$(this).next().html(sel_val);
});

/*check*/
$('.check li').click(function() {
	$('.check li').removeClass('active');
	$(this).addClass('active');
});

});