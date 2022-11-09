  $(window).on('load' ,function() {
      $('.lds-roller').fadeOut(1000);
  });

  $(window).on('load' ,function() {
      $('.all-div').fadeOut(2000);
  });

  var video = document.getElementById("videos");
  video.addEventListener("canplay", function() {
    setTimeout(function() {
      video.play();
    }, 2000);
  });

  window.addEventListener('scroll' , function() {
    let header = this.document.querySelector('.parent-header');
    header.classList.toggle('sticky', window.screenX > 0);
  });
