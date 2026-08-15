// Mobile nav toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navGroups = document.querySelectorAll('.nav-group > button');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
  });
}

// Dropdown menus on mobile
navGroups.forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    parent.classList.toggle('open');
  });
});

