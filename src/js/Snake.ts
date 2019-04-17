import { Point } from "./Point";
import { Apple } from "./Apple";
import * as settings from "./Settings";
import { IDirection, DirectionRight } from "./IDirection";

export class Snake {
  length: number;
  trail: Point[] = [];
  direction: IDirection;
  currentPoint: Point;
  constructor(point: Point, size: number) {
    this.direction = new DirectionRight();
    this.currentPoint = point;
    this.length = size;
  }
  increaseLength() {
    this.length++;
  }
  getHead() {
    //last element in array
    return this.trail[this.trail.length - 1];
  }
  collide(apples: Apple[]) {
    let result = -1;
    apples.forEach((apple, index) => {
      if (this.getHead().equals(apple.point)) {
        result = index;
      }
    });
    return result;
  }
  move() {
    this.currentPoint = this.direction.addPoint(this.currentPoint);
    this.trail.forEach(item => {
      if (item.equals(this.currentPoint)) {
        this.length = 5;
      }
    });
    this.trail.push(this.currentPoint);
    while (this.trail.length > this.length) {
      this.trail.shift();
    }
  }
  draw(ctx) {
    ctx.fillStyle = settings.SNAKE_COLOR;
    this.trail.forEach((point: Point) => {
      ctx.fillRect(
        point.x,
        point.y,
        settings.SNAKE_SIZE - 1,
        settings.SNAKE_SIZE - 1
      );
    });
  }
}
