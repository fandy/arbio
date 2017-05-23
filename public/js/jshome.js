$(document).ready(function(){
    $('#view-video').click(function(){
         /*$('video')[0].webkitEnterFullScreen();
         $('video')[0].mozRequestFullScreen();*/
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

var designedFor = $('#owlDesignedFor');
$(document).ready(function () {
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
	resizeSection();
	designedFor.owlCarousel({
	    items:3,
	    nav: false,
        loop:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        720:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});
});

$(window).resize(function () {
	resizeSection();
});

function resizeSection() {
    var top = $( window ).height();
	$(".section-home").css('height', top);
}