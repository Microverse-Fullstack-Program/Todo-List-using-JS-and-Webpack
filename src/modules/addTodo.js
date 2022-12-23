const addTodoItem = (newTodo, todoList) => {
  todoList.push({
    description: newTodo,
    completed: false,
    index: todoList.length + 1,
  });
  localStorage.setItem('todo_List', JSON.stringify(todoList));
};

export default addTodoItem;