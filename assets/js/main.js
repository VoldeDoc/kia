(function () {
  /* ========= sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  const overlay = document.querySelector(".overlay");

  menuToggleButton.addEventListener("click", () => {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");

    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains("fa-solid fa-caret-left")) {
        menuToggleButtonIcon.classList.remove("fa-solid fa-caret-left");
        menuToggleButtonIcon.classList.add("fa-solid fa-bars");
      } else {
        menuToggleButtonIcon.classList.remove("lni-menu");
        menuToggleButtonIcon.classList.add("fa-solid fa-caret-left");
      }
    } else {
      if (menuToggleButtonIcon.classList.contains("fa-solid fa-caret-left")) {
        menuToggleButtonIcon.classList.remove("fa-solid fa-caret-left");
        menuToggleButtonIcon.classList.add("fa-solid fa-bars");
      }
    }
  });
  overlay.addEventListener("click", () => {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
})();

const checkbox = document.getElementById("checkbox");
const header = document.querySelector('.header');
const sideBar =  document.querySelector('.sidebar-nav-wrapper');
const cards = document.querySelectorAll('.card'); // Select all cards
const td =  document.querySelectorAll('td')
const tr =  document.querySelectorAll('tr')
// Load the saved mode from localStorage
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'dark') {
  document.body.classList.add("dark");
  tr.forEach(card => card.classList.add('dark'));
  td.forEach(card => card.classList.add('dark'));
  header.classList.add('dark');
  sideBar.classList.add('dark');
  cards.forEach(card => card.classList.add('dark')); // Add class to all cards
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  tr.forEach(card => card.classList.toggle('dark'));
  td.forEach(card => card.classList.toggle('dark'));
  header.classList.toggle('dark');
  sideBar.classList.toggle('dark');
  cards.forEach(card => card.classList.toggle('dark')); // Toggle class for all cards

  // Save the current mode to localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
});


// Get the date element
const dateElement = document.querySelector('.date');

// Get the current date
const now = new Date();

// Format the date
const formattedDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'long' })},${now.getFullYear()}`;

// Set the text of the date element
dateElement.textContent = formattedDate;

document.getElementById('toggleButton').addEventListener('click', function() {
  const platformsDiv = document.getElementById('platformDiv');
  const toggleButton = document.getElementById('toggleButton');

  if (toggleButton.textContent === 'See all') {
    toggleButton.textContent = 'See less';
    platformsDiv.style.cssText = 'max-height: none !important; overflow-y: visible !important;';
  } else {
    toggleButton.textContent = 'See all';
    platformsDiv.style.cssText = 'max-height: 55vh !important; overflow-y: scroll !important;';
  }
});



//preloaders
let preloader = document.getElementById('preloader')
if (preloader) {
  window.addEventListener('load', () => {
  setInterval(()=>{
      preloader.remove()
    })
  })
  }