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
        if (st.onShow) st.onShow(st.current, id);
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

  // Pick an episode: it plays on the stage (or in the phone player) and the list remembers it.
  // data-ep is the film's id (ep4, cache2): its slide on the stage and its file in /media/films.
  const films = document.querySelector('[data-films]');
  if (films) {
    const player = films.querySelector('[data-films-player]');
    const st = stages.find((s) => s.split.contains(films));
    const pick = (btn) => {
      const id = btn.dataset.ep;
      btn.closest('[data-list]').querySelectorAll('[data-ep]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      films.dataset.stage = id;
      films.dataset.caption = btn.dataset.caption;
      if (st) st.show(id, btn.dataset.caption);
      if (player) {
        player.poster = '/media/films/' + id + '.jpg';
        player.querySelector('source').src = '/media/films/' + id + '.mp4';
        player.load();
        seen.add(player);
        syncInline();
      }
    };
    films.querySelectorAll('[data-ep]').forEach((btn) => btn.addEventListener('click', () => pick(btn)));

    // The series switch: show one series' list, and play the episode it last had (or its first).
    const tabs = [...films.querySelectorAll('[data-tab]')];
    const select = (tab) => {
      const name = tab.dataset.tab;
      films.dataset.series = name;
      tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
      films.querySelectorAll('[data-list]').forEach((l) => { l.hidden = l.dataset.list !== name; });
      films.querySelectorAll('[data-list-sub]').forEach((p) => { p.hidden = p.dataset.listSub !== name; });
      const list = films.querySelector('[data-list="' + name + '"]');
      list.classList.add('is-in');
      pick(list.querySelector('[aria-pressed="true"]') || list.querySelector('[data-ep]'));
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus();
        select(next);
      });
    });
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

  // The hero camera: on wide screens the first scroll pushes in to the monitor behind me,
  // the "What I build" film starts on its screen and grows to the size the intro slide shows it at,
  // so the hero hands over to the intro as one move instead of a cut.
  const cam = document.querySelector('[data-cam]');
  const heroSt = stages.find((s) => s.slides.has('hero') && s.slides.has('intro'));
  if (cam && heroSt && window.gsap && window.ScrollTrigger && !calm.matches) {
    const wrap = cam.parentElement;
    const screen = cam.querySelector('[data-cam-screen]');
    const veil = cam.querySelector('[data-cam-veil]');
    const filmIn = screen.querySelector('video');
    const introFilm = heroSt.slides.get('intro').querySelector('video');
    const intro = document.getElementById('intro');
    document.documentElement.classList.add('cam-on');
    const IMG = { w: 1024, h: 1536 };
    const MON = { x: 40, y: 560, w: 200, h: 182 }; // the monitor, in photo pixels
    const geo = {};

    // Size the camera like object-fit: cover at 50% 22%, then work out the move into the monitor.
    const layout = () => {
      const W = wrap.clientWidth, H = wrap.clientHeight;
      if (!W || !H) return;
      const r = IMG.w / IMG.h;
      const cw = W / H > r ? W : H * r, ch = cw / r;
      const left = (W - cw) * 0.5, top = (H - ch) * 0.22;
      Object.assign(cam.style, { left: left + 'px', top: top + 'px', width: cw + 'px', height: ch + 'px', right: 'auto', bottom: 'auto' });
      const k = cw / IMG.w;
      const mx = (MON.x + MON.w / 2) * k, my = (MON.y + MON.h / 2) * k;
      // the intro film box (.film): the stage minus its padding and the caption bar; the film is a centered square
      const stageH = heroSt.stage.clientHeight;
      const pad = Math.min(64, Math.max(24, innerWidth * 0.04));
      const boxW = W - 2 * pad, boxH = stageH - 56 - 2 * pad;
      const side = Math.min(boxW, boxH);
      geo.origin = mx + 'px ' + my + 'px';
      geo.scale = side / (MON.h * k);
      geo.x = W / 2 - (left + mx);
      geo.y = (pad + boxH / 2) - (top + my);
    };

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: () => intro.getBoundingClientRect().top + scrollY - innerHeight * 0.6,
        scrub: window.Stage && window.Stage.lenis ? true : 0.6,
        invalidateOnRefresh: true,
        onRefreshInit: layout,
        onToggle: (self) => { if (self.isActive && wide.matches) filmIn.play().catch(() => {}); },
        onUpdate: (self) => { if (self.progress < 0.02) filmIn.pause(); },
      },
    });
    tl.set(cam, { transformOrigin: () => geo.origin }, 0)
      .to(cam, { scale: () => geo.scale, x: () => geo.x, y: () => geo.y, duration: 1, ease: 'power2.inOut' }, 0)
      .to(screen, { opacity: 1, duration: 0.3 }, 0.35)
      .to(veil, { opacity: 1, duration: 0.35 }, 0.55);

    // Hero <-> intro: same picture on both sides, so swap without the wipe and keep the film's place.
    heroSt.onShow = (from, to) => {
      const pair = (from === 'hero' && to === 'intro') || (from === 'intro' && to === 'hero');
      if (!pair) return;
      heroSt.stage.classList.add('is-seamless');
      if (to === 'intro' && filmIn.currentTime) introFilm.currentTime = filmIn.currentTime;
      if (to === 'hero' && introFilm.currentTime) filmIn.currentTime = introFilm.currentTime;
      setTimeout(() => heroSt.stage.classList.remove('is-seamless'), 950);
    };
    layout();
    addEventListener('resize', layout);
  }

  // Dust in the room's light: a few slow motes over the hero photo, only while it is on screen.
  const dust = document.querySelector('[data-dust]');
  if (dust && !calm.matches && wide.matches) {
    const ctx = dust.getContext('2d');
    let w = 0, h = 0, motes = [], raf = 0;
    const size = () => {
      const dpr = Math.min(2, devicePixelRatio || 1);
      w = dust.clientWidth; h = dust.clientHeight;
      dust.width = w * dpr; dust.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      motes = Array.from({ length: 46 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 1.6, vx: -0.08 + Math.random() * 0.16, vy: -0.05 - Math.random() * 0.18, a: 0.15 + Math.random() * 0.45, t: Math.random() * 6.28 }));
    };
    const fade = () => { const s = cam && cam.querySelector('[data-cam-veil]'); return s ? 1 - Number(getComputedStyle(s).opacity) : 1; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const f = fade();
      for (const m of motes) {
        m.x += m.vx; m.y += m.vy; m.t += 0.02;
        if (m.y < -4) { m.y = h + 4; m.x = Math.random() * w; }
        if (m.x < -4) m.x = w + 4; else if (m.x > w + 4) m.x = -4;
        ctx.globalAlpha = m.a * (0.6 + 0.4 * Math.sin(m.t)) * f;
        ctx.fillStyle = m.x < w * 0.5 ? '#7dd3fc' : '#c4b5fd';
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    size(); addEventListener('resize', size);
    new IntersectionObserver((e) => {
      const on = e[0].isIntersecting && heroSt && heroSt.current === 'hero';
      cancelAnimationFrame(raf); if (on || e[0].isIntersecting) raf = requestAnimationFrame(draw);
    }, { threshold: 0.01 }).observe(dust);
  }
})();
