const todoItems = document.querySelector('.todo-list');
const displayTodoList = (listElement) => {
  // Create to-do item container
  const divElement = document.createElement('div');
  divElement.classList.add('list-item');
  const attr = document.createAttribute('data-index');
  attr.value = listElement.index;
  divElement.setAttributeNode(attr);
  todoItems.insertBefore(divElement, todoItems.firstElementChild);

  // Create checkbox and todo-tasks title container
  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todo-desc');
  divElement.appendChild(todoTitle);

  // Add checkbox input
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('checkBtn');
  todoTitle.appendChild(checkbox);

  // Create container for todo tasks title
  const newItem = document.createElement('div');
  newItem.classList.add('todoTitle');
  newItem.innerHTML = `<p> ${listElement.description} </p>`;
  todoTitle.appendChild(newItem);

  // Add icons for todo Tasks
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icons');
  iconContainer.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash-clock fa-trash"></i>`;
  divElement.appendChild(iconContainer);
};

export default displayTodoList;
