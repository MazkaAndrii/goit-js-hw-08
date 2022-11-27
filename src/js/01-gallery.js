// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkUp = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkUp);
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
