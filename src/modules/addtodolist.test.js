import addTodoItem from './addTodo.js';
import removeTask from './removeTask.js';
 
const todoTasks = [];
describe('Test add new todo task', () => {
  test('Adding a new todo task at 1', () => {
    addTodoItem('task1', todoTasks);
    expect(todoTasks).toHaveLength(1);
    expect(localStorage.getItem('todo_List')).toEqual(JSON.stringify(todoTasks));
  });
 
  test('Adding a new todo task at 2', () => {
    addTodoItem('task2', todoTasks);
    expect(todoTasks).toHaveLength(2);
    expect(localStorage.getItem('todo_List')).toEqual(JSON.stringify(todoTasks));
  });
 
  test('Adding a new todo task at 3', () => {
    addTodoItem('task3', todoTasks);
    let storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[2].index).toEqual(storedData[2].index);
  });
 
  test('Adding a new todo task at 4', () => {
    addTodoItem('task4', todoTasks);
    let storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[3].description).toBe(storedData[3].description);
  });
 
  test('Adding a new todo task at 5', () => {
    addTodoItem('task5', todoTasks);
    let storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[4].completed).toBe(storedData[4].completed);
  });
})
