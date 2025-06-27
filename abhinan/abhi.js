window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbar').style.display = 'flex';
});

const sections = document.querySelectorAll('section');
function showSection(id) {
  document.getElementById('welcome-screen').style.display = 'none';
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
});