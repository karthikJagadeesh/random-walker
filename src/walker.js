class Walker {
  constructor(p, color, size = 2) {
    this._p = p;
    this.positionX = this._p.width / 2;
    this.positionY = this._p.height / 2;
    this.color = color;
    this.size = size;
  }

  show() {
    const p = this._p;
    p.noStroke();
    p.fill(this.color);
    p.ellipse(this.positionX, this.positionY, this.size);
  }

  move() {
    const p = this._p;
    const deviation = p.randomGaussian(0, 5);
    const choice = Math.floor(p.random(10));

    if (choice <= 3) {
      this.positionY = this.positionY + deviation;
    } else if (choice <= 5) {
      this.positionX = this.positionX - deviation;
    } else if (choice <= 7) {
      this.positionX = this.positionX + deviation;
    } else {
      this.positionY = this.positionY - deviation;
    }

    const screenStart = 0;
    const screenWidthEnd = p.width;
    const screenHeightEnd = p.height;
    this.positionX = p.constrain(this.positionX, screenStart, screenWidthEnd);
    this.positionY = p.constrain(this.positionY, screenStart, screenHeightEnd);
  }
}

export { Walker };
