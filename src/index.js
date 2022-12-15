import './style.css';

const todoList = [
  {
    description: 'Projects',
    completed: true,
    index: 1,
  },
  {
    description: 'Code review',
    completed: true,
    index: 2,
  },
  {
    description: 'Study lesson',
    completed: false,
    index: 3,
  },
  {
    description: 'Standup Meets',
    completed: false,
    index: 3,
  },
];

const todoItem = document.querySelector('.todo-list');
const myTodoList = () => {
  // Lodash, now imported by this script
  todoList.map((listElement) =>  {
    const divElement = document.createElement('div');
    divElement.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    divElement.appendChild(checkbox);
    const label = document.createElement('label');
    label.innerText = listElement.description;
    divElement.appendChild(label);
    todoItem.appendChild(divElement);
  })
};
myTodoList();
