// Storing the toggle containers:

const btnClose = document.querySelector(".btn-close");
const toggle2 = document.querySelector(".toggle2");

btnClose.addEventListener("click", function () {
  btnClose.classList.toggle("hide");
});

// Sidebar

// Open side menu
function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.querySelector(".open-side").style.display = "none";
}

// Close side menu
function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.querySelector(".open-side").style.display = "block";
}
