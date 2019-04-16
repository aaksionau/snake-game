import { Point } from "./Point";
import * as settings from "./Settings";
export class Apple {
  point: Point;
  constructor() {
    let x = this.getRandomArbitrary(
      settings.CANVAS_WIDTH,
      settings.CANVAS_HEIGHT
    );
    let y = this.getRandomArbitrary(
      settings.CANVAS_WIDTH,
      settings.CANVAS_HEIGHT
    );
    this.point = new Point(x, y);
  }
  draw(context) {
    context.fillStyle = settings.APPLE_COLOR;
    context.fillRect(
      this.point.x,
      this.point.y,
      settings.APPLE_SIZE - 1,
      settings.APPLE_SIZE - 1
    );
  }
  private getRandomArbitrary(min, max) {
    let result: number = parseInt(Math.random() * (max - min) + min);
    return result - (result % settings.SNAKE_SIZE);
  }
}
