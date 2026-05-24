const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("open");
});

  document.querySelectorAll('.faq__container details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        document.querySelectorAll('.faq__container details').forEach(other => {
          if (other !== detail) other.removeAttribute('open');
        });
      }
    });
  });