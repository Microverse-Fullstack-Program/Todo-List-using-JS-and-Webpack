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
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[2].index).toEqual(storedData[2].index);
  });

  test('Adding a new todo task at 4', () => {
    addTodoItem('task4', todoTasks);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[3].description).toBe(storedData[3].description);
  });

  test('Adding a new todo task at 5', () => {
    addTodoItem('task5', todoTasks);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(todoTasks[4].completed).toBe(storedData[4].completed);
  });
});

describe('Test Remove todo task', () => {
  test('Removing non existing element', () => {
    const storedData = removeTask(6);
    expect(storedData).toHaveLength(5);
  });

  test('Removing 2 elements', () => {
    let storedData = [];
    for (let index = 4; index <= 5; index += 1) {
      storedData = removeTask(index);
    }
    expect(storedData).toHaveLength(3);
  });

  test('Removing the 3rd element', () => {
    const storedData = removeTask(3);
    expect(storedData).toHaveLength(2);
  });

  test('Removing the 2nd element', () => {
    const storedData = removeTask(2);
    expect(storedData[0].description).toBe(storedData[0].description);
  });

  test('Removing the last element', () => {
    const storedData = removeTask(1);
    expect(storedData.length).toBe(0);
  });
});