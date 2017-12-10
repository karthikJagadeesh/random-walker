class Walker {
  constructor(p) {
    this._p = p;
    this.x = this._p.width / 2;
    this.y = this._p.height / 2;
  }

  show() {
    const p = this._p;

    p.fill(0);
    p.ellipse(this.x, this.y, 2, 2);
  }

  move() {
    const p = this._p;

    const choice = Math.floor(p.random(4));
    switch (choice) {
      case 0:
        this.x = this.x + 2;
        break;
      case 1:
        this.x = this.x - 2;
        break;
      case 2:
        this.y = this.y + 2;
        break;
      case 3:
        this.y = this.y - 2;
        break;
    }
    this.x = p.constrain(this.x, 0, p.width);
    this.y = p.constrain(this.y, 0, p.height);
  }
}

export { Walker };
