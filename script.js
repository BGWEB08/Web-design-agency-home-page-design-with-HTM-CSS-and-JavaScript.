document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navList = document.querySelector(".navlist");

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navList.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
      navList.classList.remove("active");
    }
  });
});
