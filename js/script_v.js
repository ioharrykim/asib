// 비디오

// 각 변수들을 선언.
var navUserAgent = navigator.userAgent,
    innerVideo = document.querySelectorAll(".active > div > video"),
    carousel = $('#carousel');


    //userAgent에 대한 공부. Chrome, Mozila(Firefox) ...
if(!/isChrome/i.test(navUserAgent)) {
    $(innerVideo).get(0).play();
  
    // on과 bind : 이벤트 처리를 간단하게 할 수 있다. 둘의 기능도 동일하고 사용하는 형태도 동일하지만 jQuery 1.7 이후부터는 on을 사용하도록 권장하고 있다.
    carousel.on('slide.bs.carousel', function(e) {
        // Video 태그를 찾아주고 컨트롤 및 플레이. 
        // $(e.relatedTarget).find('video').play(); 의 식으로 실행했을 때 찾을 수 없다는 오류가 발생한다.
        // get(0) 을 중간에 붙여 아래와 같이 식을 작성했더니 정상 실행이 되었다. 
      $(e.relatedTarget).find('video').get(0).play();
    });
  
    // 슬라이드를 넘겼을 때 이전 비디오 일시정지.
    carousel.on('slid.bs.carousel', function(e) {
      $('video').not('.active > div > video').each(function() {
        $(this).get(0).pause();
      });
    });
  }