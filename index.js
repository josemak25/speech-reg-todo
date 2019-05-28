import Render from './src/models/app';

import header from './src/components/header/header';

import form from './src/components/form-field/form';

import footerTags from './src/components/footer/footer';

const Element = new Render('headerText');

const app = Element.getElementById('app');
app.innerHTML = `
${header}
<content class ="main">
        ${form}
        <content class ="todoCollection">
            <ul id='todoList'></ul>
        </content>
</content>

${footerTags()}
`;

const formField = Element.getElementById('form-field');

formField.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = event.target.elements.todoBox;

  Element.createTodo(value);

  event.target.elements.todoBox.value = ' ';

  Element.getTodos();
});
