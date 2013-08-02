// smooth scroll to position in page on banner link click
$("#main-nav ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);

   // edit: Opera and IE requires the "html" elm. animated
});
