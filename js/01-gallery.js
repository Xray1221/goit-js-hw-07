import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageCardsMarkup(galleryItems);
console.log(galleryMarkup);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

document.querySelectorAll(".gallery__item").forEach((element) => {
  element
    .querySelector(".gallery__link")
    .addEventListener("click", onClickImage);
});

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

function onClickImage(event) {
  event.preventDefault();
  const imageSource = event.target.dataset["source"];
  const instance = basicLightbox.create(`<img src="${imageSource}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
        instance.element().querySelector("img").onclick = instance.close;
      },
    }
  );

  instance.show();
}
