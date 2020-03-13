const sidebarButton = document.querySelector(".sidebar-button");
const toggleButton = document.querySelector(".toggle-button");
const buttonPrev = document.querySelector(".navigation-pane .prev");
// const main = document.getElementById("main");

function sidebarHide() {
  const sidebar = document.querySelector(".sidebar");
  const fullWidth = document.querySelector(".dashboard-wrap");

  sidebar.classList.toggle("show-sidebar");
  fullWidth.style.paddingLeft = 0;
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
  buttonPrev.style.left = "310px";
  // console.log("hello");
}

sidebarButton.addEventListener("click", sidebarHide);
toggleButton.addEventListener("click", sidebarShow);
// main.addEventListener("click", console.log("hello"));

function successInfo() {
  Swal.fire({
    icon: "success",
    html: "Data <b>Dilan 1990</b> berhasil dihapus!",
    showConfirmButton: false,
    timer: 3000
  });
}
