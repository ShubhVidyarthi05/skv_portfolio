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
    link.addEventListener("mouseenter", () => {
      tm.play();
    });

    link.addEventListener("mouseleave", () => {
      tm.reverse();
    });
  });
});
// Mouse movement tracker
const magneto = document.getElementById("magneto");

magneto.addEventListener('mouseenter', function(){
  trailer.style.backgroundColor = '#cd2c2c';
  trailer.style.width = '200px';
  trailer.style.height = '200px';
  trailer.style.borderRadius = '50%';
});

magneto.addEventListener('mouseleave', function(){
  trailer.style.backgroundColor = '#ffffff';
trailer.style.width = '15px';
trailer.style.height = '15px';
trailer.style.borderRadius = '50%';
});


