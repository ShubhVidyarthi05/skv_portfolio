// Logo and dots popup
const tl = gsap.timeline({
    defaults:{y:0, duration:1, ease: 'power3.inOut'}
});
tl.to("[data-animation='text-reveal'] > *",{
});



gsap.from(".logo", {opacity: 0, y:-100, duration:1});
gsap.from(".menu-open", {opacity: 0, y:-100, duration:1});
gsap.from(".svg-background", {opacity: 0, y:-100, duration:1});
gsap.from(".hi", {opacity: 0, y:-100, duration:1});
gsap.from(".arrow", {opacity: 0, y:50, duration:1});
gsap.to(".all-cover-dark", {y:-2000, duration:1.5, ease:"power3.inOut"});
gsap.to(".all-cover-light", {y:-2000, duration:1.5, ease:"power3.inOut"});
gsap.from(".title", {opacity: 0, x:100, duration:1});
gsap.from(".abt", {opacity: 0, y:-100, duration:1.3});
gsap.from(".line", {opacity: 0, scale:0, duration:1, delay:.5, ease:"power3.out"});
gsap.from(".about_text", {opacity: 0, y:100, duration:1});



// MENU
const tingles = document.querySelector(".menu-open");
tingles.addEventListener('mouseenter', () =>{
gsap.to(".tingles", {
    duration: 0.1, // Duration for each step of the animation
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Yoyo effect (reverses the animation)
    ease: "bounce", // Easing function
    keyframes: [
      { transform: "translate(1px, 2px) rotate(0deg)" },
      { transform: "translate(0px, 1px) rotate(-1deg)" },
      { transform: "translate(3px, 2px) rotate(2deg)" },
      { transform: "translate(-1px, 2px) rotate(-1deg)" },
      { transform: "translate(1px, 0px) rotate(0deg)" },
      { transform: "translate(0px, 2px) rotate(1deg)" },
      { transform: "translate(-1px, -2px) rotate(-2deg)" },
      { transform: "translate(3px, -1px) rotate(0deg)" },
      { transform: "translate(1px, 2px) rotate(-1deg)" },
      { transform: "translate(2px, 1px) rotate(1deg)" },
      { transform: "translate(0px, 2px) rotate(3deg)" },
    ],
  });
});

tingles.addEventListener('mouseleave', () =>{
    gsap.killTweensOf(".tingles");
});

const tinglesElement = document.querySelector('.tingles');

function removeTinglesOnMobile() {
  if (window.innerWidth <= 768) {
    tinglesElement.remove();
  }
}

// Call the function on page load
removeTinglesOnMobile();

document.querySelector('.dots').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var body = document.body;
  if (body.classList.contains('no_container')) {
      body.classList.remove('no_container');
  } else {
      body.classList.add('no_container');
  }
});

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
