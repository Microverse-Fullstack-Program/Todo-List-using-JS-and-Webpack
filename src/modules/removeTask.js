const removeTask = (index) => {
  let todoList = localStorage.getItem('todo_List');
  localStorage.removeItem('todo_List');
  todoList = JSON.parse(todoList);
  todoList = todoList.filter((todoTask) => {
    if (todoTask.index !== parseInt(index)) {
      return true;
    }
    return false;
  });
  localStorage.setItem('todo_List', JSON.stringify(todoList));
};

export default removeTask;