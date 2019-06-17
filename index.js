import Render from './src/models/app';

import recognition from './src/components/speech/speech';

import header from './src/components/header/header';

import form from './src/components/form-field/form';

import footerTags from './src/components/footer/footer';

const Element = new Render('headerText');

const app = Element.getElementById('app');
app.innerHTML = `
${header}
${form}
      <div class="inbox">
      ${Element.getTodos()}
      </div>
${footerTags()}
`;

const formField = Element.getElementById('form-field');

formField.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = event.target.elements.todoBox;

  Element.render(value);
  Element.createTodo(value);

  event.target.elements.todoBox.value = ' ';
});

const speech = document.querySelector('.speech-image');
const input = document.querySelector('#input-field');

function speechTodo() {
  recognition.start();

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    // console.log(transcript);

    input.value = transcript;

    if (e.results[0].isFinal) {
      recognition.stop();
      Element.render(transcript);
      Element.createTodo(transcript);
      input.value = ' ';
    }
  });
}

speech.addEventListener('click', speechTodo);
