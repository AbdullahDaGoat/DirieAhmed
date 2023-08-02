// Average screen size of a phone (example value)
const phoneScreenWidth = 768;

// Function to check the width and perform actions
function checkWidth() {
  // Check width of the webpage
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Check if the width is smaller than or equal to the average screen size of a phone
  if (screenWidth >= phoneScreenWidth) {
    // Redirect to mobile.html
    window.location.href = "index.html";
  } else {
    // Log message for desktop / tablet
    console.log("Client is on Desktop / Tablet");
  }
}

// Initial check
checkWidth();

// Set up event listener for window resize
window.addEventListener('resize', checkWidth);

const btns = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.btn-content');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let current = 0;

// init buttons
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    // Check if the clicked button is already active
    if (i === current) {
      // Toggle the visibility of the content
      contents[current].classList.toggle('show');
    } else {
      // Reset prev active
      btns[current].classList.remove('active');

      current = i;
      showContent(current);

      // set new active
      btns[current].classList.add('active');
    }
  });
}

// next click
// prev click  
function showContent(index) {
  // reset prev content and active button
  for(let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('show');
    btns[i].classList.remove('active');
  }

  // show new content and activate button
  contents[index].classList.add('show');
  btns[index].classList.add('active');
}



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