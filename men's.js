var video = document.getElementById("men'sWearAccessoryVideo");
var icon2 = document.getElementById("Menicon02");
var icon1 = document.getElementById("MenIcon");
icon2.onclick = function() {
  if (video.muted) {
    video.muted = false;
    icon2.src = "volume-up-4-64.png";
  } else {
    video.muted = true;
    icon2.src = "mute-64.png";
  }
}


icon1.onclick = function() {
  if (video.paused) {
    video.play();
    icon1.src = "pause-64.png";
  } else {
    video.pause();
    icon1.src = "play-64.png";
 }
}
var short = document.getElementById("rightVideo");
var thaticon = document.getElementById("MeniconForPlayVideo");
thaticon.onclick = function() {
  if (short.paused) {
    short.play();
    thaticon.src = "pause-64.png";
  } else {
    short.pause();
    thaticon.src = "play-64.png";
 }
}
var short2 = document.getElementById("manVideo2Mp");
var myicon = document.getElementById("MeniconForPlayVideo2");
myicon.onclick = function() {
  if (short2.paused) {
    short2.play();
    myicon.src = "pause-64.png";
  } else {
    short2.pause();
    myicon.src = "play-64.png";
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