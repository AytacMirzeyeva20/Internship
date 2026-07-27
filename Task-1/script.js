const menubar = document.getElementById("bar");
const menu = document.getElementById("nav_item");
menubar.addEventListener("click", function () {
    menu.classList.toggle("active");
const expanded = menu.classList.contains("active");
    menubar.setAttribute("aria-expanded", expanded);
});