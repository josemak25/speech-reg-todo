class Render {
  constructor(name) {
    this.name = name;
  }

  // eslint-disable-next-line class-methods-use-this
  getElementById(name) {
    return document.getElementById(name);
  }
}

export default Render;
