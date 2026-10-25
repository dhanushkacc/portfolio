(() => {
  const calm = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width: 1024px)');

  // Reveal once, as each part enters.
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('is-in'));

  // Project clips build their cards in the first seconds; the first time one plays, start where they are on screen.
  document.querySelectorAll('video[data-start]').forEach((v) => {
    const at = Number(v.dataset.start) || 0;
    if (at) v.addEventListener('loadedmetadata', () => { if (v.currentTime < at) v.currentTime = at; }, { once: true });
  });

  const playOnly = (videos, keep) => {
    for (const v of videos) {
      if (v === keep && !calm.matches) v.play().catch(() => {});
      else v.pause();
    }
  };

  // Each split has one held stage; the section in the middle band of the screen picks its slide.
  const stages = [];
  for (const split of document.querySelectorAll('[data-split]')) {
    const stage = split.querySelector('.stage');
    if (!stage) continue;
    const slides = new Map([...stage.querySelectorAll('[data-slide]')].map((s) => [s.dataset.slide, s]));
    const videos = [...stage.querySelectorAll('video')];
    const cap = stage.querySelector('[data-cap]');
    const st = { split, stage, slides, videos, cap, current: stage.querySelector('.slide.is-on')?.dataset.slide, inView: false };

    st.show = (id, caption) => {
      const next = slides.get(id);
      if (!next) return;
      if (id !== st.current) {
        const prev = slides.get(st.current);
        slides.forEach((s) => s.classList.remove('was-on'));
        if (prev) { prev.classList.remove('is-on'); prev.classList.add('was-on'); }
        // restart the transition from the bottom edge
        next.classList.remove('is-on'); void next.offsetWidth; next.classList.add('is-on');
        st.current = id;
      }
      if (cap && caption && cap.textContent !== caption) {
        cap.textContent = caption;
        cap.classList.remove('is-new'); void cap.offsetWidth; cap.classList.add('is-new');
      }
      st.sync();
    };
    st.sync = () => {
      const v = slides.get(st.current)?.querySelector('video');
      playOnly(videos, st.inView && wide.matches ? v : null);
    };

    new IntersectionObserver((entries) => { st.inView = entries[0].isIntersecting; st.sync(); }, { threshold: 0.01 }).observe(stage);

    const sections = [...split.querySelectorAll('[data-stage]')];
    const band = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) {
        st.show(e.target.dataset.stage, e.target.dataset.caption);
        document.querySelectorAll('[data-index]').forEach((a) => a.classList.toggle('is-current', a.dataset.index === e.target.dataset.stage));
      }
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach((s) => band.observe(s));
    stages.push(st);
  }

  // Phone and narrow tablet: every film plays only while it is on screen.
  const inline = [...document.querySelectorAll('.m-film video')];
  const seen = new Set();
  const syncInline = () => {
    for (const v of inline) {
      const shown = v.offsetParent !== null;
      if (shown && seen.has(v) && !calm.matches) v.play().catch(() => {});
      else v.pause();
    }
  };
  if ('IntersectionObserver' in window) {
    const watch = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting) seen.add(e.target); else seen.delete(e.target); }
      syncInline();
    }, { threshold: 0.25 });
    inline.forEach((v) => watch.observe(v));
  }
  const resync = () => { stages.forEach((s) => s.sync()); syncInline(); };
  wide.addEventListener('change', resync);
  calm.addEventListener('change', resync);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) document.querySelectorAll('video').forEach((v) => v.pause()); else resync();
  });

  // Pick a part: it plays on the stage (or in the phone player) and the list remembers it.
  const films = document.querySelector('[data-films]');
  if (films) {
    const player = films.querySelector('[data-films-player]');
    const st = stages.find((s) => s.split.contains(films));
    films.querySelectorAll('[data-ep]').forEach((btn) => btn.addEventListener('click', () => {
      const n = btn.dataset.ep;
      films.querySelectorAll('[data-ep]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      films.dataset.stage = 'ep' + n;
      films.dataset.caption = btn.dataset.caption;
      if (st) st.show('ep' + n, btn.dataset.caption);
      if (player) {
        player.poster = '/media/films/ep' + n + '.jpg';
        player.querySelector('source').src = '/media/films/ep' + n + '.mp4';
        player.load();
        seen.add(player);
        syncInline();
      }
    }));
  }

  // The one field: open the visitor's email with their line, properly encoded.
  const form = document.querySelector('[data-mail]');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const line = form.querySelector('[name="body"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value;
    location.href = 'mailto:' + form.dataset.mail + '?subject=' + encodeURIComponent(subject) + (line ? '&body=' + encodeURIComponent(line) : '');
  });

  // The scene: the eight films open from a window in the middle to the whole stage.
  if (window.Stage) {
    window.Scenes = window.Scenes || {};
    Scenes.opening = (root, opts = {}) => Stage.scene(root, {
      hold: opts.hold ?? 1.4,
      scrub: Stage.lenis ? true : 0.5,
      phone: 'same',
      // The eight films start as one pile in the middle, with part 1 on top, and deal out into the grid.
      build(tl, { q }) {
        const cards = q('.series__card');
        const box = q('.series__cards')[0];
        const text = q('.series__text');
        // layout positions, not on-screen rects, so a refresh mid-scroll measures the untransformed grid
        const offset = (el, axis) => axis === 'x'
          ? box.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2)
          : box.clientHeight / 2 - (el.offsetTop + el.offsetHeight / 2);
        const tilt = [-7, 5, -3, 6, -5, 3, -6, 4];
        cards.forEach((c, i) => { c.style.zIndex = String(cards.length - i); });
        // the pile is set directly too: a refresh invalidates fromTo starts the playhead has not reached
        const pile = { x: (i, el) => offset(el, 'x'), y: (i, el) => offset(el, 'y'), rotation: (i) => tilt[i % tilt.length], scale: 1.25 };
        gsap.set(cards, pile);
        gsap.set(text, { autoAlpha: 0, y: 32 });
        tl.fromTo(cards, pile, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.5, ease: 'power3.inOut', stagger: { each: 0.05, from: 'end' } }, 0.05)
          .fromTo(text, { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.22, ease: 'power2.out' }, 0.62);
      },
    });
    Stage.smooth();
    Stage.init();
  }
})();
