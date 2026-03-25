const showDescription = document.getElementById(".showDescription");
const dialog = document.getElementById(".description");
const closeDialog = document.getElementById(".closeDescription");


console.log(showDescription);
showDescription.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});
