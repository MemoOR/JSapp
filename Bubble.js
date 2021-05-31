class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.kitten = img;
  }

  intersects() {
    for (let b of bubbles) {
      for (let b1 of bubbles) {
        let d = dist(b.x, b.y, b1.x, b1.y);
        if (b != b1 && d <= b.r + b1.r) {
          popBubble(b);
          popBubble(b1);
        }
      }
    }
  }

  pointOver(bx, by) {
    let d = dist(bx, by, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
      return true;
    } else {
      this.brightness = 0;
      return false;
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    image(this.kitten, this.x - 25, this.y - 25, this.r, this.r);
    stroke(14, 103, 140);
    strokeWeight(1);
    fill(this.brightness, 10);
    ellipse(this.x, this.y, this.r * 2);
  }
}