// Support multiple modal triggers/dialogs
document.querySelectorAll('.modal').forEach(trigger => {
  // try common placements: next sibling dialog, or a dialog inside the closest section/parent
  let dialog = (trigger.nextElementSibling && trigger.nextElementSibling.tagName === 'DIALOG')
    ? trigger.nextElementSibling
    : (trigger.closest('section') || trigger.parentElement).querySelector('dialog');

  if (!dialog) {
    console.warn('No dialog found for trigger', trigger);
    return;
  }

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

// optional: ESC key closes any open dialogs
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('dialog[open]').forEach(d => d.close && d.close());
});
// ...existing code...
