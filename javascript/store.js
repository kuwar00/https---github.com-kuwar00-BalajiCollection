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