const editTodoTask = (event) => {
  const parent = event.target.parentElement;
  const taskContainer = parent.parentElement;
  taskContainer.classList.add('edit-task');
  const editingTask = document.createElement('input');
  editingTask.type = 'text';
  editingTask.className = 'editing-input';
  const att = document.createAttribute('autofocus');
  att.value = true;
  editingTask.setAttributeNode(att);
  const selectedTask = parent.parentElement.childNodes[0].lastElementChild.childNodes[0];
  const currentTodoTitle = parent.previousElementSibling.lastElementChild;
  currentTodoTitle.removeChild(selectedTask);

  currentTodoTitle.appendChild(editingTask);
  editingTask.value = selectedTask.textContent.trim();
};

export default editTodoTask;