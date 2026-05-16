const modalButton = document.querySelector("#modal");
const modalDialog = document.querySelector("#dialog");
const closeDialog = modalDialog.querySelector(".closeModal");


console.log(modalButton);
modalButton.addEventListener("click", () => {
  modalDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  modalDialog.close();
});

// Listen to *all* clicks, now including the `event` parameter…
document.addEventListener('click', (event) => {
	// Only clicks on the page itself behind the `dialog`.
	if (event.target == document.documentElement) {
		modalDialog.close() // Close it too then.
	}
})