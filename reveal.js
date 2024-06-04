document.addEventListener("DOMContentLoaded", function() {
    const photu = document.querySelector(".photu");
    const aalsi = document.querySelector(".aalsi");

    photu.addEventListener("mouseenter", function() {
        aalsi.style.marginRight = "3em"; // Reveal the text
    });

    photu.addEventListener("mouseleave", function() {
        aalsi.style.marginRight = "-17em"; // Hide the text
    });
});

const tinglesElement = document.querySelector('.aalsi');

function removeTinglesOnMobile() {
  if (window.innerWidth <= 768) {
    tinglesElement.remove();
  }
}

// Call the function on page load
removeTinglesOnMobile();