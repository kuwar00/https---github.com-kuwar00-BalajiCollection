var video = document.getElementById("Balajivideo");
var icon2 = document.getElementById("icon2");

icon2.onclick = function() {
  if (video.muted) {
    video.muted = false;
    icon2.src = "volume-up-4-64.png";
  } else {
    video.muted = true;
    icon2.src = "mute-64.png";
  }
}

var icon = document.getElementById("icon1");
icon.onclick = function() {
  if (video.paused) {
    video.play();
    icon.src = "pause-64.png";
  } else {
    video.pause();
    icon.src = "play-64.png";
  }
  }