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

const aalsiElement = document.querySelector('.aalsi');

function removeAalsiOnMobile() {
  if (window.innerWidth <= 768) {
    aalsiElement.remove();
  }
}

// Call the function on page load
removeAalsiOnMobile();