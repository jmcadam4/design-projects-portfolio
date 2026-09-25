/* Click-to-enlarge images — progressive enhancement, no dependencies.
 *
 * Clicking a figure image opens it in a centered overlay, larger but not
 * fullscreen. Closes on backdrop click, the close button, or Escape. */

let overlay, overlayImg, overlayCaption;

function lightboxEligible(img) {
  if (img.closest('.project-card')) return false;   // homepage cards navigate instead
  if (img.closest('.lightbox-overlay')) return false;
  return img.closest('.md-typeset') !== null;
}

function buildOverlay() {
  if (overlay && document.body.contains(overlay)) return;

  overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>' +
    '<figure class="lightbox-figure">' +
      '<img class="lightbox-image" alt="">' +
      '<figcaption class="lightbox-caption"></figcaption>' +
    '</figure>';
  document.body.appendChild(overlay);

  overlayImg = overlay.querySelector('.lightbox-image');
  overlayCaption = overlay.querySelector('.lightbox-caption');

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
}

function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox();
}

function openLightbox(img) {
  buildOverlay();
  overlayImg.src = img.currentSrc || img.src;
  overlayImg.alt = img.alt || '';

  const figure = img.closest('figure');
  const figcaption = figure && figure.querySelector('figcaption');
  overlayCaption.textContent = figcaption ? figcaption.textContent : '';
  overlayCaption.style.display = figcaption ? '' : 'none';

  overlay.classList.add('is-open');
  document.body.classList.add('lightbox-locked');
  document.addEventListener('keydown', onKeydown);
}

function closeLightbox() {
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.classList.remove('lightbox-locked');
  document.removeEventListener('keydown', onKeydown);
}

function initLightbox() {
  document.querySelectorAll('.md-typeset img').forEach(function (img) {
    if (img.dataset.lightboxReady) return;
    if (!lightboxEligible(img)) return;
    img.dataset.lightboxReady = '1';

    img.classList.add('lightbox-zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Expand image');

    img.addEventListener('click', function () { openLightbox(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });
}

/* document$ fires on first load AND on Material's instant navigation. */
if (typeof document$ !== 'undefined') {
  document$.subscribe(initLightbox);
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLightbox);
} else {
  initLightbox();
}
