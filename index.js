// Sidebar

// Get DOMS
let sideBar = document.querySelector('.sidebar');
let sideBarCollapse = document.querySelector('#sidebarCollapse');

// Event

sideBarCollapse.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    sideBarCollapse.classList.toggle('active')
});


// Page sections

let currentSection = 0;

// Get DOMS
let section = document.querySelectorAll(section);