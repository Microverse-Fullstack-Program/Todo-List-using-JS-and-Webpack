const removeAllCheckedItem = () => {
  let todoList = localStorage.getItem('todo_List');
  todoList = JSON.parse(todoList);

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
