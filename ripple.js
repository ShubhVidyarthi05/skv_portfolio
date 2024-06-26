//Ripple effect
const ti = gsap.timeline({
    scrollTrigger: {
      trigger: ".qualities", // Common trigger for all qualities
      start: "top 60%",
      toggleActions: "play none none none" // Defines the toggle actions
    },
    onComplete: () => {
      // When the timeline completes, reset the timeline and restart
      ti.restart();
    }
  });
  
  // Add animations to the timeline
  ti.addLabel("start");
  ti.from('.fe_d', {
    scale: 0,
    duration: 2,
    ease: "power4.out"
  }, "start+=0.7")
  .from('.rip1', {
    scale: 0,
    duration: 1,
    ease: "elastic.out"
  }, "start+=0.5")
  .from('.rip2', {
    scale: 0,
    duration: 2,
    ease: "elastic.out"
  }, "start+=0.7")
  .from('.rip3', {
    scale: 0,
    duration: 3,
    ease: "elastic.out"
  }, "start+=0.9")
  .from('.rip4', {
    scale: 0,
    duration: 4,
    ease: "elastic.out"
  }, "start+=1.1")
  .to('.fe_d', {
    scale: 0,
    duration: 1,
    ease: "power4.in"
  }, "start+=4") // Adjust the time for the elements to fade out
  .to('.rip1', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=4.2")
  .to('.rip2', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=4.4")
  .to('.rip3', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=4.6")
  .to('.rip4', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=4.8")
  
  
  .from('.ill', {
    scale: 0,
    duration: 1,
    ease: "power4.out"
  }, "start+=5.7")
  .from('.feature_image', {
    scale: 0,
    duration: 1,
    ease: "power4.out"
  }, "start+=5.9")
  .to('.rip1', {
    scale: 1,
    duration: 1,
    ease: "elastic.out"
  }, "start+=5.5")
  .to('.rip2', {
    scale: 1,
    duration: 2,
    ease: "elastic.out"
  }, "start+=5.7")
  .to('.rip3', {
    scale: 1,
    duration: 3,
    ease: "elastic.out"
  }, "start+=5.9")
  .to('.rip4', {
    scale: 1,
    duration: 4,
    ease: "elastic.out"
  }, "start+=6.1")
  .to('.ill', {
    scale: 0,
    duration: 1,
    ease: "power4.in"
  }, "start+=9") // Adjust the time for the elements to fade out
  .to('.rip1', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=9.2")
  .to('.rip2', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=9.4")
  .to('.rip3', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=9.6")
  .to('.rip4', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=9.8")
  
  
  .from('.ui_d', {
    scale: 0,
    duration: 1,
    ease: "power4.out"
  }, "start+=10.7")
  .to('.rip1', {
    scale: 1,
    duration: 1,
    ease: "elastic.out"
  }, "start+=10.5")
  .to('.rip2', {
    scale: 1,
    duration: 2,
    ease: "elastic.out"
  }, "start+=10.7")
  .to('.rip3', {
    scale: 1,
    duration: 3,
    ease: "elastic.out"
  }, "start+=10.9")
  .to('.rip4', {
    scale: 1,
    duration: 4,
    ease: "elastic.out"
  }, "start+=11.1")
  .to('.ui_d', {
    scale: 0,
    duration: 1,
    ease: "power4.in"
  }, "start+=14") // Adjust the time for the elements to fade out
  .to('.rip1', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=14.2")
  .to('.rip2', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=14.4")
  .to('.rip3', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=14.6")
  .to('.rip4', {
    scale: 0,
    duration: 1,
    ease: "elastic.in"
  }, "start+=14.8")
  //Ripple effect
  