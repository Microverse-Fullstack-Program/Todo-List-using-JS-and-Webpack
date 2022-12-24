import './style.css';
import addTodoItem from './modules/addTodo.js';
import displayTodoList from './modules/displayTodo.js';
import editTodoTask from './modules/editTask.js';
import removeAllCheckedItem from './modules/removeAllSelected.js';
import removeTask from './modules/removeTask.js';
import resetIndex from './modules/resetIndex.js';
import editingDescription from './modules/editDescription.js';
import editingStatus from './modules/editStatus.js';

const form = document.querySelector('.form');
const todoItems = document.querySelector('.todo-list');
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
    displayTodoList(todoItems, todoList[newItemIndex]);
  }
});

// eventListener for check/uncheck todo tasks
document.addEventListener('change', (e) => {
  if (e.target.className === 'editing-input') {
    const updatedValue = e.target.value;
    let editIndex = e.target.parentElement.parentElement.parentElement.dataset;
    editIndex = parseInt(editIndex.index, 10);
    if (updatedValue) {
      editingDescription(editIndex, updatedValue);
    }
    window.location.reload();
  } else if (e.target.className === 'checkBtn') {
    const targetElement = e.target;
    const todoTaskTitle = targetElement.nextElementSibling.childNodes[0];
    const todoTaskContainer = targetElement.parentElement.parentElement;
    const { index } = todoTaskContainer.dataset;
    if (targetElement.checked === true) {
      todoTaskTitle.style.textDecoration = 'line-through';
    } else {
      todoTaskTitle.style.textDecoration = 'none';
    }
    editingStatus(parseInt(index, 10));
  }
});

// eventListener for option and remove button
document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-ellipsis-vertical') {
    const optionBtn = e.target;
    optionBtn.classList.add('hide-optionBtn');

    const delBtn = e.target.parentElement.lastChild;
    delBtn.classList.add('show-trashBtn');
    editTodoTask(e);
  } else if (e.target.className === 'fa-solid fa-trash-clock fa-trash show-trashBtn') {
    const { index } = e.target.parentElement.parentElement.dataset;
    removeTask(index);
    resetIndex();
    window.location.reload();
  } else if (e.target.className === 'fa-solid fa-rotate') {
    localStorage.removeItem('todo_List');
    window.location.reload();
  }
});

// Remove all selected items and reset index
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeAllCheckedItem();
  resetIndex();
  window.location.reload();
});

window.addEventListener('load', () => {
  const todoTasks = localStorage.getItem('todo_List');
  if (todoTasks) {
    todoList = JSON.parse(todoTasks);
    todoList.forEach((task) => {
      displayTodoList(todoItems, task);
    });
  }
});