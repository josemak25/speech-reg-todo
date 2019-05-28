const todoList = ({ _body }) => {
  return `<li>
                        <div>
                                <input class="done" type="checkbox"></input>
                                <label>${_body} </label>
                        </div>
                </li>`;
};

export default todoList;
