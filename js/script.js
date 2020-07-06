// 이미지 슬라이드

// 각 변수들을 선언.
var currentSlide = Number($('.slider__slide--active').data('slide')),
    totalSlides = $('.slider__slide').length, // 전체 슬라이드는 총 3개.
    sSlides = $('.slider__slide'),
    sIndicators = $('.slider__indicators'),
    sWraps = $('.slider__wrap'),
    goNext = $('.go_next'); // Next ----> 부분을 담고 있는 class.


$(document).ready(function(){
  // data-slide 3까지 존재.
  for (var i=1; i <= sSlides.length; i++) {
    sIndicators.append('<div class="slider__indicator" data-slide="'+i+'"></div>');
    }
    // 화면 전환시 백그라운드
    setTimeout(function() {
      sWraps.addClass('slider__wrap--hacked');
    }, 1000);
  });
  
// 슬라이드 이동을 위한 goToSlide 함수 선언.
function goToSlide(number){
  sSlides.removeClass('slider__slide--active');
  $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

// goNext 클래스를 클릭했을 때 현재 슬라이드의 data값이 올라간다.
goNext.on('click', function(){
  currentSlide++;
  // 만약 현재 슬라이드가 전체 슬라이드 (3개)보다 커질 경우 현재 슬라이드의 값을 다시 1로 바꿔주어 3페이지의 next 는 다시 1페이지가 되도록 한다.
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }
  // goToSlide 함수 실행. 멤버변수로 currentSlide를 준다.
  goToSlide(currentSlide);
})



  

// 음악

var musicPlay1 = document.getElementById("slider1");
var musicPlay2 = document.getElementById("slider2");
var musicPlay3 = document.getElementById("slider3");

musicPlay1.addEventListener("mouseover", play1);
function play1() {
  console.log("mouseover");
  var music1 = document.getElementById("audio1");
  music1.play();
}
musicPlay1.addEventListener("mouseleave", stop1);
function stop1() {
  console.log("mouseleave");
  var music1 = document.getElementById("audio1");
  music1.pause();
}
musicPlay2.addEventListener("mouseover", play2);
function play2() {
  console.log("mouseover");
  var music2 = document.getElementById("audio2");
  music2.play();
}
musicPlay2.addEventListener("mouseleave", stop2);
function stop2() {
  console.log("mouseleave");
  var music2 = document.getElementById("audio2");
  music2.pause();
}
musicPlay3.addEventListener("mouseover", play3);
function play3() {
  console.log("mouseover");
  var music3 = document.getElementById("audio3");
  music3.play();
}
musicPlay3.addEventListener("mouseleave", stop3);
function stop3() {
  console.log("mouseleave");
  var music3 = document.getElementById("audio3");
  music3.pause();
}
