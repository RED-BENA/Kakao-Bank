$(document).ready(function() {
  if ($(window).width() < 1024) {
    $('.js-timeline__year').css("margin-left", "-110%");
    //data-offset-left의 value 만큼 (10%, -30%, -70%, -110%)
  } else {
    $('.js-timeline__year').css("margin-left", "0%");
    //data-offset-left의 value 만큼 (0%, -10%, -20%, -30%)
  }

  $('.js-timeline__year__item').click(function() {
    if ($(window).width() < 1024) {
      $('.js-timeline__year').css("margin-left", $(this).attr("offset-left"));
      //data-offset-left의 value 만큼 (10%, -30%, -70%, -110%)
    }

    $('.js-timeline__year__item').removeClass("is_selected is_unread");
    // 모든 year__item에서 is_selected, id_unread 클래스 제거

    $(this).addClass("is_selected")
    // is_selected (현재 year-button) 클래스 추가, unread 클래스 제거

    $('.is_selected ~ .js-timeline__year__item').addClass('is_unread');
    // 현재 year-button 이후에 있는 year-button 전부 unread 상태로 변경

    $('.js-timeline__info__item').removeClass('active');
    // 모든 info__item에서 active 클래스 제거

    $('.js-timeline__info__item:nth-child('+($(this).index()+1)+')').addClass('active');
    // year__item의 인덱스와 동일한 info__item의 display를 block으로 변경
  })
})
