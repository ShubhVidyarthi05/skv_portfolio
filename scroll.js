gsap.registerPlugin(ScrollTrigger);

const lefts = document.querySelectorAll(".left");
// const mid = document.querySelectorAll(".middle");
const rights = document.querySelectorAll(".right");
// const car = document.querySelectorAll(".cat");


lefts.forEach((left) => {
    gsap.to(left, {
        y: -200,
        duration:2,
        scrollTrigger: {
            trigger: left, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
           end: "top 100%",
           scrub: 3,
        },
        ease: "power1.inOut"
    });
});

// mid.forEach((middle) => {
//     gsap.to(middle, {
//         y: -300,
//         duration:3,
//         scrollTrigger: {
//             trigger: middle, // Use current .entry element as trigger
//             start: "top 90%", // Adjust start trigger 
//            end: "top 100%",
//            scrub: 3,
//         },
//         ease: "power1.inOut"
//     });
// });

rights.forEach((right) => {
    gsap.to(right, {
        y: -300,
        duration:3,
        scrollTrigger: {
            trigger: right, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
           end: "top 100%",
           scrub: 3,
        },
        ease: "power1.inOut"
    });
});

// car.forEach((cat) => {
//     gsap.to(cat, {
//         y: -200,
//         duration:2,
//         scrollTrigger: {
//             trigger: cat, // Use current .entry element as trigger
//             start: "top 90%", // Adjust start trigger 
//            end: "top 100%",
//            scrub: 3,
//         },
//         ease: "power3.inOut"
//     });
// });

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
            duration:3,
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
      // You can define a different animation or no animation for smaller screens
      // Here, we simply don't apply any animation to avoid overlapping
      lefts.forEach((left) => {
          gsap.to(left, {
              y: 0,
              duration: 0,
              scrollTrigger: {
                  trigger: left,
                  start: "top 100%", // Adjust start trigger to the default state
                  end: "top 100%",
                  scrub: false,
              }
          });
      });

      rights.forEach((right) => {
        gsap.to(right, {
            y: -300,
            duration:3,
            scrollTrigger: {
                trigger: right, // Use current .entry element as trigger
                start: "top 100%", // Adjust start trigger 
               end: "top 100%",
               scrub: false,
            }
        });
    });
    }
  });
  