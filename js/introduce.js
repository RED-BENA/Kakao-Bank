$(document).ready(function() {
  let item = $('.js-introduce-kakaobank__slide-show__item')
  let slideItems = []; // item 배열
  let currentIndex = 0; // 현재 item의 인덱스
  let movies_width = 0;
  let current_margin = 0;

  /* introduce-movies__slide-show의 width setting */
  $('.js-slide-show__item').each(function() {
    movies_width += $(this).outerWidth(true);
  });

  $('.js-slide-show').css('width', movies_width+'px');

  $('.js-number--current').html(currentIndex+1); // 현재 순서 초기화

  item.each(function(index, value) {
    slideItems.push($(value)); // item을 배열에 추가한다
  });

  /* introduce-kakaobank의 slide-show가 3초마다 다음 장면으로 넘어가도록 구현 */
  setInterval(function() {
    // 모든 item의 pass와 on 클래스 제거, 로고의 clear 클래스 제거 (초기화)
    $('.js-slide-show__logo').removeClass('clear');
    item.removeClass('pass on');

    if (currentIndex == slideItems.length-1) { // 현재 item의 index가 맨끝일 경우
      slideItems[0].addClass('on'); // 맨처음 item으로
    } else {
      slideItems[currentIndex + 1].addClass('on'); // 다음 아이템으로
    }

    item.each(function(index, value) {
      if ($(this).hasClass('on')) { // on 클래스가 있을 경우 (현재 item일 경우)
        currentIndex = index;
        $('.js-number--current').html(currentIndex+1);
      }
    })

    slideItems[currentIndex].addClass('pass'); // 현재 item에 pass 클래스 추가
    $('.js-slide-show__logo').addClass('clear');
    setTimeout(function() {
      $('.js-slide-show__logo').removeClass('clear');
    }, 400);
  }, 3000);

  /* introduce-kakaobank의 slide-show에서 이전/다음 버튼을 클릭했을 때 */
  $('.js-prev-arrow, .js-next-arrow').click(function() {

    // 모든 item의 pass와 on 클래스 제거, 로고의 clear 클래스 제거 (초기화)
    $('.js-slide-show__logo').removeClass('clear');
    item.removeClass('pass on');

    if ($(this).hasClass('js-prev-arrow')) { // 이전 버튼을 눌렀을 때
      if (currentIndex == 0) { // 현재 item의 index가 맨처음일경우
        slideItems[slideItems.length - 1].addClass('on'); // 맨마지막 item으로
      } else {
        slideItems[currentIndex - 1].addClass('on'); // 이전 아이템으로
      }
    } else { // 다음 버튼을 눌렀을 때
      if (currentIndex == slideItems.length-1) { // 현재 item의 index가 맨끝일 경우
        slideItems[0].addClass('on'); // 맨처음 item으로
      } else {
        slideItems[currentIndex + 1].addClass('on'); // 다음 아이템으로
      }
    }

    item.each(function(index, value) {
      if ($(this).hasClass('on')) { // on 클래스가 있을 경우 (현재 item일 경우)
        currentIndex = index;
        $('.js-number--current').html(currentIndex+1);
      }
    })

    slideItems[currentIndex].addClass('pass'); // 현재 item에 pass 클래스 추가
    $('.js-slide-show__logo').addClass('clear'); // 로고를 투명하게
    setTimeout(function() { // 0.4초 후 clear 클래스 제거
      $('.js-slide-show__logo').removeClass('clear');
    }, 400);
  });

  $('.js-slide-show').on('swipeleft', function(e) {
    let marginLeft = Number($(this).css('margin-left').substring(0, $(this).css('margin-left').length - 2));

    if (marginLeft > -1920) {
      current_margin += (-320);
      console.log(current_margin);

      $(this).css('margin-left', current_margin+"px");
      $('.js-indicator li.active').next().addClass('active');
      $('.js-indicator li.active').prev().removeClass('active');
    }
  });

  $('.js-slide-show').on('swiperight', function(e) {
    let marginLeft = Number($(this).css('margin-left').substring(0, $(this).css('margin-left').length - 2));

    if (marginLeft < 0) {
      current_margin += 320;

      $(this).css('margin-left', current_margin+"px");
      $('.js-indicator li.active').prev().addClass('active');
      $('.js-indicator li.active').next().removeClass('active');
    }
  })
});
