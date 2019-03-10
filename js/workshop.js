'use strict';

$(document).ready(function() {
  let i = 0;
  let j = 0;

  const showNextImage = () => {
    i++;
    j++;

    if (i > 3) {
      i = 1;
    }

    if (j > 8) {
      j = 1;
    }

    if (i === 2) {
      $('#image-carousel').css('background-position', 'center 0');
    } else if (i === 3) {
      $('#image-carousel').css('background-position', 'center center');
    }

    $('#image-carousel').css('background-image', `url(../img/banner-images/image${i}.jpg)`);
    $('#image-carousel2').css('background-image', `url(../img/library-images/library-img${j}.jpg)`);
    console.log(j);
  };

  window.setInterval(function(){
    showNextImage();
  }, 4000);
});