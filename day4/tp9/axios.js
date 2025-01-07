const commentsContainer = document.getElementById("comments");

async function fetchComments() {
  try {
    const comments = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    commentsContainer.innerHTML = comments.data.slice(0, 100)
      .map(
        (comment) =>
          `<div>
            <div>
              <h3>${comment.name}</h3>
              <p>${comment.body}</p>
            </div>
            <p class="author">${comment.email}</p>
          </div>`
      )
      .join("");
  } catch (e) {
    console.log(e);
  }
}

fetchComments();
