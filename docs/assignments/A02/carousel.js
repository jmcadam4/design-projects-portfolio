/* Image carousel for MkDocs Material — progressive enhancement.
 *
 * The CSS already gives a working, uncropped, swipeable strip on its own.
 * Everything here is optional polish: arrows, dots, and shrinking the
 * frame to the active image. Every measurement is guarded, so a bad or
 * early read leaves the CSS default (height:auto = tallest slide) rather
 * than clamping the frame and cropping the image. */

function initCarousel(root) {
  if (root.dataset.carouselReady) return;
  root.dataset.carouselReady = '1';

  const track   = root.querySelector('[data-track]');
  const slides  = track ? Array.from(track.children) : [];
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');
  const dotsBox = root.querySelector('[data-dots]');
  if (!track || !slides.length) return;

  let index = 0;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.className = 'carousel__dot';
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to image ' + (i + 1) + ' of ' + slides.length);
    b.addEventListener('click', function () { scrollToSlide(i); });
    dotsBox.appendChild(b);
    return b;
  });

  /* Shrink the frame to the active image. Bails out on any bad number —
   * that leaves height:auto, which shows the image whole. Never crops. */
  function fitHeight() {
    const img = slides[index] && slides[index].querySelector('img');
    if (!img) return;
    const w  = img.naturalWidth  || parseFloat(img.getAttribute('width'));
    const h  = img.naturalHeight || parseFloat(img.getAttribute('height'));
    const cw = track.clientWidth;
    if (!w || !h || !cw) return;              // <- the guard that matters
    track.style.height = (cw * h / w) + 'px';
  }

  function paint() {
    dots.forEach(function (d, n) { d.setAttribute('aria-current', String(n === index)); });
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
    fitHeight();
  }

  function scrollToSlide(i) {
    index = Math.max(0, Math.min(i, slides.length - 1));
    track.scrollTo({ left: index * track.clientWidth });  // CSS handles smoothness
    paint();
  }

  prevBtn.addEventListener('click', function () { scrollToSlide(index - 1); });
  nextBtn.addEventListener('click', function () { scrollToSlide(index + 1); });

  /* Native scrolling (swipe, trackpad, arrow keys) is the source of truth —
   * read the index back off scroll position instead of tracking it ourselves. */
  let ticking = false;
  track.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      const cw = track.clientWidth;
      if (!cw) return;
      const i = Math.round(track.scrollLeft / cw);
      if (i !== index) { index = i; paint(); }
    });
  }, { passive: true });

  // Images finish loading and containers reflow — both change the right height.
  slides.forEach(function (s) {
    const img = s.querySelector('img');
    if (img && !img.complete) img.addEventListener('load', fitHeight, { once: true });
  });
  if (window.ResizeObserver) new ResizeObserver(fitHeight).observe(track);

  root.classList.add('is-ready');   // reveals arrows + dots
  paint();
}

function initAllCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    try { initCarousel(root); } catch (e) { console.error('carousel:', e); }
  });
}

/* document$ fires on first load AND on Material's instant navigation. */
if (typeof document$ !== 'undefined') {
  document$.subscribe(initAllCarousels);
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllCarousels);
} else {
  initAllCarousels();
}
