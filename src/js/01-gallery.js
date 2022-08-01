import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallaryRef = document.querySelector('div.gallery');

gallaryRef.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" /></a>`
  )
  .join(' ');

if ('loading' in HTMLImageElement.prototype) {
  const loadingLazyImages = document.querySelectorAll('img[loading="lazy"]');

  loadingLazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const lazySizes = require('lazysizes');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
