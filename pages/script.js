const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-bar");

console.log(menu, nav);

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("open");
});