      $('.counter').countUp({
        duration: 3000
      });

      $('.newcounter').countUp({
        duration: 600
      });

      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var secfaq = $("#faq").offset().top - 60;
        if (scrollPosition >= secfaq) {
          $('.faqlinks').addClass("active");
        }
        if (scrollPosition < secfaq) {
          $('.faqlinks').removeClass("active");
        }
      });
    