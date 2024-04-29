const xBtnElement = document.getElementById("close-btn");
const title = document.getElementById("title");
const writer = document.getElementById("writer");
const content = document.getElementById("content");
const editBtnElement = document.getElementById("edit-btn");

xBtnElement.addEventListener("click", () => {
  location.href = "list.html";
});

document.addEventListener("DOMContentLoaded", postData);

function postData() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const existingData = localStorage.getItem("formDataStorages");
  const saveItems = JSON.parse(existingData);
  const post = saveItems[id];

  title.value = post.title;
  writer.value = post.writer;
  content.textContent = post.content;
}

editBtnElement.addEventListener("click", editData);

function editData() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const existingData = localStorage.getItem("formDataStorages");
  const saveItems = JSON.parse(existingData);
  const post = saveItems[id];

  post.title = title.value;
  post.writer = writer.value;
  post.content = content.value;

  saveItems[id] = post;

  localStorage.setItem("formDataStorages", JSON.stringify(saveItems));

  location.href = "list.html";
}
