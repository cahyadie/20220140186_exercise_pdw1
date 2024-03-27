var orderBtn = document.getElementById("order-btn");

// Ketika tombol Order diklik
orderBtn.addEventListener("click", function () {
  // Tampilkan alert
  alert("Terima kasih atas pesanan Anda!");
});

function geserKiri() {
  var konten = document.querySelector(".konten");
  konten.style.transform = "translateX(-100%)";
}
