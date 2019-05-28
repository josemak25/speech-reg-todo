import Todo from './todo';
import todoList from '../components/todo-list/todo-list';

class Render {
  constructor(name) {
    this.name = name;
  }

  // eslint-disable-next-line class-methods-use-this
  getElementById(name) {
    return document.getElementById(name);
  }

  // eslint-disable-next-line class-methods-use-this
  createTodo(body) {
    const todo = new Todo(body);
    todo.save(todo);
  }

  // eslint-disable-next-line class-methods-use-this
  getTodos() {
    let todos = localStorage.getItem('todos');
    todos = JSON.parse(todos);
    this.render(todos);
  }

  // eslint-disable-next-line class-methods-use-this
  render(todos) {
    todos.forEach(todo => {
      const todoTodo = todoList(todo);
      this.addToTodoList(todoTodo);
    });
  }

  addToTodoList(todo) {
    const check = this.getElementById('todoList');
    check.appendChild = todo;
  }
}

export default Render;
