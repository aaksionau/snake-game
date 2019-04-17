import { Snake } from "./Snake";
import { Point } from "./Point";
import {
  DirectionDown,
  DirectionLeft,
  DirectionRight,
  DirectionUp
} from "./IDirection";
import * as settings from "./Settings";
export class Level {
  name: string;
  snakeLength: number;
  snakeSpeed: number;
  appleQnty: number;
  appleRate: number;
  pointsToNextLevel: number;
  points: number = 10;
  snake: Snake;
  initSnake() {
    let defaultStartingPoint = new Point(
      settings.CANVAS_WIDTH / 2,
      settings.CANVAS_HEIGHT / 2
    );
    this.snake = new Snake(defaultStartingPoint, this.snakeLength);
  }
  addPoints() {
    this.points += 5;
    this.updatePoints();
  }
  showLevel() {
    this.draw(this.name, "level");
    this.updatePoints();
  }
  updatePoints() {
    this.draw(this.points.toString(), "points");
  }
  draw(text: string, divId: string) {
    document.getElementById(divId).innerHTML = text;
  }
  keyEvent(key) {
    switch (key.code) {
      case "ArrowUp":
        this.snake.direction = new DirectionUp();
        break;
      case "ArrowDown":
        this.snake.direction = new DirectionDown();
        break;
      case "ArrowLeft":
        this.snake.direction = new DirectionLeft();
        break;
      case "ArrowRight":
        this.snake.direction = new DirectionRight();
        break;
      default:
        break;
    }
  }
}
