  $(window).scroll(function() {
      /* affix after scrolling 100px */
      if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('affix')
      } else {
      $('.navbar').removeClass('affix')
      }
  });

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });



ScrollReveal().reveal('.scroll', {delay: 300, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.header', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll1', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll2', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll3', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll4', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('img', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.box', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.contact-form', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll5', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
ScrollReveal().reveal('.scroll6', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})