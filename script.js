let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(() => {
  nextSlide();
}, 5000);

document.querySelector(".menu-toggle").addEventListener("click", () => {
  alert("Menu belum diatur. Tambahkan navigasi jika diperlukan.");
});
