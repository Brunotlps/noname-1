'use client';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

export default function Animation({ className }) {
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Define aqui todo o seu sketch, mas usando a instância s
    const sketch = (s) => {
      let points = [];
      const minPoints = 70;
      const maxPoints = 120;
      const maxDistance = 110;

      class Point {
        constructor(x, y) {
          this.pos = s.createVector(x, y);
          this.vel = s.createVector(s.random(-1, 1), s.random(-1, 1));
        }
        move() {
          this.pos.add(this.vel);
          if (this.pos.x < 0 || this.pos.x > s.width)  this.vel.x *= -1;
          if (this.pos.y < 0 || this.pos.y > s.height) this.vel.y *= -1;
        }
        display() {
          s.fill(255, 255, 255, 180);
          s.noStroke();
          s.ellipse(this.pos.x, this.pos.y, 6, 6);
        }
      }

      function connectPoints() {
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const d = s.dist(
              points[i].pos.x, points[i].pos.y,
              points[j].pos.x, points[j].pos.y
            );
            if (d < maxDistance) {
              const alpha = s.map(
                s.sin(s.frameCount * 0.05), -1, 1, 50, 150
              );
              s.stroke(200, 200, 200, alpha);
              s.strokeWeight(s.map(d, 0, maxDistance, 1.5, 0.2));
              s.line(
                points[i].pos.x, points[i].pos.y,
                points[j].pos.x, points[j].pos.y
              );
            }
          }
        }
      }

      function adjustPoints() {
        const target = s.floor(s.random(minPoints, maxPoints));
        while (points.length < target) points.push(new Point(s.random(s.width), s.random(s.height)));
        while (points.length > target) points.pop();
      }

      s.setup = () => {
        s.createCanvas(400, 300).parent(containerRef.current);
        const initial = s.floor(s.random(minPoints, maxPoints));
        for (let i = 0; i < initial; i++) {
          points.push(new Point(s.random(s.width), s.random(s.height)));
        }
        intervalRef.current = setInterval(adjustPoints, 10000);
      };

      s.draw = () => {
        s.fill(0, 0, 0, 10);
        s.rect(0, 0, s.width, s.height);

        s.clear();

        for (const p of points) {
          p.move();
          p.display();
        }
        connectPoints();
      };
    };

    // Instancia o p5
    p5InstanceRef.current = new p5(sketch);

    return () => {
      // cleanup ao desmontar
      clearInterval(intervalRef.current);
      p5InstanceRef.current.remove();
    };
  }, []);

  return <div ref={containerRef} className={`${className} animation`} />;
}
