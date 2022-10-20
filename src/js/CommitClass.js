class Commit {
  #sideFactor;
  #topFactor;
  #leftFactor;
  #commitElement;
  constructor(sideFactor, topFactor, leftFactor, className) {
    this.sideFactor = sideFactor;
    this.topFactor = topFactor;
    this.leftFactor = leftFactor;
    this.#commitElement = document.querySelector(className);
  }
  #positionCommit(branch_width) {
    /*TODO: This command will be called in the Branch class.
     As a result, it will need certain parameters of Branch to perform it's task*/

    let commitTopPositionPx = branch_width * this.#topFactoractorTop;
    commit.style.top = `${totalHeight - 50 + commitTopPositionPx}px`;

    let commitLeftPositionPx = branch_width * commitFactorLeft;
    totalWidth > 480
      ? (commit.style.left = `${commitLeftPositionPx + 66}px`)
      : (commit.style.left = `${commitLeftPositionPx + 5}px`);
  }
}
