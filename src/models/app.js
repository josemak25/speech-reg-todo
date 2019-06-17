import Todo from './todo';
import { log } from 'util';

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
    const todos = Todo.getTodos();

    if (!todos) return `<span class='no-todo'>Add a new Todo</span>`;
    return todos
      .map(todo => {
        return `
        <div class="item">
          <input type="checkbox"/>
           <p class="tody-text">${todo._body}</p>
        </div>`;
      })
      .join('');
  }

  // eslint-disable-next-line class-methods-use-this
  render(todo) {
    let div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = ` <input type="checkbox"/>
       <p class="tody-text">${todo}</p>`;

    let inbox = document.querySelector('.inbox');
    let todos = localStorage.getItem('todos');
    if (!todos) {
      inbox.innerHTML = '';
      inbox.append(div);
      return;
    }

    inbox.append(div);
  }
}

export default Render;
