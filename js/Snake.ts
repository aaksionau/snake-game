import { Point } from "./Point";
import { Apple } from "./Apple";
import * as settings from "./Settings";

export class Snake {
  length = 5;
  trail: Point[] = [];
  static direction: IDirection;
  currentPoint: Point;
  constructor(point: Point) {
    this.currentPoint = point;
    Snake.direction = new DirectionRight();
    document.addEventListener("keydown", this.keyEvent);
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
  isHitItSelf() {
    let result = false;
    let nextPoint = Snake.direction.addPoint(this.currentPoint);
    this.trail.forEach(p1 => {
      if (p1.equals(nextPoint)) {
        result = true;
      }
    });
    return result;
  }
  move() {
    this.currentPoint = Snake.direction.addPoint(this.currentPoint);
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
  keyEvent(key) {
    switch (key.code) {
      case "ArrowUp":
        Snake.direction = new DirectionUp();
        break;
      case "ArrowDown":
        Snake.direction = new DirectionDown();
        break;
      case "ArrowLeft":
        Snake.direction = new DirectionLeft();
        break;
      case "ArrowRight":
        Snake.direction = new DirectionRight();
        break;
      default:
        Snake.direction = new DirectionRight();
        break;
    }
  }
}

interface IDirection {
  addPoint(point: Point): Point;
}
class DirectionUp implements IDirection {
  addPoint(point: Point): Point {
    return new Point(point.x, point.y - settings.SNAKE_SIZE);
  }
}
class DirectionDown implements IDirection {
  addPoint(point: Point): Point {
    return new Point(point.x, point.y + settings.SNAKE_SIZE);
  }
}
class DirectionRight implements IDirection {
  addPoint(point: Point): Point {
    return new Point(point.x + settings.SNAKE_SIZE, point.y);
  }
}
class DirectionLeft implements IDirection {
  addPoint(point: Point): Point {
    return new Point(point.x - settings.SNAKE_SIZE, point.y);
  }
}
