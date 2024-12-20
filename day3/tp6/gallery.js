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

gallery.innerHTML = new Array(10)
  .fill(null)
  .map((_, index) => createImage(index))
  .join("");

function createImage(index) {
  return `
    <div class="image">
      <img src="https://picsum.photos/id/${index * 10}/200/300" alt />
    </div>
  `;
}
