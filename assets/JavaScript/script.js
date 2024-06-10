// Menu para tablets e smartphones

window.matchMedia("(max-width: 800px)");

document
  .querySelector("img.menu-opener")
  .addEventListener("click", function () {
    if (document.querySelector("nav").style.display === "none") {
      document.querySelector("nav").style.display = "block";
    } else {
      document.querySelector("nav").style.display = "none";
    }
  });

// Rolagem suave da barra de navegação

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Botão de voltar ao topo

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
