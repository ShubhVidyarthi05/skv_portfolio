gsap.registerPlugin(ScrollTrigger);

const lefts = document.querySelectorAll(".left");
// const mid = document.querySelectorAll(".middle");
const rights = document.querySelectorAll(".right");
// const car = document.querySelectorAll(".cat");


// Define the animation within a media query using GSAP's matchMedia
ScrollTrigger.matchMedia({
    // For desktop and larger tablet screens
    "(min-width: 769px)": function() {
      // Apply the animation only if the screen width is 769px or larger
      lefts.forEach((left) => {
        gsap.to(left, {
          y: -200,
          duration: 2,
          scrollTrigger: {
            trigger: left, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
            end: "top 100%",
            scrub: 3,
          },
          ease: "power1.inOut"
        });
      });
  
      rights.forEach((right) => {
        gsap.to(right, {
          y: -300,
          duration: 3,
          scrollTrigger: {
            trigger: right, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
            end: "top 100%",
            scrub: 3,
          },
          ease: "power1.inOut"
        });
      });
    },
    
    // For mobile and smaller tablet screens
    "(max-width: 768px)": function() {
      // Remove the animations on smaller screens to avoid overlapping
      lefts.forEach((left) => {
        gsap.set(left, { clearProps: "all" }); // Clear all properties set by GSAP
      });
  
      rights.forEach((right) => {
        gsap.set(right, { clearProps: "all" }); // Clear all properties set by GSAP
      });
    }
  });
  