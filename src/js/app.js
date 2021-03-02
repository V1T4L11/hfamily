var menuToggler = $('#menuToggler');

if ( menuToggler.length ) {
  menuToggler.on('click', function(){
    $('.topbar__nav a:not(".toggler")').toggleClass('is-visible');
  });
}

var accordeon = $('.accordeon');
if ( accordeon ) {
	accordeon.on('click','.accordeon-tab', function(){
    if ( $(this).hasClass('is-active') ) {
      $(this).removeClass('is-active')
    } else {
      accordeon.find('.accordeon-tab.is-active').removeClass('is-active');
      $(this).addClass('is-active')
    }
	});
}

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      if ( menuToggler.length ) {
        $('.topbar__nav a:not(".toggler")').removeClass('is-visible');
      }
      position = $(window).scrollTop();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    $('.up').fadeIn('slow');
  }
  else {
    $('.up').fadeOut('slow');
  }
});

setInterval(function(){
  AOS.init({
    disable: window.innerWidth < 960
  });
}, 1000);