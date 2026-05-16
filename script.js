// Used Ask mode and chatgpt to understand how to trigger modals openning for different items. first it detects all the modal in the page


document.querySelectorAll('.modal').forEach(trigger => {
  let dialog = (trigger.nextElementSibling === 'DIALOG')
    ? trigger.nextElementSibling
    : (trigger.closest('section') || trigger.parentElement).querySelector('dialog');

 	trigger.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });

  const closeBtn = dialog.querySelector('.closeModal');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  });

  // clicking backdrop closes the dialog
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  });
});

