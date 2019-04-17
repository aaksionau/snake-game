import { Point } from "./Point";
import * as settings from "./Settings";
export class Apple {
  point: Point;
  constructor() {
    let x = this.getRandomArbitrary(settings.CANVAS_WIDTH);
    let y = this.getRandomArbitrary(settings.CANVAS_HEIGHT);
    this.point = new Point(x, y);
  }
  draw(context) {
    context.fillStyle = settings.APPLE_COLOR;
    context.beginPath();
    context.arc(
      this.point.x + settings.APPLE_SIZE,
      this.point.y + settings.APPLE_SIZE,
      settings.APPLE_SIZE,
      0,
      2 * Math.PI
    );
    context.fill();
  }
  private getRandomArbitrary(max): number {
    let min: number = settings.APPLE_SIZE;
    max = max - settings.APPLE_SIZE;
    let result: number = Math.round(Math.random() * (max - min) + min);
    return result - (result % settings.SNAKE_SIZE);
  }
}
export class AppleDifficulty {
  static LOW: number = 1;
  static MEDIUM: number = 2;
  static HIGH: number = 3;
}
