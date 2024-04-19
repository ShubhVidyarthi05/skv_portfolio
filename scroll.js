gsap.registerPlugin(ScrollTrigger);

const lefts = document.querySelectorAll(".left");
const mid = document.querySelectorAll(".middle");
const rights = document.querySelectorAll(".right");
const car = document.querySelectorAll(".cat");


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

mid.forEach((middle) => {
    gsap.to(middle, {
        y: -300,
        duration:3,
        scrollTrigger: {
            trigger: middle, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
           end: "top 100%",
           scrub: 3,
        },
        ease: "power1.inOut"
    });
});

rights.forEach((right) => {
    gsap.to(right, {
        y: -200,
        duration:2,
        scrollTrigger: {
            trigger: right, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
           end: "top 100%",
           scrub: 3,
        },
        ease: "power1.inOut"
    });
});

car.forEach((cat) => {
    gsap.to(cat, {
        y: -200,
        duration:2,
        scrollTrigger: {
            trigger: cat, // Use current .entry element as trigger
            start: "top 90%", // Adjust start trigger 
           end: "top 100%",
           scrub: 3,
        },
        ease: "power3.inOut"
    });
});