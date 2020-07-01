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