// 'write'버튼 접근
const writeBtnElement = document.getElementById("write-btn");

// write button이 있을 시, 글 작성 페이지로 이동
if (writeBtnElement) {
  writeBtnElement.addEventListener("click", () => {
    location.href = "write.html";
  });
}

// 'X' 버튼 접근
const xBtnElement = document.getElementById("close-btn");

// 'X' button이 있을 시, 글 로 이동
if (xBtnElement) {
  xBtnElement.addEventListener("click", () => {
    location.href = "list.html";
  });
}

// 작성한 글 데이터를 저장하기 위해 'save'버튼에 접근
const saveBtnElement = document.getElementById("save-btn");

if (saveBtnElement) {
  saveBtnElement.addEventListener("click", addLocal);
}

// 작성 글을 로컬스토리지에 올리는 함수
function addLocal() {
  const title = document.getElementById("title").value;
  const writer = document.getElementById("writer").value;
  const content = document.getElementById("content").value;

  // 필수 필드가 모두 입력되었는지 확인
  if (title === "" || writer === "" || content === "") {
    if (title === "") {
      alert("제목을 입력해주세요.");
    }
    if (writer === "") {
      alert("작성자를 입력해주세요.");
    }
    if (content === "") {
      alert("내용을 입력해주세요.");
    }
    // 필수 필드가 누락된 경우 함수의 나머지 부분을 실행하지 않음
    return;
  }

  const formData = {
    title: title,
    writer: writer,
    content: content,
  };

  saveFormData(formData);

  location.href = "list.html";
}

// 로컬스토리지에 데이터 저장 ([]에 계속해서 push되는 형태)
function saveFormData(formData) {
  const existingData = localStorage.getItem("formDataStorages");
  let saveItems = [];

  if (existingData) {
    saveItems = JSON.parse(existingData);
  }

  saveItems.push(formData);

  localStorage.setItem("formDataStorages", JSON.stringify(saveItems));
}
