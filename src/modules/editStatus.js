const editingStatus = (index) => {
  let updateTodoList = localStorage.getItem('todo_List');
  updateTodoList = JSON.parse(updateTodoList);
  updateTodoList.forEach((todoTask) => {
    if (todoTask.index === index) {
      todoTask.completed = !todoTask.completed;
    }
  });
  localStorage.setItem('todo_List', JSON.stringify(updateTodoList));
};

export default editingStatus;