import { Point } from "./Point";
import * as settings from "./Settings";

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
export {
  IDirection,
  DirectionDown,
  DirectionLeft,
  DirectionRight,
  DirectionUp
};
