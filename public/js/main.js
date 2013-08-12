$(function () {
	var navLinks = $('#main-nav ul li a[href^="#"]'),
		body = $('body');

	// smooth scroll to position in page on banner link click
	navLinks.on('click', function (e) {
	   e.preventDefault();
	   $('html, body').animate({ scrollTop: $(this.hash).offset().top - 150 }, 300);
	});
	
	navLinks.hover(function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), true);
	}, function (e) {
		body.toggleClass(e.currentTarget.hash.replace('#', ''), false);
	});
});

