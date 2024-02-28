function toggleNav() {
  const navItems = document.querySelector('.nav-items');
  navItems.classList.toggle('show');
}

let currentSlide = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = "block";

  setTimeout(showSlides, 3000);
}

showSlides();

document.addEventListener("DOMContentLoaded", function () {
  const movingText = document.getElementById("movingText");

  if (movingText) {
    let position = 0;
    let direction = 1;

    function moveText() {
      position += direction;
      movingText.style.transform = `translateX(${position}px)`;

      const maxWidth = window.innerWidth - movingText.offsetWidth;
      if (position > maxWidth || position < 0) {
        direction *= -1;
      }
    }

    setInterval(moveText, 10);
  }
});

function showInfo(title, description) {
  const infoTooltip = document.getElementById("infoTooltip");
  infoTooltip.textContent = `${title}\n${description}`;
  infoTooltip.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const infoTooltip = document.getElementById("infoTooltip");

  circles.forEach(function (circle) {
    circle.addEventListener("mouseout", function () {
      infoTooltip.style.display = "none";
    });
  });
});

function validateForm() {
  var nama = document.getElementById("nama").value;
  var tanggalLahir = document.getElementById("tanggalLahir").value;
  var jenisKelaminElement = document.getElementById("gender");
  var jenisKelamin = jenisKelaminElement ? jenisKelaminElement.value : null;
  var pesan = document.getElementById("pesan").value;

  if (nama && tanggalLahir && jenisKelamin && pesan) {
    // Mengubah jenis kelamin menjadi bahasa Indonesia
    var jenisKelaminText = "";
    if (jenisKelamin === "male") {
      jenisKelaminText = "Laki-laki";
    } else if (jenisKelamin === "female") {
      jenisKelaminText = "Perempuan";
    }

    displayOutput("Nama Lengkap : " + nama + "<br>" +
                  "Tanggal Lahir  : " + tanggalLahir + "<br>" +
                  "Jenis Kelamin: " + jenisKelaminText + "<br>" +
                  "Pesan      : " + pesan);

    // Membersihkan data input setelah menampilkan output
    document.getElementById("nama").value = "";
    document.getElementById("tanggalLahir").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("pesan").value = "";

  } else {
    alert("Harap lengkapi semua kolom!");
  }
}

function displayOutput(output) {
  var outputContainer = document.getElementById("outputContainer");
  outputContainer.innerHTML = "<h2>Output:</h2>" + output;
}

var jenisKelaminText = "";
if (jenisKelamin === "male") {
  jenisKelaminText = "Laki-laki";
} else if (jenisKelamin === "female") {
  jenisKelaminText = "Perempuan";
}





