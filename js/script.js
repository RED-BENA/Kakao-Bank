$(document).ready(function() {
  var scrollBottom = 0;
  var day = Math.round($('.js-reasonable-saving__title').offset().top+$('.js-reasonable-saving__title').height());
  var night = Math.round($('.js-loan__title').offset().top+$('.js-loan__title').height());
  $(document).scroll(function() {
    scrollBottom = $(this).scrollTop()+$(window).height();

    // console.log(scrollBottom);

    if (night <= scrollBottom) { // 일정 스크롤이 넘어가면 (아래)
      $('.js-loan--night').addClass('active');
    }

    if (day >= scrollBottom) { // 일정 스크롤이 넘어가면 (위)
      $('.js-loan--night').removeClass('active');
    }
  })
});
