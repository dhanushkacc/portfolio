const graph = document.querySelector('[data-graph]');
if (graph) {
  const nodes = graph.querySelectorAll('.node');
  const panels = document.querySelectorAll('[data-detail]');
  const lines = graph.querySelectorAll('.graph__line');

  const setActive = (id) => {
    nodes.forEach((n) => {
      const active = n.dataset.node === id;
      n.classList.toggle('is-active', active);
      n.setAttribute('aria-expanded', String(active));
    });
    panels.forEach((p) => {
      p.hidden = p.dataset.detail !== id;
    });
    lines.forEach((line) => {
      line.classList.toggle('is-active', line.dataset.to === id);
    });
  };

  nodes.forEach((n) => n.addEventListener('click', () => setActive(n.dataset.node)));
}
