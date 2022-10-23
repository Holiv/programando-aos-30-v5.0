export class Commit {
  #sideFactor;
  #topFactor;
  #leftFactor;
  #commitElement;
  #totalHeight;
  constructor(sideFactor, topFactor, leftFactor, className) {
    this.#sideFactor = sideFactor;
    this.#topFactor = topFactor;
    this.#leftFactor = leftFactor;
    this.#commitElement = document.querySelector(className);
    this.#totalHeight = document.querySelector("html").offsetHeight;
  }
  #positionCommit(branch_width, total_width) {
    /*TODO: This command will be called in the Branch class.
     As a result, it will need certain parameters of Branch to perform it's task*/

    let commitTopPositionPx = branch_width * this.#topFactor;
    this.#commitElement.style.top = `${
      this.#totalHeight - 50 + commitTopPositionPx
    }px`;

    let commitLeftPositionPx = branch_width * this.#leftFactor;
    total_width > 480
      ? (this.#commitElement.style.left = `${commitLeftPositionPx + 66}px`)
      : (this.#commitElement.style.left = `${commitLeftPositionPx + 5}px`);
  }
  #commitSize(branch_width) {
    this.#commitElement.style.width = `${branch_width * this.#sideFactor}px`;
    this.#commitElement.style.height = `${branch_width * this.#sideFactor}px`;
  }

  render(branch_width, total_width) {
    this.#positionCommit(branch_width, total_width);
    this.#commitSize(branch_width);
  }
}
