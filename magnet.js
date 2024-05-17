//Magnetic effect on hover

const magneto = document.querySelector('#magneto');
const zigzag = document.querySelector('.introduction .svg-background');
const magnetoText = document.querySelector('#magneto .message');
// const menuItems = document.querySelector('.socials a');

//Mouse move stuff
const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    let zigBox = zigzag.getBoundingClientRect();
    // let menuBox = menuItems.getBoundingClientRect();

    const magnetoStrength = 40;
    const magnetoTextStrength = 80;
    const zigzagStrength = 180;
    // const menuItemStrength = 30;
    const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth)-0.5;
    const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight)-0.5;
    const zigX = ((event.clientX - zigBox.left)/zigzag.offsetWidth);
    const zigY = ((event.clientY - zigBox.top)/zigzag.offsetHeight);
    // const menuX = ((event.clientX - menuBox.left)/menuBox.offsetWidth);
    // const menuY = ((event.clientY - menuBox.top)/menuBox.offsetHeight);

    gsap.to(magneto, {
        duration:1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: "power4.out",
    })

    gsap.to(zigzag, {
      duration:1,
      x: zigX * zigzagStrength,
      y: zigY * zigzagStrength,
      ease: "power4.out",
    })

    gsap.to(magnetoText, {
        duration:1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: "power4.out",
    })

    // gsap.to(menuItems, {
    //   duration:1,
    //   x: menuX * menuItemStrength,
    //   y: menuY * menuItemStrength,
    // })

}


//Mouse leave stuff
const resetMagneto = (event) => {
    //Move the button to it's original position
    gsap.to(magneto,{
        duration:1,
        x: 0,
        y: 0,
        ease: 'elastic.out'
    });

    gsap.to(zigzag,{
      duration:1,
      x: 0,
      y: 0,
      ease: 'elastic.out'
  });

    gsap.to(magnetoText,{
        duration:1,
        x: 0,
        y: 0,
        ease: 'elastic.out'
    });
};


//Add event listener
magneto.addEventListener('mousemove', activateMagneto);
magneto.addEventListener('mouseleave', resetMagneto);
zigzag.addEventListener('mousemove', activateMagneto);
zigzag.addEventListener('mouseleave', resetMagneto);


magneto.addEventListener('click', (event) => {
  const confirmation = confirm('Are you sure you want to open your email client?');
  if (confirmation) {
    window.location.href = 'mailto:shubhskv05@gmail.com';
  }
  else{
    event.preventDefault();
  }
});
