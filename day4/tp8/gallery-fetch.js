const gallery = document.getElementById("gallery");

let page = 0;

document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    page++;
    fetchImageList();
  }
});

async function fetchImageList() {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    if (!response.ok) {
      throw new Error(`Un problème est survenu avec la liste d'images`);
    }

    const images = await response.json();

    images.forEach((image) => {
      const imgLink = document.createElement("a");
      imgLink.classList.add("image");
      imgLink.target = "_blank";
      imgLink.href = image.download_url;
      imgLink.innerHTML = `
        <img src="https://picsum.photos/id/${image.id}/200/300" alt />
        <p>${image.author}</p>
      `;

      gallery.appendChild(imgLink);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchImageList();
