import { Snake } from "./Snake";
import { Point } from "./Point";
import * as settings from "./Settings";
import { Apple } from "./Apple";

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
    this.snake = new Snake(new Point(10, 10));
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
          apple.draw(context);
        });
        if (snake.isHitItSelf()) {
          context.font = "48px serif";
          context.fillStyle = settings.APPLE_COLOR;
          context.fillText("Game over!", 50, 100);
          clearInterval(intervalId);
        }
      }, 100);
    })(this.context, this.snake, this.apples, this.intervalId);
  }
}
