import './style.css';
import addTodoItem from './modules/addTodo.js';
import displayTodoList from './modules/displayTodo.js';
import editTodoTask from './modules/editTask.js';
import removeAllCheckedItem from './modules/removeAllSelected.js';
import removeTask from './modules/removeTask.js';
import readLocalStorage from './modules/storage.js';
import resetIndex from './modules/resetIndex';

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

// eventListener for check/uncheck todo tasks
document.addEventListener('change', (e) => {
  if (e.target.className === 'editing-input') {
    const updatedValue = e.target.value;
    let editIndex = e.target.parentElement.parentElement.parentElement.dataset;
    editIndex = parseInt(editIndex.index)
    const updateTodoList = readLocalStorage();
    updateTodoList.forEach((todoTask) => {
      if (todoTask.index === editIndex && updatedValue) {
        todoTask.description = updatedValue;
      }
    });
    localStorage.setItem('todo_List', JSON.stringify(updateTodoList));
    window.location.reload();
  }
  else if (e.target.className === 'checkBtn') {
    const targetElement = e.target;
    const todoTaskTitle = targetElement.nextElementSibling.childNodes[0];
    const todoTaskContainer = targetElement.parentElement.parentElement;
    const { index } = todoTaskContainer.dataset;
    const todoListList = readLocalStorage();
    if (targetElement.checked === true) {
      todoTaskTitle.style.textDecoration = 'line-through';
  
      todoListList.filter((todoTask) => {
        if (todoTask.index === parseInt(index)) {
          todoTask.completed = true;
        }
        return false;
      });
    } else {
      todoTaskTitle.style.textDecoration = 'none';
      todoListList.filter((todoTask) => {
        if (todoTask.index === index) {
          todoTask.completed = false;
        }
        return false;
      });
    }
    localStorage.setItem('todo_List', JSON.stringify(todoListList));
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
    todoList.forEach(displayTodoList);
  }
});
