$(document).ready(function() {
  $('.often-question').addClass('open');

  $('.js-often-question__list--detail__item').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
      $('.js-often-question__list--detail__answer').slideUp(200);
      $(this).next('.js-often-question__list--detail__answer').slideDown(200);
    } else {
      $(this).next('.js-often-question__list--detail__answer').slideUp(200);
    }
  })
});
