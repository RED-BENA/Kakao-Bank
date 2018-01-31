$(document).ready(function() {
  console.log("!");
  var scrollBottom = scrollBottom = $(this).scrollTop()+$(window).height();;
  var day = Math.round($('.js-reasonable-saving__title').offset().top);
  var night = Math.round($('.js-loan__title').offset().top+$('.js-loan__title').height());

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
});
