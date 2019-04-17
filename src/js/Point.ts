import * as settings from "./Settings";

export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = this.adoptToHeight(x);
    this.y = this.adoptToWidth(y);
  }
  equals(point: Point) {
    return point.x == this.x && point.y == this.y;
  }
  private adoptToHeight(x: number) {
    if (x >= settings.CANVAS_WIDTH) {
      return x - settings.CANVAS_WIDTH;
    }
    if (x < 0) {
      return settings.CANVAS_WIDTH + x;
    }
    return x;
  }
  private adoptToWidth(y: number) {
    if (y >= settings.CANVAS_HEIGHT) {
      return y - settings.CANVAS_HEIGHT;
    } else if (y < 0) {
      return settings.CANVAS_HEIGHT + y;
    }
    return y;
  }
}
