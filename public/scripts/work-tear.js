// A quiet signature move for the work section: each project's title drifts a few
// pixels as its card crosses the centre of the screen, instead of sitting static.
// (Simplified from the direction sheet's full scroll-pinned "title torn at the
// seam" for build robustness; noted in the build report.)
function update() {
  const mid = window.innerHeight / 2;
  document.querySelectorAll('[data-tear]').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardMid = rect.top + rect.height / 2;
    const dist = (cardMid - mid) / mid; // -1..1, 0 = centred
    const clamped = Math.max(-1, Math.min(1, dist));
    const title = card.querySelector('[data-tear-target]');
    if (title) title.style.transform = `translateY(${clamped * -14}px)`;
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
