import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


galleryContainer.addEventListener('click', onOpenImage);

function onOpenImage(event){
  event.preventDefault();
  if(event.target.nodeName === 'IMG'){
    const imageSource = event.target.dataset["source"];
    const instance = basicLightbox.create(`<img src="${imageSource}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        }, {
          once: true
        });
        instance.element().querySelector("img").onclick = instance.close;
      }
    }
  );

  instance.show();
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
