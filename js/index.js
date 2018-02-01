$(document).ready(function() {
  var scrollBottom = scrollBottom = $(this).scrollTop()+$(window).height();;
  var day = Math.round($('.js-reasonable-saving__title').offset().top);
  var night = Math.round($('.js-loan__title').offset().top+$('.js-loan__title').height());
  var slider_length = 0;
  var card_width = $('.js-check-card__slider__item').outerWidth(true); // check-card__slider__item의 너비
  var current_margin = 0;

  if (night <= scrollBottom) { // 일정 스크롤이 넘어가면 (아래)
    $('.js-loan--night').addClass('active'); // 하늘이 어두워짐
    $('.js-loan__sun').addClass('shadow'); // 태양에 그림자 생김
    $('.js-loan__moon').addClass('rise'); // 달이 뜸
    $('.js-loan__star').addClass('rise');
  }

  if (day >= scrollBottom) { // 일정 스크롤이 넘어가면 (위)
    $('.js-loan--night').removeClass('active');
    $('.js-loan__sun').removeClass('shadow');
    $('.js-loan__moon').removeClass('rise');
    $('.js-loan__star').removeClass('rise');
  }

  $('.js-check-card__slider__item').each(function() {
    slider_length += $(this).outerWidth(true);
  });

  // 체크카드 슬라이더의 width 세팅
  $('.js-check-card__slider').css('width', slider_length+'px');

  $(document).scroll(function() {
    scrollBottom = $(this).scrollTop()+$(window).height();

    if (night <= scrollBottom) { // 일정 스크롤이 넘어가면 (아래)
      $('.js-loan--night').addClass('active'); // 하늘이 어두워짐
      $('.js-loan__sun').addClass('shadow'); // 태양에 그림자 생김
      $('.js-loan__moon').addClass('rise'); // 달이 뜸
      $('.js-loan__star').addClass('rise');
    }

    if (day >= scrollBottom) { // 일정 스크롤이 넘어가면 (위)
      $('.js-loan--night').removeClass('active');
      $('.js-loan__sun').removeClass('shadow');
      $('.js-loan__moon').removeClass('rise');
      $('.js-loan__star').removeClass('rise');
    }
  });

  // active된 카드를 제외한 다른 카드를 클릭했을 때
  $('.js-check-card__slider__item:not(.active)').click(function() {

  });

  // 이전 버튼을 클릭했을 때
  $('.js-check-card__prev-arrow').click(function() {
    current_margin += card_width;
    // current_margin += 240;
    $('.js-check-card__slider').css('margin-left', current_margin);
    $('.js-check-card__slider__item.active').prev().addClass('active');
    $('.js-check-card__slider__item.active').next().removeClass('active');
  });

  // 다음 버튼을 클릭했을 때
  $('.js-check-card__next-arrow').click(function() {
    current_margin += (-1 * card_width);
    // current_margin += (-240);
    $('.js-check-card__slider').css('margin-left', current_margin);
    $('.js-check-card__slider__item.active').next().addClass('active');
    $('.js-check-card__slider__item.active').prev().removeClass('active');
  })
});
