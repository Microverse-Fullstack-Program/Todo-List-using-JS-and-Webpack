import readLocalStorage from './storage.js';

const removeAllCheckedItem = () => {
  alert(yeeeee)
  let todoList = readLocalStorage();
 
  // Remove all checked todo items
  todoList = todoList.filter((todoTask) => {
    if (todoTask.completed !== true) {
      return true;
    }
    return false;
  });
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
  }
};

export default removeAllCheckedItem;
