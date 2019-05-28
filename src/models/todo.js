import uuid from 'uuid';

class Todo {
  constructor(body) {
    this.body = body;
    this.done = false;
    this.id = uuid();
  }

  set body(body) {
    this._body = body.trim();
  }

  // eslint-disable-next-line class-methods-use-this
  save(todo) {
    let todos = localStorage.getItem('todos');
    if (todos !== null) {
      todos = JSON.parse(todos);
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      todos = [];
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
}

export default Todo;
