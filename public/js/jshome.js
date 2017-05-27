$(document).ready(function(){
    $('#view-video').click(function(){
		 $(this).hide();
		 $('video')[0].setAttribute("controls","controls") 
    });
});
var $win = $(window);
$win.scroll(function() {
	if ($win.scrollTop() == 0) {

		if (!$(".navbar-collapse").hasClass("in")) {
			$("nav").removeClass("navbarcolor");
		}
	} else {
		$("nav").addClass("navbarcolor");
	}
});

$('a[href^="#"]').click(function(e) {
	var target = $(this).attr('href');
	var strip = target.slice(1);
	var anchor = $("section[id='" + strip + "']");

	e.preventDefault();

	y = (anchor.offset() || {
		"top" : NaN
	}).top;

	$('html, body').animate({
		scrollTop : (y - 60)
	}, 'slow');
});

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