// Preloader
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

// Burger
var wrapperMenu = document.querySelector(".wrapper-menu");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");

});
// $(".wrapper-menu").bind("click", function (e) {
//   if ($(e.target).attr("class") != "mobile-nav")
//     $(".wrapper-menu").fadeOut('fast');
// })


// Burger
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
}

// Modal
var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(".modal").bind("click", function (e) {
  if ($(e.target).attr("class") != "modal_content")
    $(".modal").fadeOut('fast');
})

// Cursor