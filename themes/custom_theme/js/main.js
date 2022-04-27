/*===============================
insert header and footer template
===============================*/

$("header.en-header").load("/template/navigation.html");
$("header.ms-header").load("/template/navigation-ms.html");
$("footer").load("/template/footer.html");
$("footer.ms-footer").load("/template/footer-ms.html");


//Navigation

$(document).on('click', '.navibg--backdrop', function() {
  $('#mainavi-submenu > div').hide();
  $('body').removeClass('backdrop-enabled');
});

$(document).on('click', '.faqlinks', function() {
  $('#mainavi-submenu > div').hide();
  $('body').removeClass('backdrop-enabled');
  $('#maintopnavi').removeClass('mobmenu-enabled');
});


$(document).on('click', '.navbar-toggler', function() {

  if ($('body').hasClass('backdrop-enabled')) {
    $('#mainavi-submenu > div').hide();
    $('body').removeClass('backdrop-enabled');
    $('#maintopnavi').removeClass('mobmenu-enabled');
  } else {
    $('body').addClass('backdrop-enabled');
    $('#maintopnavi').removeClass('future-enabled');
    $('#maintopnavi').removeClass('media-enabled');
    $('#maintopnavi').removeClass('contact-enabled');
    $('#maintopnavi').removeClass('company-enabled');
    $('#maintopnavi').addClass('mobmenu-enabled');
    $('.submenu--mobmain').show();
  }

});

$(document).on('click', '.menu--company', function() {

  if ($('body').hasClass('backdrop-enabled')) {
    if ($('#maintopnavi').hasClass('company-enabled')) {
      $('#mainavi-submenu > div').hide();
      $('body').removeClass('backdrop-enabled');
      $('#maintopnavi').removeClass('company-enabled');
    } else {
      $('#mainavi-submenu > div').hide();
      $('#maintopnavi').removeClass('future-enabled');
      $('#maintopnavi').removeClass('media-enabled');
      $('#maintopnavi').removeClass('contact-enabled');
      $('#maintopnavi').addClass('company-enabled');
      $('#maintopnavi').removeClass('mobmenu-enabled');
      $('.submenu--company').show();
    }

  } else {
    $('body').addClass('backdrop-enabled');
    $('#maintopnavi').removeClass('future-enabled');
    $('#maintopnavi').removeClass('media-enabled');
    $('#maintopnavi').removeClass('contact-enabled');
    $('#maintopnavi').addClass('company-enabled');
    $('#maintopnavi').removeClass('mobmenu-enabled');
    $('.submenu--company').show();
  }

});


$(document).on('click', '.menu--future', function() {

  if ($('body').hasClass('backdrop-enabled')) {
    if ($('#maintopnavi').hasClass('future-enabled')) {
      $('#mainavi-submenu > div').hide();
      $('body').removeClass('backdrop-enabled');
      $('#maintopnavi').removeClass('future-enabled');
    } else {
      $('#mainavi-submenu > div').hide();
      $('#maintopnavi').addClass('future-enabled');
      $('#maintopnavi').removeClass('media-enabled');
      $('#maintopnavi').removeClass('contact-enabled');
      $('#maintopnavi').removeClass('company-enabled');
      $('#maintopnavi').removeClass('mobmenu-enabled');
      $('.submenu--future').show();
    }

  } else {
    $('body').addClass('backdrop-enabled');
    $('#maintopnavi').addClass('future-enabled');
    $('#maintopnavi').removeClass('media-enabled');
    $('#maintopnavi').removeClass('contact-enabled');
    $('#maintopnavi').removeClass('company-enabled');
    $('#maintopnavi').removeClass('mobmenu-enabled');
    $('.submenu--future').show();
  }

});



$(document).on('click', '.menu--media', function() {

  if ($('body').hasClass('backdrop-enabled')) {
    if ($('#maintopnavi').hasClass('media-enabled')) {
      $('#mainavi-submenu > div').hide();
      $('body').removeClass('backdrop-enabled');
      $('#maintopnavi').removeClass('media-enabled');
    } else {
      $('#mainavi-submenu > div').hide();
      $('#maintopnavi').removeClass('future-enabled');
      $('#maintopnavi').addClass('media-enabled');
      $('#maintopnavi').removeClass('contact-enabled');
      $('#maintopnavi').removeClass('company-enabled');
      $('#maintopnavi').removeClass('mobmenu-enabled');
      $('.submenu--media').show();
    }

  } else {
    $('body').addClass('backdrop-enabled');
    $('#maintopnavi').removeClass('future-enabled');
    $('#maintopnavi').addClass('media-enabled');
    $('#maintopnavi').removeClass('contact-enabled');
    $('#maintopnavi').removeClass('company-enabled');
    $('#maintopnavi').removeClass('mobmenu-enabled');
    $('.submenu--media').show();
  }

});



$(document).on('click', '.menu--contact', function() {

  if ($('body').hasClass('backdrop-enabled')) {
    if ($('#maintopnavi').hasClass('contact-enabled')) {
      $('#mainavi-submenu > div').hide();
      $('body').removeClass('backdrop-enabled');
      $('#maintopnavi').removeClass('contact-enabled');
    } else {
      $('#mainavi-submenu > div').hide();
      $('#maintopnavi').removeClass('future-enabled');
      $('#maintopnavi').removeClass('media-enabled');
      $('#maintopnavi').addClass('contact-enabled');
      $('#maintopnavi').removeClass('company-enabled');
      $('#maintopnavi').removeClass('mobmenu-enabled');
      $('.submenu--contact').show();
    }

  } else {
    $('body').addClass('backdrop-enabled');
    $('#maintopnavi').removeClass('future-enabled');
    $('#maintopnavi').removeClass('media-enabled');
    $('#maintopnavi').addClass('contact-enabled');
    $('#maintopnavi').removeClass('company-enabled');
    $('#maintopnavi').removeClass('mobmenu-enabled');
    $('.submenu--contact').show();
  }
});

$(document).on('click', '#mainavi-submenu .submenu--list-button.btnjsvoid', function() {
  $('#mainavi-submenu > div').hide();
  $('#mainavi-submenu .submenu--subinner-' + $(this).data('id')).show();
});

//NOTE: Navi back button
$(document).on('click', '#mainavi-submenu .submenu--backbtn a', function() {
  $('#mainavi-submenu > div').hide();
  $('#mainavi-submenu .' + $(this).data('type')).show();
});

$(document).on('click', '#mainavi-submenu .monbmenu.btnjsvoid', function() {
  console.log(`clevel1`);
  $('#mainavi-submenu > div').hide();
  $('#mainavi-submenu .' + $(this).data('type')).show();
});


//Click Trigger
$(document).on("click", 'a.jscroll-trigger[href*="#"]:not([href="#"])', function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 50)});
      return false;
    }
  }
});



$(document).on('click', '.leadteamitem a', function() {
  if ($('.modal-backdrop').hasClass('opacity80')) {
    $('.modal-backdrop').removeClass('opacity80');
  } else {
    $('.modal-backdrop').addClass('opacity80');
  }
});


//ManualWay close video modal
$(document).on('click', '.videomodalclosebtn', function() {
  $('#videomodal').modal('hide');
});



// We listen to the resize event
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


$('.yvideo').on('click', function (e) {
  e.preventDefault();
  var src = $(this).attr('href');
  $('#videomodal').modal('show');
  $('#videomodal iframe').attr('src', src);
});
//auto close or pause on model hide
$("#videomodal").on('hidden.bs.modal', function (e) {
  $("#videomodal iframe").attr("src", '');
});


$(document).on('click', '.btnjsvoid', function() {
  return false;
});



$('.hero-banner').slick({
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 100,
  // fade: true
}).slickAnimation();

$('.whatis5g').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  asNavFor: '.contentwhatis5g'
});

$('.contentwhatis5g').slick({
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  fade: true,
  focusOnSelect: true,
  asNavFor: '.whatis5g'
})
.on('setPosition', function (event, slick) {
  $oneItemslickSlider = $(this);
  $oneItemslickSlider.find('.slick-slide').height('auto');
  var oneItemslickTrack = $oneItemslickSlider.find('.slick-track');
  var oneItemslickTrackHeight = $(oneItemslickTrack).height();
  $oneItemslickSlider.find('.slick-slide').css('height', oneItemslickTrackHeight + 'px');
});



//Inner Banner
// $('.innerCarousell-imgs').each(function() {
//   var $this = $(this);
//   if ($this.children().length > 1) {
//       $this.slick({
//         pauseOnHover: false,
//         pauseOnFocus: false,
//         pauseOnDotsHover: false,
//         arrows: false,
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 4500,
//         speed: 800,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         touchThreshold: 100,
//         asNavFor: '.innerCarousell-content'
//       })
//       .on('setPosition', function (event, slick) {
//         $innerImgItemslickSlider = $(this);
//         $innerImgItemslickSlider.find('.slick-slide').height('auto');
//         var innerImgItemslickTrack = $innerImgItemslickSlider.find('.slick-track');
//         var innerImgItemslickTrackHeight = $(innerImgItemslickTrack).height();
//         $innerImgItemslickSlider.find('.slick-slide').css('height', innerImgItemslickTrackHeight + 'px');
//       });
//   }
// });
$('.innerCarousell-imgs').slick({
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 100,
  asNavFor: '.innerCarousell-content'
})
.on('setPosition', function (event, slick) {
  $innerImgItemslickSlider = $(this);
  $innerImgItemslickSlider.find('.slick-slide').height('auto');
  var innerImgItemslickTrack = $innerImgItemslickSlider.find('.slick-track');
  var innerImgItemslickTrackHeight = $(innerImgItemslickTrack).height();
  $innerImgItemslickSlider.find('.slick-slide').css('height', innerImgItemslickTrackHeight + 'px');
});
$('.innerCarousell-content').slick({
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 100,
  fade: true,
  asNavFor: '.innerCarousell-imgs'
});


// Slick Scroll
jQuery(function () {
  const slider = jQuery(".whatis5g");
  const containerslider = jQuery(".inershadow");
  slider;

  containerslider.on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      jQuery(slider).slick("slickNext");
    } else {
      jQuery(slider).slick("slickPrev");
    }
  });
});


$('.slidercard').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  touchThreshold: 100,
  dots: false,
  prevArrow: $('.contentleft .slider-prev'),
  nextArrow: $('.contentleft .slider-next'),
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1.3,
      }
    }
  ]
});



// $('.digitaleconomyslider').slick({
//   arrows: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: '15px',
//   touchThreshold: 100,
//   dots: false,
//   asNavFor: '.contentdigitaleco',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: false,
//         infinite: false,
//       }
//     }
//   ]
// }).slickAnimation();

// $('.ecocontentslider').slick({
//   arrows: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: '15px',
//   touchThreshold: 100,
//   dots: false,
//   pauseOnHover: false,
//   draggable: false,
//   touchMove: false,
//   asNavFor: '.contentdigitaleco',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: true,
//         slidesToShow: 1,
//         infinite: false,
//         prevArrow: $('.ecocontentarrow .slider-prev'),
//         nextArrow: $('.ecocontentarrow .slider-next'),
//       }
//     }
//   ]
// });

// $('.digitaleconomyaction a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.digitaleconomyslider').slick('slickGoTo', slideno - 1);
// });





// $('.digitaleconomyaction').slick({
//   arrows: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 11,
//   slidesToScroll: 11,
//   touchThreshold: 100,
//   dots: false,
//   asNavFor: '.contentdigitaleco',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         infinite: false,
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         variableWidth: true,
//       }
//     }
//   ]
// });


$('.digitaleconomyinnerbtn').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 11,
  slidesToScroll: 11,
  touchThreshold: 100,
  dots: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
      }
    }
  ]
});


$('.latestfromdnb-slider').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  touchThreshold: 100,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.3,
      }
    }
  ]
})
.on('setPosition', function (event, slick) {
  $articleCardSlider = $(this);
  $articleCardSlider.find('.slick-slide').height('auto');
  var articleCardTrack = $articleCardSlider.find('.slick-track');
  var articleCardTrackHeight = $(articleCardTrack).height();
  $articleCardSlider.find('.slick-slide').css('height', articleCardTrackHeight + 'px');
});



$('.contentfive-slider').slick({
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  touchThreshold: 100,
  dots: false,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.3,
      }
    }
  ]
})
.on('setPosition', function (event, slick) {
  $contentFiveCardSlider = $(this);
  $contentFiveCardSlider.find('.slick-slide').height('auto');
  var contentFiveCardTrack = $contentFiveCardSlider.find('.slick-track');
  var contentFiveCardTrackHeight = $(contentFiveCardTrack).height();
  $contentFiveCardSlider.find('.slick-slide').css('height', contentFiveCardTrackHeight + 'px');
});



// $('.benefitsbtnaction').slick({
//   arrows: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 11,
//   slidesToScroll: 11,
//   touchThreshold: 100,
//   dots: false,
//   asNavFor: '.benefitssync',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         variableWidth: true,
//       }
//     }
//   ]
// });
// $('.benefitsbtnaction a[data-benefitslide]').click(function(e) {
//   e.preventDefault();
//   var benefitsslideno = $(this).data('benefitslide');
//   $('.benefitsindustries-slider').slick('slickGoTo', benefitsslideno - 1);
// });


// $('.benefitsindustries-slider').slick({
//   arrows: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   touchThreshold: 100,
//   dots: false,
//   fade: true,
//   adaptiveHeight: true,
//   asNavFor: '.benefitssync',
//   prevArrow: $('.benefitscarouselarrow .slider-prev'),
//   nextArrow: $('.benefitscarouselarrow .slider-next'),
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         fade: false,
//         arrows: false,
//         adaptiveHeight: true
//       }
//     }
//   ]
// });


// $('.benefitsindustries-subsync').slick({
//   arrows: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   touchThreshold: 100,
//   fade: true,
//   dots: false,
//   adaptiveHeight: true,
//   asNavFor: '.benefitssync',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: false
//       }
//     }
//   ]
// });


// $('.benefitsindustries-imgsync').slick({
//   arrows: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   touchThreshold: 100,
//   fade: true,
//   dots: false,
//   adaptiveHeight: true,
//   asNavFor: '.benefitssync',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         arrows: false
//       }
//     }
//   ]
// });

/*======================
readmore button about us
===================== */
$('.readmorebtn[data-toggle="collapse"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).html(`Read less <i class='icon-chevron-top'></i>`);
  } else {
    $(this).html(`Read more <i class='icon-chevron-bottom'></i>`);
  }
});

$('.readmorebtnms[data-toggle="collapse"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).html(`Kembali <i class='icon-chevron-top'></i>`);
  } else {
    $(this).html(`Baca lagi <i class='icon-chevron-bottom'></i>`);
  }
});


var lastScrollY = window.scrollY;
$('.collapse.remember-last-pos').on('show.bs.collapse', function () {
	lastScrollY = window.scrollY;
})

$('.collapse.remember-last-pos').on('hide.bs.collapse', function () {
	window.scrollTo({
		top: lastScrollY,
		behavior: 'smooth'
	})
})



//SimpleAnimation
var controller = new ScrollMagic.Controller();

$(".stagger-tween").each(function() {

  var stagger = TweenMax.staggerFrom($(this).find(".stagger-tween-item"), 1.2, {
    y: 60,
    autoAlpha: 0,
    delay: 0,
    ease: Power4.easeOut
  },
  0.18);

  var scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -140,
          reverse:true
      })
    .setTween(stagger)
    .addTo(controller);
});


$(".delaystagger-tween").each(function() {

  var stagger = TweenMax.staggerFrom($(this).find(".delaystagger-tween-item"), 0.85, {
    scaleX: 3,
    scaleY: 3,
    autoAlpha: 0,
    delay: .65,
    ease: Power3.easeIn
  },
  0.4);

  var scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -140,
          reverse:true
      })
    .setTween(stagger)
    .addTo(controller);
});


$(".slider-tween").each(function() {

  var stagger = TweenMax.staggerFrom($(this).find(".slider-tween-item"), 1, {
    y: 60,
    autoAlpha: 0,
    delay: 0,
    ease: Power4.easeOut
  },
  0.15);

  var scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -140,
          reverse:true
      })
    .setTween(stagger)
    .addTo(controller);
});



$(".content-tween").each(function() {

  var stagger = TweenMax.staggerFrom($(this).find(".content-tween-item"), 1.2, {
    y: 50,
    autoAlpha: 0,
    delay: 0,
    ease: Power4.easeOut
  },
  0.18);

  var scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -120,
          reverse:false
      })
    .setTween(stagger)
    .addTo(controller);
});





//New Slider setting for the digital economy
$('.digitaleconomy-single').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  // asNavFor: '.contentdigitaleco',
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 100,
  dots: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 1,
        infinite: false,
      }
    }
  ]
}).slickAnimation();

$('.digitaleconomyaction')
  .on('init', function(event, slick) {
    $('.digitaleconomyaction .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 11,
    slidesToScroll: 11,
    dots: false,
    arrows: true,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 767,
        settings: {
          // infinite: false,
          // arrows: false,
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      }
    ]
  });

$('.digitaleconomy-single').on('afterChange', function(event, slick, currentSlide) {
  $('.digitaleconomyaction').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.digitaleconomyaction .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.digitaleconomyaction .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.digitaleconomyaction').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');
  $('.digitaleconomy-single').slick('slickGoTo', goToSingleSlide);
});





//New Slider setting for the Benefits Overview
$('.benefitsoverview-single').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  // asNavFor: '.benefitsoverviewaction',
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 100,
  adaptiveHeight: true,
  dots: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 1,
        infinite: false
      }
    }
  ]
}).slickAnimation();

$('.benefitsoverviewaction')
  .on('init', function(event, slick) {
    $('.benefitsoverviewaction .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 11,
    slidesToScroll: 11,
    dots: false,
    arrows: true,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 767,
        settings: {
          // infinite: false,
          // arrows: false,
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      }
    ]
  });

$('.benefitsoverview-single').on('afterChange', function(event, slick, currentSlide) {
  $('.benefitsoverviewaction').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.benefitsoverviewaction .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.benefitsoverviewaction .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.benefitsoverviewaction').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');
  $('.benefitsoverview-single').slick('slickGoTo', goToSingleSlide);
});

