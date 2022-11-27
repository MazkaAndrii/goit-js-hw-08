// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkUp = galleryItems
  .map(item => {
    return `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img
         class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
         alt="${item.description}"
      />
   </a>
</div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkUp);
galleryContainer.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${e.target.dataset.source} />`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscape);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscape);
      },
    }
  );
  instance.show();

  function onEscape(e) {
    if (e.key === 'Escape') instance.close();
  }
}
