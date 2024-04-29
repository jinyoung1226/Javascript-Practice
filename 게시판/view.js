document.addEventListener("DOMContentLoaded", viewData);

function viewData() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const existingData = localStorage.getItem("formDataStorages");
  const saveItems = JSON.parse(existingData);
  const post = saveItems[id];

  const title = document.getElementById("title");
  const writer = document.getElementById("writer");
  const content = document.getElementById("content");

  title.value = post.title;
  writer.value = post.writer;
  content.textContent = post.content;
}
