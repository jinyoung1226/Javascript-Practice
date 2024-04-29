document.addEventListener("DOMContentLoaded", function () {
  loadPosts(); // 페이지 로드 시 실행할 함수
});

// list 페이지로 로드될 때마다 로컬스토리지의 모든 값을 목록으로 나타내는 함수
function loadPosts() {
  let existingData = localStorage.getItem("formDataStorages");
  let saveItems = JSON.parse(existingData);

  for (let i = 0; i < saveItems.length; i++) {
    let contentsBox = document.getElementById("contents-list");
    let contentsList = document.createElement("li");
    let contentTitle = document.createElement("div");
    let contentWriter = document.createElement("div");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let titles = saveItems[i].title;
    let writers = saveItems[i].writer;

    contentTitle.textContent = titles;
    contentWriter.textContent = writers;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    contentTitle.id = "content-title";
    contentTitle.setAttribute("data-id", i);
    contentWriter.id = "content-writer";

    contentTitle.addEventListener("click", () => {
      location.href = `view.html?id=${i}`;
    });

    editBtn.id = "edit-btn";
    editBtn.setAttribute("data-id", i);
    deleteBtn.id = "delete-btn";
    deleteBtn.setAttribute("data-id", i);

    editBtn.addEventListener("click", () => {
      location.href = `edit.html?id=${i}`;
    });

    contentsList.classList.add("contents");

    contentsList.appendChild(contentTitle);
    contentsList.appendChild(contentWriter);
    contentsList.appendChild(editBtn);
    contentsList.appendChild(deleteBtn);

    contentsBox.appendChild(contentsList);

    deleteBtn.addEventListener("click", function () {
      deleteData(deleteBtn, contentsList);
    });
  }
}
