// Average screen size of a phone (example value)
const phoneScreenWidth = 1060;

// Function to check the width and perform actions
function checkWidth() {
  // Check width of the webpage
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Check if the width is smaller than or equal to the average screen size of a phone
  if (screenWidth <= phoneScreenWidth) {
    // Redirect to mobile.html
    window.location.href = "mobile.html";
  } else {
    // Log message for desktop / tablet
    console.log("Client is on Desktop / Tablet");
  }
}

// Initial check
checkWidth();

// Set up event listener for window resize
window.addEventListener('resize', checkWidth);


// Buttons
const buttons = document.querySelectorAll(".myButton");
const contentBoxes = document.querySelectorAll(".content-box");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Check if the button is already active
    if (button.classList.contains("active")) {
      // Remove active class and set color to light grey
      button.classList.remove("active");
      button.style.color = "lightgrey";

      // Hide the corresponding content box with fade-out animation
      contentBoxes[index].classList.remove("show", "fade-in");
    } else {
      // Reset all buttons and content boxes
      buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.style.color = "lightgrey";
      });
      contentBoxes.forEach(box => {
        box.classList.remove("show");
      });

      // Add active class to the clicked button and set color to white
      button.classList.add("active");
      button.style.color = "white";

      // Show the corresponding content box with fade-in and slide animation
      contentBoxes[index].classList.add("show", "fade-in", "slide-animation");
    }
  });
});


function switchTheme() {
  // Get necessary elements
  const body = document.body;
  const logoLight = document.querySelector('.logo-light');
  const logoDark = document.querySelector('.logo-dark');

  // Toggle body background color and image visibility
  body.classList.toggle('dark-mode');
  logoLight.classList.toggle('hide');
  logoDark.classList.toggle('hide');

  // Add smooth transition
  body.classList.add('slide-animation');
  setTimeout(() => {
    body.classList.remove('slide-animation');
  }, 500);
}

// Add event listener to switch theme link
const switchThemeLink = document.querySelector('a.ST');
switchThemeLink.addEventListener('click', switchTheme);
