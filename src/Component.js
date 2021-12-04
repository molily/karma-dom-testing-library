export class Component {
  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = 'Component works!';
  }
}
