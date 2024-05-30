// Logo and dots popup
const tl = gsap.timeline({
    defaults:{y:0, duration:1, ease: 'power3.inOut'}
});
tl.to("[data-animation='text-reveal'] > *",{
});
// Logo and dots popup



// const content = document.getElementById("hero");
// let currentPos = window.pageYOffset;

// const callDistort = function(){
//     const newPos = window.pageYOffset;   


//     const diff = newPos - currentPos;
//     const speed = diff* .05;

//     content.style.transform = "skewY(" + speed + "deg)";
//     currentPos = newPos;
//     requestAnimationFrame(callDistort);
// };

// callDistort();

// MENU

// const menu = document.querySelector('.nav-container');
// const menuOpenButton = document.querySelector('.menu-open');
// const menuCloseButton = document.querySelector('.menu-close');

// const openMenu = function(){
//     menu.classList.remove('hidden');
// }

// const closeMenu = function(){
//     menu.classList.add('hidden');
// }

// menuOpenButton.addEventListener('click', openMenu);
// menuCloseButton.addEventListener('click', closeMenu);



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

// document.querySelector('.dots').addEventListener('click', function() {
//   var ele = document.querySelector('.menu_container');
//   ele.classList.toggle('hidden');
// })







//Lenis
// const entries = document.querySelectorAll('.entry')

// entries.forEach((entry) => {
//   let left = entry.querySelector('.left')
//   let right = entry.querySelector('.right')

//   gsap.set(left,{
//     xPercent:-100,
//     opacity:0
//   })

//   gsap.set(right,{
//     xPercent:100,
//     opacity:0
//   })+
// })

  // gsap.to("left",{
  //   scrollTrigger:{
  //     trigger: "left",
  //     start: 'top bottom',
  //     end: 'bottom 90%',
  //     markers:true,
  //     scrub: true
  //   },
  //   y:0,
  //   opacity:1,
  // })

// const images = document.querySelectorAll('.entry img');

//   images.forEach(image => {
//     image.addEventListener('mouseenter', function() {  
//       gsap.to(this, {
//         skewX: 20, // Adjust the skew angle
//         duration: 0.3, // Duration of the skew effect
//         ease: 'power2.out' // Easing function
//       });
//     });

//     image.addEventListener('mouseleave', function() {
//       gsap.to(this, {
//         skewX: 0, // Return to the original skew
//         duration: 0.3, // Duration of the transition
//         ease: 'power2.out' // Easing function
//       });
//     });
//   });


// const wrapper = document.getElementById('tiles');
// let columns = Math.floor(document.body.clientWidth / 50);
// let rows = Math.floor(document.body.clientHeight / 50);
// let resizeTimeout;

// const createTile = () => {
//   const tile = document.createElement('div');
//   tile.classList.add("tile");
//   return tile;
// }

// const createTiles = (quantity) => {
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < quantity; i++) {
//     fragment.appendChild(createTile());
//   }
//   wrapper.appendChild(fragment);
// }

// const createGrid = () => {
//   wrapper.innerHTML = "";
//   columns = Math.floor(document.body.clientWidth / 50);
//   rows = Math.floor(document.body.clientHeight / 300);
//   wrapper.style.setProperty("--columns", columns);
//   wrapper.style.setProperty("--rows", rows);
//   createTiles(columns * rows);
// }

// const debouncedCreateGrid = () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(createGrid, 100); // Adjust delay as needed
// };

// createGrid();

// window.addEventListener("resize", debouncedCreateGrid);






const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
