// Scroll Navbar
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

// Mengambil tombol
const scrollToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  // Jika scroll lebih dari 200px, tampilkan tombol
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "flex"; // Tampilkan tombol
  } else {
    scrollToTopButton.style.display = "none"; // Sembunyikan tombol
  }
});

// Menambahkan fungsi untuk scroll ke atas saat tombol diklik
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan efek halus
});

// Contact Me
(function () {
  emailjs.init("1xm1Op_gPLGhjTZLf"); // Ganti dengan User ID EmailJS Anda
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_vtpotwd", "template_t3lw4vs", this).then(
      function () {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          location.reload();
        });
      },
      function (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log("Error: ", error);
      }
    );
  });
