const card = document.querySelector(".card");

if (card) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

// Scroll reveal
const elements = document.querySelectorAll(
  ".feature-card, .use-case-card, .pricing-card, .testimonial-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// ===== 3D CARD MOUSE EFFECT =====
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  if (!card) return;
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Mobile touch fallback
document.addEventListener("touchmove", (e) => {
  if (!card) return;
  const touch = e.touches[0];
  const x = (window.innerWidth / 2 - touch.clientX) / 25;
  const y = (window.innerHeight / 2 - touch.clientY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});


// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
