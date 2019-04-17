import { Snake } from "./Snake";
import { Point } from "./Point";
import * as settings from "./Settings";
import { Apple } from "./Apple";
import {
  DirectionDown,
  DirectionLeft,
  DirectionRight,
  DirectionUp
} from "./IDirection";

export class Game {
  canvas;
  context;
  snake: Snake;
  apples: Apple[] = [];
  intervalId: number;
  constructor() {
    this.canvas = <HTMLElement>document.getElementById("canvas");
    this.canvas.width = settings.CANVAS_WIDTH;
    this.canvas.height = settings.CANVAS_HEIGHT;
    this.context = this.canvas.getContext("2d");
    document.addEventListener(
      "keydown",
      function(e) {
        this.keyEvent(e);
      }.bind(this),
      false
    );
    let defaultStartingPoint = new Point(
      settings.CANVAS_WIDTH / 2,
      settings.CANVAS_HEIGHT / 2
    );
    this.snake = new Snake(defaultStartingPoint, settings.SNAKE_LENGTH);
  }
  static addApples(snake: Snake, apples: Apple[]) {
    let appleIndex = snake.collide(apples);
    if (appleIndex > -1) {
      snake.increaseLength();
      apples = apples.splice(appleIndex, 1);
    }
    if (apples.length <= 2) {
      apples.push(new Apple());
    }
  }
  draw() {
    (function(context, snake, apples, intervalId) {
      intervalId = setInterval(() => {
        context.fillStyle = settings.CANVAS_COLOR;
        context.fillRect(0, 0, settings.CANVAS_WIDTH, settings.CANVAS_HEIGHT);
        snake.move();
        snake.draw(context);
        Game.addApples(snake, apples);
        apples.forEach(apple => {
          if (Math.random() > settings.APPLE_RATE) apple.draw(context);
        });
      }, 100);
    })(this.context, this.snake, this.apples, this.intervalId);
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
