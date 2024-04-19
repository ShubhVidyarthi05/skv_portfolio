//Marquee effect
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".marque_inner", {
    x: () => -(document.querySelector(".marque_inner").offsetWidth - document.documentElement.clientWidth),
    duration: 1,
    scrollTrigger: {
      trigger: ".marque",
      start: "top bottom",
      end: () => "+=" + (document.querySelector(".marque_inner").offsetWidth + window.innerWidth),
      scrub: true,
    }
  });