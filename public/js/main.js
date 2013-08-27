$(function () {
	var navLinks = $('#main-nav ul li a[href^="#"]'),
	    hashLinks = $('a[href^="#"]'),
	    ticketLinks = $('a[href^="#tickets"]'),
	    ticketSection = $('#tickets'),
		body = $('body'),
		animationTimeout;

    // If the ticket section isn't visible (on mobile devices) redirect to the eventbrite
    ticketLinks.on('click', function (e) {
        if (!ticketSection.is(":visible")) {
            e.preventDefault();
            window.location = "http://indianapolis-oktoberfest.eventbrite.com";
        }
	});

	// Smooth scroll to position for in-page links
	hashLinks.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 150 }, 300);
	});
	
	// Update the background on scroll to position
	body.on('activate.bs.scrollspy', function (e) {
	    var currentTarget = $(e.target).find('a');
	    
	    // Use a setTimeout to reduce flicker
	    if (animationTimeout) window.clearTimeout(animationTimeout);
	    animationTimeout = setTimeout(function () {
	        body.removeClass();
            body.toggleClass(currentTarget.attr('href').replace('#', '') + '-current', true);
	    }, 100);
    });
	
	// Change background image on hover of the top menu
	navLinks.hover(function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), true);
		body.toggleClass('hover', true);
	}, function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), false);
		body.toggleClass('hover', false);
	});
});

