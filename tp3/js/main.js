document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const nav = document.querySelector('nav');
  if (nav) {
    const check = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    check(); window.addEventListener('scroll', check, { passive: true });
  }

  /* ── ACTIVE LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === page) a.classList.add('active');
  });

  /* ── HAMBURGER ── */
  const ham  = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', e => {
      if (ham && menu && !ham.contains(e.target) && !menu.contains(e.target))
        menu.classList.remove('open');
    });
  }

  /* ── INTERSECTION OBSERVER ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const txt = btn.querySelector('span') || btn;
      const orig = txt.textContent;
      txt.textContent = 'Message envoyé ✓';
      btn.disabled = true;
      btn.style.background = '#4dac7e'; btn.style.borderColor = '#4dac7e';
      setTimeout(() => {
        txt.textContent = orig; btn.disabled = false;
        btn.style.background = ''; btn.style.borderColor = '';
        form.reset();
      }, 3500);
    });
  }

  /* ── GALLERY LIGHTBOX ── */
  if (document.querySelector('.gallery-item')) {
    const lb = Object.assign(document.createElement('div'), { id: 'vela-lb' });
    lb.innerHTML = `<div class="lb-bg"></div><div class="lb-box"><button class="lb-close">✕</button><img class="lb-img" src="" alt=""/><p class="lb-cap"></p></div>`;
    document.body.appendChild(lb);
    const style = document.createElement('style');
    style.textContent = `
      #vela-lb{display:none;position:fixed;inset:0;z-index:900;align-items:center;justify-content:center;}
      #vela-lb.open{display:flex;}
      .lb-bg{position:absolute;inset:0;background:rgba(13,27,46,.94);cursor:pointer;}
      .lb-box{position:relative;z-index:1;max-width:90vw;text-align:center;}
      .lb-img{max-width:100%;max-height:82vh;object-fit:contain;border:1px solid rgba(201,168,76,.2);}
      .lb-cap{color:var(--muted);font-family:'Outfit',sans-serif;font-size:12px;margin-top:12px;letter-spacing:.1em;}
      .lb-close{position:absolute;top:-42px;right:0;background:none;border:1px solid rgba(201,168,76,.4);color:var(--gold);width:34px;height:34px;cursor:pointer;font-size:13px;}
    `;
    document.head.appendChild(style);
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        lb.querySelector('.lb-img').src = img.src;
        lb.querySelector('.lb-cap').textContent = img.alt;
        lb.classList.add('open');
      });
    });
    lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
    lb.querySelector('.lb-bg').addEventListener('click',    () => lb.classList.remove('open'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }
});
