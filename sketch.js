function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    normalMaterial();
}

function draw() {
    background(220);

  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();

   // Box
  push();
  translate(-75, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();

  // Cylinder
  push();
  translate(100, -100, 0);
  rotateWithFrameCount();
  cylinder(30, 150);
  pop();

  // Cone
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(50, 70);
  pop();

  // Torus
  stroke(255)
  push();
  translate(-250, 100, 0);
  rotateWithFrameCount();
  torus(50, 10);
  pop();

  // Sphere
  push();
  translate(-75, 100, 0);
  rotateWithFrameCount();

  // Show black stroke to help visualize movement
  stroke(255);
  sphere(100);
  pop();

  // Ellipsoid
  push();
  translate(100, 100, 0);
  rotateWithFrameCount();
  ellipsoid(20, 40, 40);
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}


