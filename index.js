

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
