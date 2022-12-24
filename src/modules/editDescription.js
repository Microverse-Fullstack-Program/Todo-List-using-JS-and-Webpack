const editingDescription = (index, newValue) => {
  let updateTodoList = localStorage.getItem('todo_List');
  updateTodoList = JSON.parse(updateTodoList);

  updateTodoList.forEach((todoTask) => {
    if (todoTask.index === index) {
      todoTask.description = newValue;
    }
  });
  localStorage.setItem('todo_List', JSON.stringify(updateTodoList));
};

export default editingDescription;