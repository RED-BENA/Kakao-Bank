$(document).ready(function() {
  $('.js-timeline__year__item').click(function() {
    $('.js-timeline__year').css("margin-left", $(this).attr("data-offset-left"));
    //data-offset-left의 value 만큼 (10%, -30%, -70%, -110%)

    $('.js-timeline__year__item').removeClass("is_selected");
    // 모든 year__item에서 is_selected 클래스 제거

    $(this).addClass("is_selected").removeClass("is_unread");
    // is_selected (현재 year-button) 클래스 추가, unread 클래스 제거

    $('.is_selected ~ .js-timeline__year__item').addClass('is_unread');
    // 현재 year-button 이후에 있는 year-button 전부 unread 상태로 변경

    $('.js-timeline__info__item').removeClass('active');
    // 모든 info__item에서 active 클래스 제거

    $('.js-timeline__info__item:nth-child('+($(this).index()+1)+')').addClass('active');
    // year__item의 인덱스와 동일한 info__item의 display를 block으로 변경
  })
})
