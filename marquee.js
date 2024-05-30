//Marquee effect
gsap.registerPlugin(ScrollTrigger);

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



  document.addEventListener("DOMContentLoaded", () => {
    let currentScroll = 0;
    let isScrollingDown = true;
    let directions = document.querySelectorAll(".direction");
  
    let tween = gsap.to(".marquee_part", {
      xPercent: -100,
      repeat: 1,
      duration: 1,
      ease: "linear",
    }).totalProgress(2);
  
    gsap.set(".marquee_inner", { xPercent: -500 });
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }
  
      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });
  
      directions.forEach((direction) => {
        if (isScrollingDown) {
          direction.classList.remove("active");
        } else {
          direction.classList.add("active");
        }
      });
  
      currentScroll = window.pageYOffset;
    });
  });
  