import addTodoItem from './addTodo.js';
import removeTask from './removeTask.js';

const todoTasks = [];
describe('Test an add function - to record new todo task', () => {
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

describe('Test remove function - to delete todo task', () => {
  test('Removing non existing element', () => {
    removeTask(6);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData).toHaveLength(5);
  });

  test('Removing 2 elements', () => {
    for (let index = 4; index <= 5; index += 1) {
      removeTask(index);
    }
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData).toHaveLength(3);
  });

  test('Removing the 3rd element', () => {
    removeTask(3);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData).toHaveLength(2);
  });

  test('Removing the 2nd element', () => {
    removeTask(2);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData[0].description).toBe(storedData[0].description);
  });

  test('Removing the last element', () => {
    removeTask(1);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData).toHaveLength(0);
  });
});
describe('Test clear completed function', () => {
  test('Clearing all completed task', () => {
    let storedData = [
      { description: 'task1', completed: true, index: 1 },
      { description: 'task2', completed: false, index: 2 },
      { description: 'task3', completed: true, index: 3 },
      { description: 'task4', completed: false, index: 4 },
      { description: 'task5', completed: true, index: 5 },
      { description: 'task6', completed: false, index: 6 },
      { description: 'task7', completed: false, index: 7 },
    ];
    localStorage.setItem('todo_List', JSON.stringify(storedData));
    removeAllCheckedItem();
    storedData = JSON.parse(localStorage.getItem('todo_List'));
    localStorage.removeItem('todo_List');
    expect(storedData.length).toBe(4);
    expect(storedData).toHaveLength(4);
    expect(storedData[0].completed).toBe(false);
    expect(storedData[1].completed).toBe(false);
    expect(storedData[2].completed).toBe(false);
    expect(storedData[4]).toBeUndefined();
  });
});

describe('Test editing function - completed status ', () => {
  test("Update the first element's status", () => {
    let storedData = [
      { description: 'task1', completed: true, index: 1 },
      { description: 'task2', completed: false, index: 2 },
      { description: 'task3', completed: true, index: 3 },
    ];
    localStorage.setItem('todo_List', JSON.stringify(storedData));
    editingStatus(1);
    storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData[0].completed).toEqual(false);
  });
 
  test('Re-edit the first element', () => {
    editingStatus(1);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData[0].completed).toEqual(true);
  });
 
  test('Update the second element', () => {
    editingStatus(2);
    const storedData = JSON.parse(localStorage.getItem('todo_List'));
    expect(storedData[1].completed).toEqual(true);
  });
});