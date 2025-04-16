let points = [];
let minPoints = 10; 
let maxPoints = 20; 
let maxDistance = 70; 



function setup() {
    let canvas = createCanvas(200, 200);
    canvas.parent(document.querySelector(".animation"));

    let initialPoints = floor(random(minPoints, maxPoints));
    for (let i = 0; i < initialPoints; i++) {
        points.push(new Point(random(width), random(height)));
    }

    setInterval(adjustPoints, 5000); 
}

function draw() {
    clear();
    for (let p of points) {
        p.move();
        p.display();
    }
    connectPoints();
}


class Point {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
    }

    move() {
        this.pos.add(this.vel);
        if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
        if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
    }

    display() {
        fill(173, 216, 230, 200);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 6, 6);
    }
}


function connectPoints() {
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let d = dist(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y);
            if (d < maxDistance) {
                let alpha = map(sin(frameCount * 0.05), -1, 1, 50, 150);
                stroke(173, 216, 230, alpha);
                strokeWeight(map(d, 0, maxDistance, 1.5, 0.2));
                line(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y);
            }
        }
    }
}



function adjustPoints() {
    let target = floor(random(minPoints, maxPoints));

    while (points.length < target) {
        points.push(new Point(random(width), random(height)));
    }

    while (points.length > target) {
        points.pop();
    }
}


function restartAnimation() {
    // Remove o canvas atual
    let canvas = document.querySelector(".animation canvas");
    if (canvas) canvas.remove();

    // Limpa os pontos antigos
    points = [];

    // Recria tudo
    setup();
}

// Torna a função acessível de fora
window.restartAnimation = restartAnimation;