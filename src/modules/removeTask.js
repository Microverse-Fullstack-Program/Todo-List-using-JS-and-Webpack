import readLocalStorage from './storage.js';

const removeTask = (index) => {
  let todoList = readLocalStorage();
  todoList = todoList.filter((todoTask) => {
    if (todoTask.index !== index) {
      return true;
    }
    return false;
  });
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
    return todoList;
  }
  return [];
};

export default removeTask;