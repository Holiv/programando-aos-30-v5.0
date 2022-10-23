export class Branch {
  #branchImg;
  #branchWidth;
  #totalWidth;
  #commits = [];
  constructor() {
    this.#branchImg = document.querySelector("#branch");
    this.#branchWidth = document.querySelector("#branch_img").width;
    this.#totalWidth = document.querySelector("html").offsetWidth;
    this.renderCommits();
  }
  // Function to add new commits to the branch.
  putCommit(...CommitObjects) {
    CommitObjects.forEach((CommitObject) => {
      this.#commits.push(CommitObject);
    });
  }
  //Function to render all the commits object in the #commits array.
  renderCommits() {
    this.#commits.forEach((Commit) => {
      Commit.render(this.#branchWidth, this.#totalWidth);
    });
  }
}
