$(document).ready(function() {
  var scrollBottom = 0;
  var day = Math.round($('.js-reasonable-saving__title').offset().top+$('.js-reasonable-saving__title').height());
  var night = Math.round($('.js-loan__title').offset().top+$('.js-loan__title').height());
  $(document).scroll(function() {
    scrollBottom = $(this).scrollTop()+$(window).height();

    // console.log(scrollBottom);

    if (night <= scrollBottom) { // 일정 스크롤이 넘어가면 (아래)
      $('.js-loan--night').addClass('active'); // 하늘이 어두워짐
      $('.js-loan__sun').addClass('shadow'); // 태양에 그림자 생김
      $('.js-loan__moon').addClass('rise'); // 달이 뜸
    }

    if (day >= scrollBottom) { // 일정 스크롤이 넘어가면 (위)
      $('.js-loan--night').removeClass('active');
      $('.js-loan__sun').removeClass('shadow');
      $('.js-loan__moon').removeClass('rise');
    }
  })
});
