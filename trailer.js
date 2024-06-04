//Mouse movement tracker 
const trailer = document.getElementById('trailer');

window.onmousemove = e =>{
    const x = e.clientX - trailer.offsetWidth/2,
          y = e.clientY - trailer.offsetHeight/2;

   
    const keyframes = {
        transform : `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, {
        duration:500,
        fill:'forwards'
    });
}


document.addEventListener("DOMContentLoaded", function() {
  const trailer = document.getElementById("trailer");

  // Create a GSAP timeline
  const tm = gsap.timeline({ paused: true });
  tm.to(trailer, { duration: 0.1, width: "50px", height: "50px", 'border-radius': '50%'});

  // Add event listeners to all links on the page
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseenter", (event) => {
      if (event.target.classList.contains("animate_link")) {
      tm.play();
      }
    });

    link.addEventListener("mouseleave", (event) => {
      if (event.target.classList.contains("animate_link")) {
      tm.reverse();
      }
    });
  });
});
// Mouse movement tracker

// document.getElementById('magneto').addEventListener('mouseenter', (e) => {
//   const background = document.querySelector('.message');
//   const rect = background.getBoundingClientRect();
//   const x = ((e.clientX - rect.left) / rect.width) * 100;
//   const y = ((e.clientY - rect.top) / rect.height) * 100;
  
//   background.style.clipPath = `circle(0% at ${x}% ${y}%)`;
//   background.style.backgroundColor = 'red';

//   requestAnimationFrame(() => {
//       background.style.clipPath = `circle(150% at ${x}% ${y}%)`;
//   });
// });

// document.getElementById('magneto').addEventListener('mouseleave', () => {
//   const background = document.querySelector('.message');
//   background.style.backgroundColor = 'blue';
//   background.style.clipPath = `circle(0% at 50% 50%)`;
// });

const trailerElement = document.getElementById('trailer');

function removeTrailerOnMobile() {
  if (window.innerWidth <= 768) {
    trailerElement.remove();
  }
}

removeTrailerOnMobile();


