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
    switch (choice) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.y = this.y + 1;
        break;
      case 4:
      case 5:
        this.x = this.x - 2;
        break;
      case 6:
      case 7:
        this.x = this.x + 2;
        break;
      case 8:
      case 9:
        this.y = this.y - 2;
        break;
    }
    this.x = p.constrain(this.x, 0, p.width);
    this.y = p.constrain(this.y, 0, p.height);
  }
}

export { Walker };
