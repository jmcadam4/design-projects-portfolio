/* Image carousel for MkDocs Material.
   Height follows the active slide, so images of different aspect ratios
   are never cropped or letterboxed. */

function initCarousel(root) {
  if (root.dataset.carouselReady) return;   // instant nav can re-run this
  root.dataset.carouselReady = '1';

  const viewport = root.querySelector('.carousel__viewport');
  const track    = root.querySelector('[data-track]');
  const slides   = Array.from(track.children);
  const prevBtn  = root.querySelector('[data-prev]');
  const nextBtn  = root.querySelector('[data-next]');
  const dotsBox  = root.querySelector('[data-dots]');

  const LOOP = false;   // true = wrap past the ends instead of stopping
  let index = 0;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.className = 'carousel__dot';
    b.type = 'button';
    b.setAttribute('aria-label', `Go to image ${i + 1} of ${slides.length}`);
    b.addEventListener('click', () => goTo(i));
    dotsBox.appendChild(b);
    return b;
  });

  /* Height comes from the image's own ratio times the current container
     width. Using naturalWidth/naturalHeight (with the width/height
     attributes as a pre-load fallback) avoids reading layout mid-transition. */
  function fitHeight() {
    const img = slides[index].querySelector('img');
    const w = img.naturalWidth  || parseFloat(img.getAttribute('width'))  || 3;
    const h = img.naturalHeight || parseFloat(img.getAttribute('height')) || 2;
    viewport.style.height = (viewport.clientWidth * h / w) + 'px';
  }

  function goTo(i, animate = true) {
    index = LOOP
      ? (i + slides.length) % slides.length
      : Math.max(0, Math.min(i, slides.length - 1));

    root.classList.toggle('is-dragging', !animate);
    track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
    fitHeight();

    dots.forEach((d, n) => d.setAttribute('aria-current', String(n === index)));
    slides.forEach((s, n) => s.setAttribute('aria-hidden', String(n !== index)));

    if (!LOOP) {
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
    }
    if (!animate) requestAnimationFrame(() => root.classList.remove('is-dragging'));
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  root.tabIndex = 0;
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(index - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { goTo(index + 1); e.preventDefault(); }
  });

  /* Drag / swipe. Advances on distance (>20% of width) OR velocity
     (>40px in under 250ms) — distance alone feels sluggish for a quick
     flick, velocity alone fails a slow deliberate drag. */
  let startX = 0, startT = 0, dx = 0, dragging = false, width = 0;

  root.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    dragging = true;
    startX = e.clientX;
    startT = performance.now();
    dx = 0;
    width = viewport.clientWidth;
    root.classList.add('is-dragging');
    root.setPointerCapture(e.pointerId);
  });

  root.addEventListener('pointermove', e => {
    if (!dragging) return;
    dx = e.clientX - startX;
    track.style.transform =
      `translate3d(${(-index * width + dx) / width * 100}%, 0, 0)`;
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    root.classList.remove('is-dragging');
    const flick = Math.abs(dx) > 40 && performance.now() - startT < 250;
    const past  = Math.abs(dx) > width * 0.2;
    goTo(index + ((flick || past) ? (dx < 0 ? 1 : -1) : 0));
  }

  root.addEventListener('pointerup', endDrag);
  root.addEventListener('pointercancel', endDrag);

  /* Images load after init, and the container reflows on resize —
     both change the correct height. */
  slides.forEach(s => {
    const img = s.querySelector('img');
    if (!img.complete) img.addEventListener('load', () => fitHeight(), { once: true });
  });
  new ResizeObserver(() => fitHeight()).observe(viewport);

  goTo(0, false);
}

function initAllCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(initCarousel);
}

/* Material's document$ fires on first load AND on every instant
   navigation. Without it, the carousel only works when the page is
   opened directly, not when reached via the sidebar. */
if (typeof document$ !== 'undefined') {
  document$.subscribe(initAllCarousels);
} else {
  document.addEventListener('DOMContentLoaded', initAllCarousels);
}
