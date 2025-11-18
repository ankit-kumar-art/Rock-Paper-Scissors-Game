// simple interactivity: smooth scroll, modal video
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for nav links
  document.querySelectorAll('.main-nav a, .hero-cta a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });

  // Video modal
  const modal = document.getElementById('video-modal');
  const playBtn = document.getElementById('play-video');
  const closeBtn = document.getElementById('close-video');
  const iframe = document.getElementById('video-iframe');

  playBtn && playBtn.addEventListener('click', () => {
    // Replace with your video URL (YouTube embed link)
    iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    modal.setAttribute('aria-hidden', 'false');
  });

  closeBtn && closeBtn.addEventListener('click', () => {
    iframe.src = "";
    modal.setAttribute('aria-hidden', 'true');
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      iframe.src = "";
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // Mobile menu (toggle)
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }
});
