import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


galleryContainer.addEventListener('click', onOpenImage);
let instanceGallery = null;

function onOpenImage(event){
  event.preventDefault();
  if(event.target.nodeName === 'IMG'){
    const imageSource = event.target.dataset["source"];
    instanceGallery = basicLightbox.create(`<img src="${imageSource}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeyDown);
        instance.element().querySelector("img").onclick = instance.close;
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onKeyDown);
      }
    }
  );

  instanceGallery.show();
  }
}
function onKeyDown(event) {
  if (event.key === "Escape") {
    instanceGallery.close();
  }
}

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join("");
}
