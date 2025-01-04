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
  function toggleDropdown() {
    console.log("Dropdown clicked"); // Debug log
    if (drop.classList.contains("expand")) {
        drop.classList.remove("expand");
        imgToggle.src = "../collection-photos/down.png";
        console.log("Dropdown collapsed"); // Debug log
    } else {
        drop.classList.add("expand");
        imgToggle.src = "../collection-photos/up.png";
        console.log("Dropdown expanded"); // Debug log
    }
}



