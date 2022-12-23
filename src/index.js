import './style.css';
import addTodoItem from './modules/addTodo.js';
import displayTodoList from './modules/displayTodo.js';
import editTodoTask from './modules/editTask.js';
import removeAllCheckedItem from './modules/removeAllSelected.js';
import removeTask from './modules/removeTask.js';

const form = document.querySelector('.form');
const todoInput = document.querySelector('.todo-item-input');
const clearBtn = document.querySelector('.clear-btn');
let todoList = [];

// Add new todo list on form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (todoInput.value) {
    addTodoItem(todoInput.value, todoList);
    todoInput.value = '';
    const newItemIndex = todoList.length - 1;
    displayTodoList(todoList[newItemIndex]);
  }
});

// eventListener for option and remove button
document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-ellipsis-vertical') {
    const optionBtn = e.target;
    optionBtn.classList.add('hide-optionBtn');

    const delBtn = e.target.parentElement.lastChild;
    delBtn.classList.add('show-trashBtn');
    editTodoTask(e, delBtn, optionBtn);
  } else if (e.target.className === 'fa-solid fa-trash-clock fa-trash show-trashBtn') {
    const { index } = e.target.parentElement.parentElement.dataset;
    todoList = removeTask(index);
    window.location.reload();
  }
});

// Remove all selected items and reset index
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeAllCheckedItem();
});

window.addEventListener('load', () => {
  const todoTasks = localStorage.getItem('todo_List');
  if (todoTasks) {
    todoList = JSON.parse(todoTasks);
    todoList.forEach(displayTodoList);
  }
});
