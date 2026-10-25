// Flat, code-drawn illustrations for the four work projects with no footage of their
// own (the skill's imagery tier 4: "drawn in code from the subject itself"). One
// consistent graphic language: thin strokes, flat fills, the page's own palette,
// inherited through CSS custom properties since these render inline in the document.
const box = (x, y, w, h, label) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0" style="fill:none;stroke:var(--muted);stroke-width:1.5" />
  <text x="${x + 14}" y="${y + 28}" style="fill:var(--ink);font:500 14px 'Hanken Grotesk',sans-serif">${label}</text>
`;

const svg = (inner) => `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const DRAWINGS = {
  er: {
    a: svg(`
      ${box(40, 60, 150, 70, 'Source')}
      ${box(210, 60, 150, 70, 'Data Model')}
      ${box(125, 220, 150, 70, 'Dataset')}
      <line x1="190" y1="95" x2="210" y2="95" style="stroke:var(--accent);stroke-width:2" />
      <line x1="285" y1="130" x2="200" y2="220" style="stroke:var(--accent);stroke-width:2" />
      <text x="40" y="380" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">ER-style data model</text>
    `),
    b: svg(`
      ${box(40, 50, 320, 44, 'field: customerId  → String')}
      ${box(40, 104, 320, 44, 'field: email       → String')}
      ${box(40, 158, 320, 44, 'field: country     → String')}
      ${box(40, 212, 320, 44, 'relationship: hasMany Orders')}
      <text x="40" y="300" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Datasets, fields and relationships</text>
    `),
  },
  cache: {
    a: svg(`
      ${box(30, 60, 110, 60, 'Service A')}
      ${box(290, 60, 110, 60, 'Service B')}
      ${box(150, 200, 120, 60, 'Caffeine cache')}
      <line x1="85" y1="120" x2="190" y2="200" style="stroke:var(--accent);stroke-width:2" />
      <line x1="345" y1="120" x2="250" y2="200" style="stroke:var(--accent);stroke-width:2" />
      ${box(150, 320, 120, 50, 'RabbitMQ')}
      <line x1="210" y1="260" x2="210" y2="320" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 4" />
      <text x="30" y="420" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Cache kept in sync across instances</text>
    `),
    b: svg(`
      <text x="30" y="56" style="fill:var(--muted);font:600 14px 'Hanken Grotesk',sans-serif">Role</text>
      <text x="180" y="56" style="fill:var(--muted);font:600 14px 'Hanken Grotesk',sans-serif">Read</text>
      <text x="280" y="56" style="fill:var(--muted);font:600 14px 'Hanken Grotesk',sans-serif">Write</text>
      ${[0, 1, 2, 3].map((i) => `
        <text x="30" y="${100 + i * 48}" style="fill:var(--ink);font:14px 'Hanken Grotesk',sans-serif">Service ${String.fromCharCode(65 + i)}</text>
        <circle cx="195" cy="${95 + i * 48}" r="6" style="fill:${i % 2 ? 'var(--accent)' : 'none'};stroke:var(--muted)" />
        <circle cx="295" cy="${95 + i * 48}" r="6" style="fill:${i % 3 === 0 ? 'var(--accent)' : 'none'};stroke:var(--muted)" />
      `).join('')}
      <text x="30" y="320" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Role-based access control</text>
    `),
  },
  player: {
    a: svg(`
      <rect x="40" y="60" width="320" height="200" style="fill:var(--surface-2);stroke:var(--muted);stroke-width:1.5" />
      <circle cx="200" cy="160" r="34" style="fill:none;stroke:var(--accent);stroke-width:2" />
      <polygon points="190,144 190,176 218,160" style="fill:var(--accent)" />
      <rect x="40" y="270" width="320" height="8" style="fill:var(--surface-2)" />
      <rect x="40" y="270" width="120" height="8" style="fill:var(--accent)" />
      <text x="40" y="320" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Course video, enrolled learners only</text>
    `),
    b: svg(`
      <rect x="150" y="60" width="100" height="70" rx="0" style="fill:none;stroke:var(--muted);stroke-width:1.5" />
      <path d="M170 60 v-20 a30 30 0 0 1 60 0 v20" style="fill:none;stroke:var(--muted);stroke-width:1.5" />
      <text x="170" y="105" style="fill:var(--ink);font:600 14px 'Hanken Grotesk',sans-serif">Signed</text>
      <text x="170" y="122" style="fill:var(--ink);font:600 14px 'Hanken Grotesk',sans-serif">cookie</text>
      <line x1="200" y1="150" x2="200" y2="200" style="stroke:var(--accent);stroke-width:2" />
      <rect x="110" y="200" width="180" height="60" style="fill:none;stroke:var(--accent);stroke-width:1.5" />
      <text x="130" y="236" style="fill:var(--ink);font:14px 'Hanken Grotesk',sans-serif">CloudFront</text>
      <text x="40" y="340" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Access granted only with a valid signature</text>
    `),
  },
  agent: {
    a: svg(`
      <rect x="40" y="60" width="320" height="220" style="fill:var(--surface-2);stroke:var(--muted);stroke-width:1.5" />
      <circle cx="58" cy="78" r="3" style="fill:var(--muted)" /><circle cx="70" cy="78" r="3" style="fill:var(--muted)" /><circle cx="82" cy="78" r="3" style="fill:var(--muted)" />
      ${[0, 1, 2, 3].map((i) => `<text x="56" y="${114 + i * 26}" style="fill:${i === 2 ? 'var(--accent)' : 'var(--muted)'};font:13px ui-monospace,monospace">${['$ kubectl logs xapi-core-7f', 'tracing error to resolver...', '→ found: DataLoader timeout', '$ _'][i]}</text>`).join('')}
      <text x="40" y="320" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">An agent tracing a bug to its service</text>
    `),
    b: svg(`
      <circle cx="200" cy="150" r="30" style="fill:none;stroke:var(--accent);stroke-width:2" />
      <text x="200" y="155" text-anchor="middle" style="fill:var(--ink);font:600 13px 'Hanken Grotesk',sans-serif">MCP</text>
      ${[[90, 70], [310, 70], [90, 230], [310, 230]].map(([x, y], i) => `
        <line x1="200" y1="150" x2="${x}" y2="${y}" style="stroke:var(--muted);stroke-width:1.5" />
        <rect x="${x - 55}" y="${y - 20}" width="110" height="40" style="fill:none;stroke:var(--muted);stroke-width:1.5" />
        <text x="${x}" y="${y + 5}" text-anchor="middle" style="fill:var(--ink);font:12px 'Hanken Grotesk',sans-serif">${['catalog', 'lineage', 'governance', 'logs'][i]}</text>
      `).join('')}
      <text x="40" y="340" style="fill:var(--muted);font:14px 'Hanken Grotesk',sans-serif">Platform features exposed as MCP tools</text>
    `),
  },
};
