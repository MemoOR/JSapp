let bubbles = [];
let kittens = [];

function preload() {
  for (let i = 0; i < 8; i++) {
    let j = i + 1;
    kittens[i] = loadImage(`Img/kitten${j}.png`);
  }
}

function setup() {
  createCanvas(800, 600);
}

function newBubble() {
  let r = random(30, 100);
  let b = new Bubble(mouseX, mouseY, r, random(kittens));
  bubbles.push(b);
}

function popBubble(pbubble) {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (pbubble == bubbles[i]) {
      bubbles.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (mouseButton == CENTER) {
    newBubble();
  } else {
    for (let pb of bubbles) {
      if (pb.pointOver(mouseX, mouseY)) {
        pb.kitten = random(kittens);
      }
    }
  }
}

function draw() {
  background(94, 153, 13);

  for (let b of bubbles) {
    b.intersects();
    b.move();
    b.pointOver(mouseX, mouseY);
    b.show();
  }
}