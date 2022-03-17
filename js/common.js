$(function(){
  // scroll down
  $(window).on('load resize',function(){
    // get windowHeight
    var targetY = $(window).height();

    // scroll down automatically by windowHeight
    $('#scroll_d').on('click',function(){
      $("html, body").stop().animate({scrollTop: targetY}, 1000, 'swing');
      return false;
    });
  });

  //  // fade in/out
  //  const scroll_d = $('#scroll_d');
  //  $(window).on('scroll', function () {
  //    var winHeight = $(window).height();
  //    if ($(this).scrollTop() > winHeight) {
  //      scroll_d.fadeOut();
  //    }
  //  });

  // scroll back top
  $('a[href^="#"]').not('.dummy_link').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // fade in/out
  const scroll_t = $('#page_top');
  scroll_t.hide(); 
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      scroll_t.fadeIn();
    } else {
      scroll_t.fadeOut();
    }
  });

  $(document).ready(function() {
    $(".slider").slick({
      infinite: true,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 3500,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    }).on({ // add class to scale while showing
      beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
      },
      afterChange: function() {
        $(".preve-slide", this).removeClass("preve-slide slide-animation");
      }
    });
    $(".slider").find(".slick-slide").eq(0).addClass("slide-animation");
  });

  AOS.init({
    duration: 1600,
    once: true
  })

  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Initialize
  setHeight();
  window.addEventListener('resize', setHeight);

  //To transform hamberger menu
  function FixedAnime() {
    //to avoid from disappearing close btn
    if($(".menu_btn").hasClass("active")) return;

    if ($('.slider').length) {
      var headerH = $('.slider').outerHeight(true);
      var scroll = $(window).scrollTop();
      if (scroll >= headerH){
        $('.menu_btn').addClass('fadeDown');
      }else{
        $('.menu_btn').removeClass('fadeDown');
      }
    }else{
      $('.menu_btn').addClass('fadeDown');
    }
  }

  $(window).on('load', function () {
  	FixedAnime();
  });
  $(window).scroll(function () {
    FixedAnime();
  });

  toastr.options = {
    "closeButton": true,
    "positionClass": "toast-bottom-full-width",
    "timeOut": "3500",
    "preventDuplicates": true,
  };

  $('a.dummy_link').click(function(event){
    toastr.info('リンク先のページは当課題では制作していません。<br>制作したページはこちら：<a href="index.html">HOME</a>、<a href="about.html">About Us</a>、<a href="privacy_policy.html">Privacy Policy</a>');
    // リンク遷移は無効にする
    event.preventDefault();
  });

  $(".menu_btn").click(function () {
    $(this).toggleClass('active');
    $(".sp_menu").toggleClass('panelactive');
  });

  $("#g-navi li a").click(function () {
    $(".menu_btn").removeClass('active');
    $(".sp_menu").removeClass('panelactive');
  });

  // rellax
  var rellax = new Rellax('.rellax');
});
