// const images = [
//   "https://picsum.photos/id/0/200/300",
//   "https://picsum.photos/id/10/200/300",
//   "https://picsum.photos/id/20/200/300",
//   "https://picsum.photos/id/30/200/300",
//   "https://picsum.photos/id/40/200/300",
//   "https://picsum.photos/id/50/200/300",
//   "https://picsum.photos/id/60/200/300",
//   "https://picsum.photos/id/70/200/300",
//   "https://picsum.photos/id/80/200/300",
//   "https://picsum.photos/id/90/200/300",
// ];

const gallery = document.getElementById("gallery");

/* AVEC FOR EACH */
// images.forEach((image) => {
// /* AVEC INNER HTML */
//   // gallery.innerHTML += `
//   //   <div class="image">
//   //     <img src="${image}" alt />
//   //   </div>
//   // `;

//   /* AVEC CREATE ELEMENT */
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("image");
//   const img = document.createElement("img");
//   img.src = image;
//   img.alt = "";
//   imgContainer.appendChild(img);
//   gallery.appendChild(imgContainer);
// });

/* AVEC MAP */
// gallery.innerHTML = images
//   .map(
//     (image) => `
//     <div class="image">
//       <img src="${image}" alt />
//     </div>
//   `
//   )
//   .join("");

function addImage() {
  const imagesCount = gallery.querySelectorAll(".image").length;

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image");
  imgContainer.innerHTML = `
    <img src="https://picsum.photos/id/${
      (imagesCount * 10) % 1000
    }/200/300" alt />
  `;
  gallery.appendChild(imgContainer);
}

function addImages(count) {
  new Array(count).fill(null).forEach(() => addImage());

  // for (let i = 0; i < count; i++) {
  //   addImage();
  // }
}

addImages(10);

document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    addImages(10);
  }
});
