
var hjvideo = document.getElementById("HJvideo");
var iconAc = document.getElementById("hjiconForPlayVideo");
iconAc.onclick = function() {
    if (hjvideo.paused) {
      hjvideo.play();
      iconAc.src = "../collection-photos/pause-64.png";
    } else {
      hjvideo.pause();
      iconAc.src = "../collection-photos/play-64.png";
   }
  }