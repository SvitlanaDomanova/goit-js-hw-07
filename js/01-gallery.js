import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divRef = document.querySelector(".gallery");

function createGalleryMarkUp(items) {
    return items
    .map(
        (item) => `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`   
    )
    .join("");
}
const addGalleryMarkUp =createGalleryMarkUp(galleryItems);

divRef.innerHTML = addGalleryMarkUp;
divRef.addEventListener('click', onImageClick);

function onImageClick(event){
    blockStandartAction(event);
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width ="800" height = "600">`
    );
    instance.show();

}

console.log(galleryContainer);
const instance = basicLightbox.create(`<div class="modal">
    <p>
        Your first lightbox with just a few lines of code.
        Yes, it's really that simple.
    </p>
</div>
`)
function blockStandartAction(event) {
    event.preventDefault();
}
