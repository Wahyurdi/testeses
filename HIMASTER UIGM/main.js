const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("open");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  hamburger.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Atur threshold sesuai kebutuhan
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const pElement = entry.target;
      if (entry.isIntersecting) {
        pElement.classList.add("visible");
      } else {
        pElement.classList.remove("visible");
      }
    });
  }, options);

  // Target elemen <p> yang ingin dipantau
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
  });
});
