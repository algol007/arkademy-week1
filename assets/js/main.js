const sidebarButton = document.querySelector(".sidebar-button");
const toggleButton = document.querySelector(".toggle-button");
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");
const slideShow = document.querySelector(".sliderrr");

function sidebarHide() {
  const sidebar = document.querySelector(".sidebar");
  const fullWidth = document.querySelector(".dashboard-wrap");

  sidebar.classList.toggle("show-sidebar");
  fullWidth.style.paddingLeft = "0";
  toggleButton.style.display = "block";
  sidebar.style.boxShadow = "none";
  buttonPrev.style.left = "30px";
  // console.log("hello");
}

function sidebarShow() {
  const sidebar = document.querySelector(".sidebar");
  const halfWidth = document.querySelector(".dashboard-wrap");

  sidebar.classList.toggle("show-sidebar");
  halfWidth.style.paddingLeft = "300px";
  toggleButton.style.display = "none";
  sidebar.style.boxShadow = "0 6px 20px #424242";
  buttonPrev.style.left = "330px";
  // console.log("hello");
}

sidebarButton.addEventListener("click", sidebarHide);
toggleButton.addEventListener("click", sidebarShow);
buttonPrev.addEventListener("click", console.log("hello"));
buttonNext.addEventListener("click", console.log("hello"));

// Carousel

let a = -150;
let b = -1830;

function goLeft() {
  a = a + -420;

  const margin = a + "px";
  slideShow.style.marginLeft = margin;
  slideShow.style.transition = "1s";
  // i = i + -150;
  if (a < -1800) {
    a = -150;
  }
  console.log(margin);
}

function goRight() {
  b = b + 420;

  const margin = b + "px";
  slideShow.style.marginLeft = margin;
  slideShow.style.transition = "1s";
  // i = i + -150;
  if (b > -160) {
    b = -1830;
  }
  console.log(margin);
}

buttonPrev.addEventListener("click", goLeft);
buttonNext.addEventListener("click", goRight);

function successInfo() {
  Swal.fire({
    icon: "success",
    html: "Data <b>Dilan 1990</b> berhasil dihapus!",
    showConfirmButton: false,
    timer: 3000
  });
}
