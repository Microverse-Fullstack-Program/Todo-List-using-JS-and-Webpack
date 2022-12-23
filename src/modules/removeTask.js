const removeTask = (index) => {
  let todoList = localStorage.getItem('todo_List');
  todoList = JSON.parse(todoList);
  todoList = todoList.filter((todoTask) => {
    if (todoTask.index != index) {
      return true;
    }
    return false;
  });
  
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
    return todoList;
  } else {
    return [];
  }
};

export default removeTask;