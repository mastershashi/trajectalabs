const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.access-form').forEach((form) => form.classList.add('hidden'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.remove('hidden');
  });
});

document.querySelectorAll('.access-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('This account feature is coming soon. Please use the enquiry form to contact TrajectaLabs.');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const contactSuccess = document.getElementById('contact-success');
contactSuccess.style.display = window.location.hash === '#contact-success' ? 'block' : 'none';