const inputElement = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const buttonElement = document.getElementById("addBtn");
const deleteAllElement = document.querySelector(".delete-btn-wrap");
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

inputElement.addEventListener("keydown", keyCodeCheck);
deleteAllElement.addEventListener("click", deleteAll);

if (savedTodoList) {
  // savedTodoList(로컬 데이터)가 존재하면 실행
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]); // 전달인자로 전달
  }
}

function keyCodeCheck() {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
}

buttonElement.addEventListener("click", () => {
  // + 버튼으로 추가
  if (todoInput.value !== "") {
    // 빈 값 입력 방지
    createTodo();
  }
});

function createTodo(storageData) {
  let todoContents = inputElement.value;
  if (storageData) {
    todoContents = storageData.contents;
  }
  // 할 일 추가 기능
  const newLi = document.createElement("li"); // li 생성
  const newBtn = document.createElement("button"); // button 생성
  const newSpan = document.createElement("span"); // span 생성

  newLi.appendChild(newBtn); // li안에 button 담기
  newLi.appendChild(newSpan); // li안에 span 담기

  newSpan.textContent = todoContents; // span 안에 value값 담기

  todoList.appendChild(newLi);

  todoInput.value = ""; // value 값에 빈 문자열 담기

  newBtn.addEventListener("click", () => {
    // 체크박스 클릭시 완료 표시
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();

    saveItemsFn();
  });

  if (storageData && storageData.complete === true) {
    newLi.classList.add("complete");
  }

  saveItemsFn();
}

function deleteAll() {
  // 전체 삭제 버튼
  const liList = document.querySelectorAll("#todoList li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
}

function saveItemsFn() {
  // 로컬에 데이터 저장하기
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent, // 리스트 목록
      complete: todoList.children[i].classList.contains("complete"), // 완료 표시된 리스트
    };
    saveItems.push(todoObj); // 배열 추가
  }
  if (saveItems.length === 0) {
    localStorage.removeItem("saved-items");
  } else {
    localStorage.setItem("saved-items", JSON.stringify(saveItems)); // localStorage 추가
  }
}
