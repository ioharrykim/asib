// 비디오

// 각 변수들을 선언.
var navUserAgent = navigator.userAgent,
    innerVideo = document.querySelectorAll(".active > div > video"), // active클래스 내부 div 태그 내부의 video 태그.
    carousel = $('#carousel'); // carousel id값을 가진 요소.


    //userAgent에 대한 공부. Chrome, Mozila(Firefox) ...
    // isChrome, isChromeMobile, isSamsungBrowser, isWindows, isEdge, isIE 등.
    // test() - 찾는 문자열이 들어있는지, 아닌지를 알려준다.
    // var navUserAgent = navigator.userAgent 가 있으면 innerVideo속의 태그를 실행. 
if(!/isChrome/i.test(navUserAgent)) {
    console.log(navUserAgent); // userAgent 확인.
    // $(innerVideo).play(); 의 식으로 실행했을 때 찾을 수 없다는 오류가 발생한다.
    // get(0) 을 중간에 붙여 아래와 같이 식을 작성했더니 정상 실행이 되었다. 
    $(innerVideo).get(0).play();
    console.log("영상play"); // 영상 재생 확인.
    // console.log(innerVideo); 
    // chrome에서 바로 실행이 안되는 것이 autoplay 관련 정책때문인건지?
  
    // on과 bind : 이벤트 처리를 간단하게 할 수 있다. 둘의 기능도 동일하고 사용하는 형태도 동일하지만 jQuery 1.7 이후부터는 on을 사용하도록 권장하고 있다.
    carousel.on('slide.bs.carousel', function(e) {
      // e.preventDefault();

      // Video 태그를 찾아주고 컨트롤 및 플레이. 
      // $(e.relatedTarget).find('video').play(); 의 식으로 실행했을 때 찾을 수 없다는 오류가 발생한다.
      // get(0) 을 중간에 붙여 아래와 같이 식을 작성했더니 정상 실행이 되었다. 
      // e.relatedTarget - 해당 이벤트와 관련된 다른 DOM 요소를 선택.
      $(e.relatedTarget).find('video').get(0).play();
    });
  
    // 슬라이드를 넘겼을 때 이전 비디오 일시정지.
    carousel.on('slid.bs.carousel', function(e) {
      // not()은 선택한 요소 중 특정 선택자를 제외한 요소를 선택합니다. 
      // 현재 슬라이드의 video태그가 아닌 요소들을 전부 선택하여 pause.

      $('video').not('.active > div > video').each(function() {
        $(this).get(0).pause();
      });
    });
    console.log(innerVideo);
  }