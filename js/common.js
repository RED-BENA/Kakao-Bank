$(document).ready(function() {
  $('html, .js-slide-menu__header__close, .js-slide-menu__header__logo').click(function(e) {
    // 메뉴 닫기

    e.stopPropagation();
    $('.js-dim-bg').hide();

    if ($(window).width() < 1024) {
      $('.js-slide-menu--mobile').slideUp(200);
    } else {
      $('.js-slide-menu--pc').slideUp(200);
    }
  });

  $('.js-header__hamburger').click(function(e) {
    // 메뉴 열기
    e.stopPropagation();
    $('.js-dim-bg').show();

    if ($(window).width() < 1024) {
      $('.js-slide-menu--mobile').slideDown(200);
      $('html').css('overflow', 'hidden');
    } else {
      $('.js-slide-menu--pc').slideDown(200);
      $('html').css('overflow', 'scroll');
    }
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() >= 120) {
      $('.js-top-button').addClass('active');
    } else {
      $('.js-top-button').removeClass('active');
    }
  });
})
