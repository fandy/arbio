function resizeSection() {
	var wH = $(window).height();	
	var sH = $('#section-home');
	sH.css('height', wH);
	var cH = sH.find('.container').find('.row').height();
	var pB = null,
		pT = null;
	if ( wH < cH ) {
		pB = 16;
		pT = 90;
	} else {
		pB = (wH - cH) / 2;
		pT = (wH - cH) / 2;
	}
	sH.css({
		'padding-top' 	 : pT + 'px',
		'padding-bottom' : pB + 'px'
	})
}

$(window).on('load', function () {
	resizeSection()
});

var designedFor = $('#owlDesignedFor');
$(document).ready(function () {
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
	resizeSection()
});