var video = document.getElementById("Balajivideo");
var icon2 = document.getElementById("icon2");

icon2.onclick = function() {
  if (video.muted) {
    video.muted = false;
    icon2.src = "../collection-photos/volume-up-4-64.png";
  } else {
    video.muted = true;
    icon2.src = "../collection-photos/mute-64.png";
  }
}

var icon = document.getElementById("icon1");
icon.onclick = function() {
  if (video.paused) {
    video.play();
    icon.src = "../collection-photos/pause-64.png";
  } else {
    video.pause();
    icon.src = "../collection-photos/play-64.png";
  }
  }

var icon3 = document.getElementById("DarkLightMode");
icon3.onclick = function()
  {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
   icon3.src = "../collection-photos/sun.png";
    }
    else{
    icon3.src = "../collection-photos/moon.png";
    }
  }