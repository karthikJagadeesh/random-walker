class Walker {
  constructor(p, color, size = 2) {
    this._p = p;
    this.position = this._p.createVector(this._p.width / 2, this._p.height / 2)
    this.color = color;
    this.size = size;
    this._offset = 0;
  }

  getPositionX() {
    return this.position.x;
  }

  getPositionY() {
    return this.position.y;
  }

  show() {
    const p = this._p;
    p.noStroke();
    p.fill(this.color);
    p.ellipse(this.position.x, this.position.y, this.size);
    return this;
  }

  move() {
    const p = this._p;

    const deviation = p.map(p.noise(this._offset), 0, 1, 0, 4);
    const choice = Math.floor(p.random(10));

    if (choice <= 2.5) {
      this.position.x = this.position.x + deviation;
    } else if (choice <= 5) {
      this.position.x = this.position.x - deviation;
    } else if (choice <= 7.5) {
      this.position.y = this.position.y + deviation;
    } else {
      this.position.y = this.position.y - deviation;
    }

    this._offset += 0.003;
    return this;
  }

  constrain() {
    const p = this._p;

    const screenStart = 0;
    const screenWidthEnd = p.width;
    const screenHeightEnd = p.height;
    this.positionX = p.constrain(this.position.x, screenStart, screenWidthEnd);
    this.positionY = p.constrain(this.position.y, screenStart, screenHeightEnd);
    this._offset += 0.003;
    return this;
  }
}

export { Walker };
