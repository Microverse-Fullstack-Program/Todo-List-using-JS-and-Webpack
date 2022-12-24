const resetIndex = () => {
  let todoList = localStorage.getItem('todo_List');
  todoList = JSON.parse(todoList);

  // Reset index of exist todo tasks
  const newList = [];
  todoList.forEach((todoTask) => {
    const newTodoItem = { ...todoTask, index: (newList.length + 1) };
    newList.push(newTodoItem);
  });
  localStorage.setItem('todo_List', JSON.stringify(newList));
};

export default resetIndex;
