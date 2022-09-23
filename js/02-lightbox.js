import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageCardsMarkup(galleryItems);
console.log(galleryMarkup);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      title="${description}" />
    </a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
