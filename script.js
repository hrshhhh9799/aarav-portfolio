/* ============================================================
   AARAV SHIVHARE — PORTFOLIO SCRIPT
   All interactivity, 3D canvas, animations, and config rendering
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════════
   0.  WAIT FOR DOM
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── Shorthand ─────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);
  const C = PORTFOLIO_CONFIG;

  /* ══════════════════════════════════════════════════════════
     1.  LOADING SCREEN
  ══════════════════════════════════════════════════════════ */
  const loader       = $('loader');
  const loaderFill   = $('loaderBarFill');
  const loaderLabel  = $('loaderLabel');
  const loaderSteps  = [
    [0,   'Initializing…'],
    [20,  'Loading assets…'],
    [45,  'Building universe…'],
    [70,  'Rendering portfolio…'],
    [95,  'Almost there…'],
    [100, 'Welcome!']
  ];

  let stepIdx = 0;
  const advanceLoader = () => {
    if (stepIdx >= loaderSteps.length) {
      setTimeout(() => {
        loader.classList.add('loaded');
        document.body.style.cursor = '';
      }, 300);
      return;
    }
    const [pct, label] = loaderSteps[stepIdx++];
    loaderFill.style.width  = pct + '%';
    loaderLabel.textContent = label;
    const delay = stepIdx < loaderSteps.length ? 300 + Math.random() * 200 : 600;
    setTimeout(advanceLoader, delay);
  };
  setTimeout(advanceLoader, 200);

  /* ══════════════════════════════════════════════════════════
     2.  CONFIG → DOM  (populate everything from config.js)
  ══════════════════════════════════════════════════════════ */
  const render = {

    // Hero
    hero() {
      $('heroName').innerHTML    = C.name.replace(' ', '<br class="name-break"/>');
      $('heroTagline').textContent = C.tagline;
    },

    // About
    about() {
      $('aboutBio').textContent         = C.bio.replace(/\s+/g, ' ').trim();
      $('aboutDegree').textContent      = C.education.degree.replace('B.Tech — ', 'B.Tech ');
      $('aboutUni').textContent         = C.education.university;
      $('aboutStatus').textContent      = C.education.status;
      $('aboutDegreeDetail').textContent = C.education.degree;
      $('aboutUniDetail').textContent   = C.education.university;
      $('aboutDuration').textContent    = C.education.duration;

      // Learning chips
      const ul = $('learningList');
      C.currentlyLearning.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
    },

    // Skills
    skills() {
      const icons = { html5: '🌐', python: '🐍', c: '⚙️', mysql: '🗄️' };
      const grid  = $('skillsGrid');

      C.skills.forEach((skill, i) => {
        const card = document.createElement('div');
        card.className = 'skill-card reveal-up';
        card.style.setProperty('--d', (i * 0.1) + 's');
        card.innerHTML = `
          <div class="skill-icon-wrap">${icons[skill.icon] || '💻'}</div>
          <div class="skill-name">${skill.name}</div>
          <span class="skill-level">${skill.level}</span>
          <p class="skill-description">${skill.description}</p>
        `;
        grid.appendChild(card);
      });
    },

    // Projects
    projects() {
      const projectIcons = ['🚀', '🐍', '🗄️', '🌐', '⚡', '🧠'];
      const grid = $('projectsGrid');

      C.projects.forEach((proj, i) => {
        const statusClass = proj.status.toLowerCase().replace(' ', '-');
        const phBadge = proj.placeholder
          ? `<span class="project-placeholder-badge">PLACEHOLDER</span>`
          : '';
        const linkBtns = [
          proj.github ? `<a class="project-link" href="${proj.github}" target="_blank" rel="noopener">
            ↗ GitHub
          </a>` : '',
          proj.link ? `<a class="project-link" href="${proj.link}" target="_blank" rel="noopener">
            ↗ Live
          </a>` : ''
        ].filter(Boolean).join('');

        const card = document.createElement('div');
        card.className = 'project-card reveal-up';
        card.style.setProperty('--d', (i * 0.1) + 's');
        card.innerHTML = `
          <div class="project-header">
            <div class="project-icon">${projectIcons[i] || '💻'}</div>
            <div class="project-badges">
              <span class="project-status ${statusClass}">${proj.status}</span>
              ${phBadge}
            </div>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-description">${proj.description}</p>
          <div class="project-tech">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          ${linkBtns ? `<div class="project-links">${linkBtns}</div>` : ''}
        `;
        grid.appendChild(card);
      });
    },

    // Hobbies
    hobbies() {
      const grid = $('hobbiesGrid');
      C.hobbies.forEach((h, i) => {
        const card = document.createElement('div');
        card.className = 'hobby-card reveal-up';
        card.style.setProperty('--d', (i * 0.15) + 's');
        card.innerHTML = `
          <span class="hobby-emoji">${h.emoji}</span>
          <h3 class="hobby-name">${h.name}</h3>
          <p class="hobby-description">${h.description}</p>
        `;
        grid.appendChild(card);
      });
    },

    // Contact
    contact() {
      $('contactEmailBtn').href = `mailto:${C.contact.email}`;

      const linksContainer = $('contactLinks');
      const socials = [
        { key: 'github',   label: 'GitHub',   emoji: '🐙' },
        { key: 'linkedin', label: 'LinkedIn',  emoji: '💼' },
        { key: 'twitter',  label: 'Twitter',   emoji: '🐦' }
      ];

      socials.forEach(({ key, label, emoji }) => {
        if (!C.contact[key]) return;
        const a = document.createElement('a');
        a.className = 'contact-social';
        a.href = C.contact[key];
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `${emoji} ${label}`;
        linksContainer.appendChild(a);
      });
    },

    // Footer
    footer() {
      const year = new Date().getFullYear();
      $('footerText').textContent = `© ${year} ${C.name} — All rights reserved.`;
    }
  };

  // Run all renders
  Object.values(render).forEach(fn => fn());

  /* ══════════════════════════════════════════════════════════
     3.  TYPEWRITER
  ══════════════════════════════════════════════════════════ */
  const typewriterEl = $('typewriter');
  const phrases = [
    'CS Student @ JECRC University',
    'Learning Python & HTML',
    'Chess Player & Strategic Thinker',
    'Aspiring Software Developer',
    'Building projects, one line at a time'
  ];

  let phrIdx = 0, charIdx = 0, deleting = false, twTimeout = null;

  function typeWriter() {
    const phrase = phrases[phrIdx];
    if (!deleting) {
      typewriterEl.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        twTimeout = setTimeout(typeWriter, 1800);
        return;
      }
    } else {
      typewriterEl.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phrIdx = (phrIdx + 1) % phrases.length;
      }
    }
    twTimeout = setTimeout(typeWriter, deleting ? 45 : 80);
  }

  setTimeout(typeWriter, 1400);

  /* ══════════════════════════════════════════════════════════
     4.  NAVIGATION — scroll spy + burger menu
  ══════════════════════════════════════════════════════════ */
  const nav       = $('nav');
  const navBurger = $('navBurger');
  const navDrawer = $('navDrawer');
  const navLinks  = $$('.nav-link');

  // Scroll → scrolled class & active link
  const sections = $$('section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.dataset.section === current);
    });
  }, { passive: true });

  // Burger
  navBurger.addEventListener('click', () => {
    navDrawer.classList.toggle('open');
  });

  // Close drawer on link click
  $$('.nav-drawer-link').forEach(l => {
    l.addEventListener('click', () => navDrawer.classList.remove('open'));
  });

  // Close drawer on outside click
  document.addEventListener('click', e => {
    if (!navDrawer.contains(e.target) && !navBurger.contains(e.target)) {
      navDrawer.classList.remove('open');
    }
  });

  /* ══════════════════════════════════════════════════════════
     5.  CUSTOM CURSOR
  ══════════════════════════════════════════════════════════ */
  const cursorGlow = $('cursorGlow');
  let mx = -500, my = -500, cx = -500, cy = -500;

  window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  // Smooth cursor tracking
  function animateCursor() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    cursorGlow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  /* ══════════════════════════════════════════════════════════
     6.  SCROLL REVEAL
  ══════════════════════════════════════════════════════════ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('in-view');
        revealObserver.unobserve(target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observeReveal() {
    $$('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Observe after a tick so dynamically added elements are in DOM
  setTimeout(observeReveal, 50);

  /* ══════════════════════════════════════════════════════════
     7.  3D PARTICLE CANVAS BACKGROUND
  ══════════════════════════════════════════════════════════ */
  const canvas  = $('bgCanvas');
  const ctx     = canvas.getContext('2d');
  let W, H, particles = [], lines = [];
  const PARTICLE_COUNT = 80;
  const LINE_DIST      = 140;
  const MOUSE_RADIUS   = 180;

  let mouseX = -9999, mouseY = -9999;
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  class Particle {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : -10;
      this.z  = Math.random() * 3 + 0.5;   // depth / speed factor
      this.vx = (Math.random() - 0.5) * 0.3 * this.z;
      this.vy = (Math.random() * 0.2 + 0.05) * this.z;
      this.r  = Math.random() * 1.5 + 0.5;
      const hues = [262, 190, 43];           // violet, cyan, amber
      this.hue = hues[Math.floor(Math.random() * hues.length)];
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      // Mouse repulsion
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        this.x += dx / dist * force * 1.5;
        this.y += dy / dist * force * 1.5;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap horizontal
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      // Reset if off bottom
      if (this.y > H + 10) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * this.z, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 90%, 70%, ${this.alpha})`;
      ctx.fill();
    }
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINE_DIST) {
          const alpha = (1 - d / LINE_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  let rafId;
  function animateCanvas() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    rafId = requestAnimationFrame(animateCanvas);
  }

  resize();
  initParticles();
  animateCanvas();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════
     8.  SKILL CARD — 3D TILT EFFECT
  ══════════════════════════════════════════════════════════ */
  function addTilt(card) {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(600px) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) translateY(-6px) scale(1.01)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  }

  // Attach tilt after a tick so dynamically inserted cards are present
  setTimeout(() => {
    $$('.skill-card, .project-card, .hobby-card').forEach(addTilt);
  }, 100);

  /* ══════════════════════════════════════════════════════════
     9.  PROJECT CARD MAGNETIC LINK EFFECT
  ══════════════════════════════════════════════════════════ */
  $$('.btn-primary, .btn-ghost, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* ══════════════════════════════════════════════════════════
     10.  HERO — PARALLAX SHAPES
  ══════════════════════════════════════════════════════════ */
  const heroShapes = $$('.shape');

  window.addEventListener('mousemove', e => {
    const xPct = (e.clientX / window.innerWidth  - 0.5) * 2;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
    heroShapes.forEach((s, i) => {
      const depth = (i + 1) * 4;
      s.style.transform = `translate(${xPct * depth}px, ${yPct * depth}px)`;
    });
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════
     11.  SMOOTH SECTION TRANSITIONS (internal links)
  ══════════════════════════════════════════════════════════ */
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ══════════════════════════════════════════════════════════
     12.  FOOTER — current year already set by render.footer()
  ══════════════════════════════════════════════════════════ */

  /* ══════════════════════════════════════════════════════════
     13.  CLEANUP
  ══════════════════════════════════════════════════════════ */
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(rafId);
    clearTimeout(twTimeout);
  });

  console.log(
    '%c Aarav Shivhare Portfolio ',
    'background: #7C3AED; color: #fff; font-size: 14px; padding: 6px 12px; border-radius: 4px; font-family: monospace;',
    '\nBuilt with ♥ — a real developer lives here.'
  );
});
