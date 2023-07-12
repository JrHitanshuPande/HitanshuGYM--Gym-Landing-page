// nav bar 
function toggleNav() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active");

    const iconr = document.querySelector(".iconbar");
      iconr.style.display = "none";

      
    const iconx = document.querySelector(".iconbarx");
    iconx.style.display = "block";
  }

  //icon
function toggleicon()
{
  const icont = document.querySelector(".iconbar");
  icont.style.display="block";
  const iconx = document.querySelector(".iconbarx");
  iconx.style.display = "none";
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
}