
// console.log("hlo");
var video = document.getElementById("men'sWearAccessoryVideo-whiteWedding");
var icon02 = document.getElementById("Menicon02-whiteWedding");
var icon01 = document.getElementById("MenIcon-whiteWedding");
icon02.onclick = function() {
  if (video.muted) {
    video.muted = false;
    icon02.src = "volume-up-4-64.png";
  } else {
    video.muted = true;
    icon02.src = "mute-64.png";
  }
}
icon01.onclick = function() {
    if (video.paused) {
      video.play();
      icon01.src = "pause-64.png";
    } else {
      video.pause();
      icon01.src = "play-64.png";
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