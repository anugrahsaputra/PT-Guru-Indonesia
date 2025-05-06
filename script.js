let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

function showSlide(index) {
  // Memastikan index tetap dalam rentang yang valid
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  
  // Mengubah posisi slider berdasarkan slideIndex
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

// Auto-slide setiap 5 detik
setInterval(() => {
  nextSlide();
}, 5000);

// Menambahkan EventListener untuk mengatasi klik pada tombol menu (hamburger)
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  // Bisa ditambahkan fungsi menu responsif di sini jika diperlukan
  alert("Menu tombol belum diatur.");
});
