import './style.css';
import addTodoItem from './modules/addNewItem.js';
import displayTodoList from './modules/displayTodoList.js';
// import removeAllCheckedItem from './modules/removeAllSelected.js';

const form = document.querySelector('.form');
// Const clearBtn = document.querySelector('.clear-btn');

// Add new todo list on form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodoItem();
});

// Remove all selected items and reset index
// clearBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   removeAllCheckedItem();
// });

window.addEventListener('DOMContentLoaded', () => {
  let todoListList = localStorage.getItem('todo_List');
  if (todoListList) {
    todoListList = JSON.parse(todoListList);
    todoListList.forEach(displayTodoList);
  }
});
