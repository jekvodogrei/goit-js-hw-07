import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

// div для галереи
const galleryHtml = galleryItems
  .map(
    (galItem) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${galItem.original}">
    <img
      class="gallery__image"
      src="${galItem.preview}"
      data-source="${galItem.original}"
      alt="${galItem.description}"
    /></a>
</div>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryHtml);

// Делегирование

const galleryItem = document.querySelector(".gallery");

galleryItem.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.className !== "gallery__image") {
    console.log(event.target.className);
    return;
  }

  let srcLink = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${srcLink}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
