// The "ask for exactly what you need" live demo (Writing section).
// A tiny, honest GraphQL-shaped query over the page's own facts: tick a field, the
// response grows or shrinks to match. No network call; it works with scripts off
// because the full response is printed first and the checkboxes only trim it.
const DATA = {
  name: '"Dhanushka Dilshan"',
  role: '"Backend Software Engineer"',
  stack: '["Java", "Spring Boot", "Spring for GraphQL", "Kubernetes", "AWS"]',
  projects: '["Business Lineage", "Data Governance Core", "XCLP Streaming"]',
  writing: '["GraphQL in Practice — 8 parts"]',
};

function render(root) {
  const checks = [...root.querySelectorAll('input[type="checkbox"]')];
  const out = root.querySelector('[data-query-output]');
  const q = root.querySelector('[data-query-fields]');
  if (!out || !q) return;

  function update() {
    const picked = checks.filter((c) => c.checked).map((c) => c.value);
    q.textContent = picked.length ? picked.join('\n  ') : '# tick a field above';
    const body = picked.length
      ? picked.map((f) => `  "${f}": ${DATA[f]}`).join(',\n')
      : '  # the response is empty until you ask for something';
    out.textContent = `{\n${body}\n}`;
  }

  checks.forEach((c) => c.addEventListener('change', update));
  update();
}

document.querySelectorAll('[data-query-demo]').forEach(render);
