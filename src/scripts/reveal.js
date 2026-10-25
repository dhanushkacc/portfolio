// Section-entrance motion (SKILL.md step 9.2): parts of a section rise and fade in
// once, as the section enters the viewport. Respects prefers-reduced-motion by doing
// nothing extra -- the CSS fallback already shows the content with no travel.
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && els.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('is-in'));
}
