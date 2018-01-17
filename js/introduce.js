$(document).ready(function() {
  let slideItem = []; // item 배열
  let currentIndex = 0; // 현재 item의 인덱스

  $('.js-number--current').html(currentIndex+1); // 현재 순서 초기화

  $('.js-introduce-kakaobank__slide-show__item').each(function(index, value) {
    slideItem.push($(value)); // item을 배열에 추가한다
  });

  $('.js-prev-arrow').click(function() { // 이전 버튼을 클릭했을 때
    $('.js-slide-show-logo').removeClass('pass');
    $('.js-introduce-kakaobank__slide-show__item').removeClass('pass on');
    // 먼저 모든 item의 pass와 on 클래스 제거 (초기화)

    if (currentIndex == 0) { // 현재 item의 index가 맨처음일경우
      slideItem[slideItem.length - 1].addClass('on'); // 맨마지막 item으로
    } else {
      slideItem[currentIndex - 1].addClass('on'); // 이전 아이템으로
    }

    $('.js-introduce-kakaobank__slide-show__item').each(function(index, value) {
      if ($(this).hasClass('on')) { // on 클래스가 있을 경우 (현재 item일 경우)
        currentIndex = index;
        $('.js-number--current').html(currentIndex+1);
      }
    })

    slideItem[currentIndex].addClass('pass'); // 현재 item에 pass 클래스 추가
    $('.js-slide-show-logo').addClass('pass');
  });

  $('.js-next-arrow').click(function() { // 다음 버튼을 클릭했을 때
    $('.js-slide-show-logo').removeClass('pass');
    $('.js-introduce-kakaobank__slide-show__item').removeClass('pass on');
    // 먼저 모든 item의 pass와 on 클래스 제거 (초기화)

    if (currentIndex == slideItem.length-1) { // 현재 item의 index가 맨끝일 경우
      slideItem[0].addClass('on'); // 맨처음 item으로
    } else {
      slideItem[currentIndex + 1].addClass('on'); // 다음 아이템으로
    }

    $('.js-introduce-kakaobank__slide-show__item').each(function(index, value) {
      if ($(this).hasClass('on')) { // on 클래스가 있을 경우 (현재 item일 경우)
        currentIndex = index;
        $('.js-number--current').html(currentIndex+1);
      }
    });

    slideItem[currentIndex].addClass('pass'); // 현재 item에 pass 클래스 추가
    $('.js-slide-show-logo').addClass('pass');
  });
});
