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

function scrollToSection() {
  const selector = document.getElementById("year-selector");
  const selectedValue = selector.value;
  const section = document.getElementById(selectedValue);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    selector.selectedIndex = 0; // Reset kembali ke default
  }
}

document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });

  card.addEventListener("touchstart", handleTouchStart, false);
  card.addEventListener("touchmove", handleTouchMove, false);

  let xDown = null;

  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
  }

  function handleTouchMove(evt) {
    if (!xDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 0) {
      card.classList.toggle("flipped");
    }

    xDown = null;
  }
});

var fontSize = 40;
if (window.screen.width > 700) fontSize = 55;
else if (window.screen.width > 1200) fontSize = 80;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
