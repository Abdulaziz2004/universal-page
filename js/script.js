$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 50,
    nav: true,
    loop: true,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 5000);
  }, 2000);
});
