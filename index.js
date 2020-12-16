  $(window).scroll(function() {
      /* affix after scrolling 150px */
      if ($(document).scrollTop() > 150) {
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

    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }



// ScrollReveal().reveal('.scroll', {delay: 300, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('scroll1', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})

// ScrollReveal().reveal('.scroll2', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('.scroll3', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})

// ScrollReveal().reveal('img', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('.box', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('.contact-form', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('.scroll5', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})
// ScrollReveal().reveal('.scroll6', {delay: 500, origin: 'bottom', distance: '30px', easing: 'cubic-bezier(0.5, 0, 0, 1)'})