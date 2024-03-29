var v = document.getElementById("WhiteWed");
var icon2 = document.getElementById("icon02");

icon2.onclick = function() {
  if (v.muted) {
    v.muted = false;
    icon2.src = "volume-up-4-64.png";
  } else {
    v.muted = true;
    icon2.src = "mute-64.png";
  }
}

var icon = document.getElementById("icon01");
icon.onclick = function() {
  if (v.paused) {
    v.play();
    icon.src = "pause-64.png";
  } else {
    v.pause();
    icon.src = "play-64.png";
 }
}