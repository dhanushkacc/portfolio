// The work section's signature move: each project's name is split down the middle,
// and the two halves pull apart as the project is off-centre, meeting exactly when
// it is centred in the viewport (the "title torn at the seam" blueprint, built with
// a scroll listener instead of the sheet's full scroll-linked pin, for robustness).
function update() {
  const mid = window.innerHeight / 2;
  document.querySelectorAll('[data-tear]').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardMid = rect.top + rect.height / 2;
    const dist = (cardMid - mid) / mid; // -1..1, 0 = centred
    const clamped = Math.max(-1, Math.min(1, dist));
    const travel = clamped * 26; // vh
    const left = card.querySelector('[data-tear-left]');
    const right = card.querySelector('[data-tear-right]');
    if (left) left.style.transform = `translateY(${travel}vh)`;
    if (right) right.style.transform = `translateY(${-travel}vh)`;
  });
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    update();
    ticking = false;
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}
