'use strict';
console.log('test');
$(document).ready(function() {
  let i = 0;

  const showNextImage = () => {
    let extension;
    i++;

    if (i > 3) {
      i = 1;
    }

    if (i === 2) {
      $('#image-carousel').css('background-position', 'center 0');
    } else if (i === 3) {
      $('#image-carousel').css('background-position', 'center center');
    }

    $('#image-carousel').css('background-image', `url(../img/banner-images/image${i}.jpg)`);
  }

  window.setInterval(function(){
    showNextImage();
  }, 4000);
});