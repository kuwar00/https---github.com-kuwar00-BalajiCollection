var icon = document.getElementById("DarkLightMode");
icon.onclick = function()
  {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
   icon.src = "../collection-photos/sun.png";
    }
    else{
    icon.src = "../collection-photos/moon.png";
    }
  }