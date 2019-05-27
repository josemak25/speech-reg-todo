const footer = {
  clickToEdit: '<p id="click-edit">Double-click to edit a todo</p>',
  credits: '<p id="credits">Victor, Sodiquee, Abetang and Charlse</p>',
  partOf: '<p id= "partof">Part of Decagon TodoMVC</p>',
  footerTags() {
    return `<footer>
    ${footer.clickToEdit}
    ${footer.credits}
    ${footer.partOf}
    <footer>`;
  }
};
const { footerTags } = footer;

export default footerTags;
