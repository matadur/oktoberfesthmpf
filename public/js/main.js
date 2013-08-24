$(function () {
	var navLinks = $('#main-nav ul li a[href^="#"]'),
		body = $('body');

	// smooth scroll to position in page on banner link click
	navLinks.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 150 }, 300);
	});
	
	body.on('activate.bs.scrollspy', function (e) {
	    var currentTarget = $(e.target).find('a');
        body.removeClass();
        body.toggleClass(currentTarget.attr('href').replace('#', '') + '-current', true);
    });
	
	navLinks.hover(function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), true);
		body.toggleClass('hover', true);
	}, function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), false);
		body.toggleClass('hover', false);
	});
});

