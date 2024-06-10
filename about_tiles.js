//MENU TILES
let columns = Math.floor(document.body.clientWidth/50),
rows = Math.floor(document.body.clientHeight/50);

const wrapper = document.getElementById('tiles');

const createTile = index => {
  const tile = document.createElement('div');

  tile.classList.add("tile");

  return tile;
}

const createTiles = quantity =>{
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  })
}

const createGrid = () =>{
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth/50);
  rows = Math.floor(document.body.clientHeight/70);
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}
createGrid();

window.onresize = () => createGrid();


function revealMenu() {
  const menuContainer = document.querySelector('.menu_container');

  // Check if the menu container is currently hidden (opacity is not 1)
  if (parseFloat(window.getComputedStyle(menuContainer).opacity) !== 1) {
      // If menu is hidden, reveal it
      gsap.fromTo(menuContainer, {
          opacity: 0, // Start with opacity 0 (fully transparent)
          y: "100%", // Start with the menu container positioned outside the viewport (to the bottom)
      }, {
          duration: 0.4,
          opacity: 1, // Fade in the menu
          y: 0, // Move the menu container to the center (reveal from the bottom)
          ease: "power1.out", // Easing function for smooth animation
      });
  } else {
      // If menu is visible, hide it
      gsap.to(menuContainer, {
          duration: 0.4,
          opacity: 0, // Fade out the menu
          y: "100%", // Move the menu container back outside the viewport (to the bottom)
          ease: "power1.in", // Easing function for smooth animation
      });
  }
}

// Call the revealMenu function when the menu icon is clicked or when needed
const menuIcon = document.querySelector('.menu-open');

menuIcon.addEventListener('click', function() {
  revealMenu();
});


// function revealMenuAndRedirect() {
//   revealMenu(); // Call the function to reveal the menu

//   // Wait for the reveal animation to finish (adjust the duration as needed)
//   setTimeout(function() {
//       window.location.href = 'main.html'; // Redirect to the desired page
//   }, 500); // Adjust the timeout to match the duration of the reveal animation
// }

// Scroll to #magneto after page has loaded
// window.addEventListener('load', function() {
//   const targetElement = document.querySelector('#magneto');
//   if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//   }
// },2000);
