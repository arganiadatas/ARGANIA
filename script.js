function createPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content === "") return;

  const post = document.createElement("div");
  post.className = "post";

  const postText = document.createElement("p");
  postText.textContent = content;

  const actions = document.createElement("div");
  actions.className = "post-actions";

  // Crear contadores
  let likes = 0, reposts = 0, comments = 0;

  const likeBtn = document.createElement("span");
  likeBtn.textContent = `❤️ ${likes}`;
  likeBtn.onclick = () => {
    likes++;
    likeBtn.textContent = `❤️ ${likes}`;
  };

  const repostBtn = document.createElement("span");
  repostBtn.textContent = `🔁 ${reposts}`;
  repostBtn.onclick = () => {
    reposts++;
    repostBtn.textContent = `🔁 ${reposts}`;
  };

  const commentBtn = document.createElement("span");
  commentBtn.textContent = `💬 ${comments}`;
  commentBtn.onclick = () => {
    comments++;
    commentBtn.textContent = `💬 ${comments}`;
  };

  actions.appendChild(likeBtn);
  actions.appendChild(repostBtn);
  actions.appendChild(commentBtn);

  post.appendChild(postText);
  post.appendChild(actions);

  document.getElementById("postsContainer").prepend(post);
  document.getElementById("postContent").value = "";
}
