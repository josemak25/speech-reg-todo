import Render from './src/app';

import header from './src/components/header/header';

import input from './src/components/input-field/input';

import footerTags from './src/components/footer/footer';

const Element = new Render('headerText');

const app = Element.getElementById('app');
app.innerHTML = `
${header}
<content class ="main">${input}</content>
${footerTags()}
`;
