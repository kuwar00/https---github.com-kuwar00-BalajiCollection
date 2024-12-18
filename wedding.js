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
var icon3 = document.getElementById("DarkLightMode");
icon3.onclick = function()
  {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
   icon3.src = "sun.png";
    }
    else{
    icon3.src = "moon.png";
    }
  }