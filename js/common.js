$(document).ready(function() {
  $('html, .js-slide-menu__header__close, .js-slide-menu__header__logo').click(function(e) {
    // 메뉴 닫기
    e.stopPropagation();
    $('.js-slide-menu').slideUp(200);
    $('.js-dim-bg').hide();
    $('html').css('overflow', 'scroll');
  });

  $('.js-header__hamburger').click(function(e) {
    // 메뉴 열기
    e.stopPropagation();
    $('.js-slide-menu').slideDown(200);
    $('.js-dim-bg').show();
    $('html').css('overflow', 'hidden');
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() >= 120) {
      $('.js-top-button').addClass('active');
    } else {
      $('.js-top-button').removeClass('active');
    }
  });
})
