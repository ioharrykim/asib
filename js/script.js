$(document).ready(function(){
    for (var i=1; i <= $('.slider__slide').length; i++){
      $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
    }
    setTimeout(function(){
      $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);
  })
  
  function goToSlide(number){
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
  }
  
  $('.slider__next, .go-to-next').on('click', function(){
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++
    if (currentSlide > totalSlides){
      currentSlide = 1;
    }
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


// 비디오

if(!/iPhone/i.test(navigator.userAgent)) {
  $('.active > div > video').get(0).play();

  $('#carousel').bind('slide.bs.carousel', function(e) {
    $(e.relatedTarget).find('video').get(0).play();
  });

  $('#carousel').bind('slid.bs.carousel', function(e) {
    $('video').not('.active > div > video').each(function() {
      $(this).get(0).pause();
    });
  });
}