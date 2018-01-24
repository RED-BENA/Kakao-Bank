$(document).ready(function() {
  $('.js-tab-menu__header__item').click(function() {
    if ($(this).index() == 0) {
      $('.js-tab-menu__header__item').removeClass('active');
      $(this).addClass('active');

      $('.tab-menu > div').removeClass('on');
      $('.js-tab-menu__notice').addClass('on');
    } else if ($(this).index() == 1) {
      $('.js-tab-menu__header__item').removeClass('active');
      $(this).addClass('active');

      $('.tab-menu > div').removeClass('on');
      $('.js-tab-menu__event').addClass('on');
    }
  })
});
