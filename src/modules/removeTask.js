const removeTask = (index) => {
  let todoList = localStorage.getItem('todo_List');
  todoList = JSON.parse(todoList);
 
  todoList = todoList.filter((todoTask) => {
    console.log(index)
    console.log(todoTask.index)
    if (parseInt(todoTask.index) !== index) {
      return true;
    }
    return false;
  });
  console.log(todoList);
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
    return todoList;
  } else {
    return [];
  }
};

export default removeTask;