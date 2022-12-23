const removeTask = (index) => {
  alert(uuuuu)
  let todoList = localStorage.getItem('todo_List');
  todoList = JSON.parse(todoList);
  todoList = todoList.filter((todoTask) => {
    if (todoTask.index !== index) {
      return true;
    }
    return false;
  });
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
  } else {
    localStorage.removeItem('todo_List');
  }  
};

export default removeTask;