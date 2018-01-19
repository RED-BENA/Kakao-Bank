$(document).ready(function() {
  $('.js-timeline__year__item').click(function() {
    $('.js-timeline__year').css("margin-left", $(this).attr("data-offset-left"));
    //data-offset-left의 value 만큼

    $('.js-timeline__year__item').removeClass("is_selected");
    $(this).addClass("is_selected").removeClass("is_unread");
    $('.is_selected ~ .js-timeline__year__item').addClass('is_unread');

    $('.js-timeline__info__item').removeClass('active');
    $('.js-timeline__info__item:nth-child('+($(this).index()+1)+')').addClass('active');
  })
})
