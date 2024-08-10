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

let currentIndex = 0;
const galleryInner = document.querySelector(".gallery-inner");
const images = document.querySelectorAll(".gallery-inner img");
let autoScrollInterval;

function updateGallery() {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });
}

// Tambahkan event listener untuk mengulang gambar
galleryInner.addEventListener("transitionend", () => {
  if (currentIndex === images.length - 1) {
    // Reset posisi ke gambar pertama setelah transisi selesai
    currentIndex = 0;
    updateGallery();
  }
});

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  }, 1300); // Jeda sebelum scroll berikutnya
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

function prevImage() {
  stopAutoScroll();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
  setTimeout(startAutoScroll, 5000); // Mulai auto-scroll kembali setelah 5 detik
}

function nextImage() {
  stopAutoScroll();
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
  setTimeout(startAutoScroll, 5000); // Mulai auto-scroll kembali setelah 5 detik
}

// Mulai auto-scroll
startAutoScroll();
updateGallery(); // Tampilkan gambar pertama

// Tombol scroll ke atas
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
