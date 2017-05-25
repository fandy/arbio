$(window).on('load', function () {
	resizeSection();
});

$(document).ready(function () {
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
	resizeSection();
});

$(window).resize(function () {
	resizeSection();
});

function resizeSection() {
    var top = $( window ).height();
	$(".section-home").css('height', top);
}