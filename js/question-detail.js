$(document).ready(function() {
  let question_count = 10;

  $('.js-question-detail__list__item:nth-child(-n+'+question_count+')').addClass('active');
  // 처음 10개 질문 active

  $('.js-more-button').click(function(e) { // 더보기 버튼을 눌렀을 때
    e.preventDefault();

    question_count += 10;

    $('.js-question-detail__list__item').removeClass('active');
    $('.js-question-detail__list__item:nth-child(-n+'+question_count+')').addClass('active');

    if ($('.js-question-detail__list__item.active').length < question_count) {
      $(this).addClass('end');
    }
  });
});
