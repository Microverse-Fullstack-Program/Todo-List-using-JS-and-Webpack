import readLocalStorage from './storage.js';

const removeAllCheckedItem = () => {
  let todoList = readLocalStorage();

  // Remove all checked todo items
  todoList = todoList.filter((todoTask) => {
    if (todoTask.completed !== true) {
      return true;
    }
    return false;
  });
  localStorage.setItem('todo_List', JSON.stringify(todoList));
};

export default removeAllCheckedItem;
