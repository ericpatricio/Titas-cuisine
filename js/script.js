// Hamburger
const hamburgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');

hamburgerBtn.addEventListener('click', toggleNavbar);

function toggleNavbar() {
  header.classList.toggle('open');
  navbar.classList.toggle('open');    
}

// Close navbar on clicking a nav item
document.addEventListener('click', (e) => {
  if(e.target.closest('.nav-item')) {
    toggleNavbar();
  }
})

// Menu tabs
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', (e) => {
  if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
    const target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const menuSection = document.querySelector('.menu-section');
    menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
    menuSection.querySelector(target).classList.add('active');

  }
})