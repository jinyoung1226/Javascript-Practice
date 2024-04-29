function deleteData(deleteBtn, contentsList) {
  const existingData = localStorage.getItem("formDataStorages");
  let saveItems = JSON.parse(existingData);

  contentsList.remove();
  saveItems.splice(deleteBtn.dataset.id, 1);

  localStorage.setItem("formDataStorages", JSON.stringify(saveItems));
}
