class Walker {
  constructor(p, color) {
    this._p = p;
    this.x = this._p.width / 2;
    this.y = this._p.height / 2;
    this.color = color;
  }

  show() {
    const p = this._p;

    p.noStroke();
    p.fill(this.color);
    p.ellipse(this.x, this.y, 2, 2);
  }

  move() {
    const p = this._p;

    const choice = Math.floor(p.random(10));
    if (choice <= 3) {
      this.y = this.y + 1;
    } else if (choice <= 5) {
      this.x = this.x - 2;
    } else if (choice <= 7) {
      this.x = this.x + 2;
    } else {
      this.y = this.y - 2;
    }

    this.x = p.constrain(this.x, 0, p.width);
    this.y = p.constrain(this.y, 0, p.height);
  }
}

export { Walker };
