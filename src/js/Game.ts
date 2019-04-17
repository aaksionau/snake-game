import * as settings from "./Settings";
import { Apple } from "./Apple";
import { Level } from "./Level";

export class Game {
  canvas;
  context;
  levels: Level[] = [];
  currentLevel: Level;
  apples: Apple[] = [];
  intervalId: number;
  constructor() {
    this.initializeCanvas();
    this.addLevels();
    this.nextLevel();
    this.addEventListener();
    this.drawWelcome("Welcome! Be ready!");
  }

  drawWelcome(text: string) {
    this.emptyCanvas();
    this.context.fillStyle = "black";
    this.context.font = "25px serif";
    this.context.fillText(text, 200, 100);
    this.context.fillText(
      "CurrentLevel is: " + this.currentLevel.name,
      200,
      150
    );
    setTimeout(
      function() {
        this.run();
      }.bind(this),
      1000
    );
  }
  run() {
    this.intervalId = setInterval(
      function() {
        this.draw();
      }.bind(this),
      this.currentLevel.snakeSpeed
    );
  }
  draw() {
    if (this.currentLevel.points >= this.currentLevel.pointsToNextLevel) {
      clearInterval(this.intervalId);
      this.nextLevel();
      this.drawWelcome("Your next level is about to begin!");
    } else {
      this.emptyCanvas();
      this.currentLevel.snake.move();
      this.currentLevel.snake.draw(this.context);
      Game.addApples(this.apples, this.currentLevel);
      this.apples.forEach(apple => {
        if (Math.random() > this.currentLevel.appleRate)
          apple.draw(this.context);
      });
    }
  }
  private emptyCanvas() {
    this.context.fillStyle = settings.CANVAS_COLOR;
    this.context.fillRect(0, 0, settings.CANVAS_WIDTH, settings.CANVAS_HEIGHT);
  }
  private initializeCanvas() {
    this.canvas = <HTMLElement>document.getElementById("canvas");
    this.canvas.width = settings.CANVAS_WIDTH;
    this.canvas.height = settings.CANVAS_HEIGHT;
    this.context = this.canvas.getContext("2d");
  }
  private addLevels() {
    let bronze = new Level();
    bronze.appleQnty = 5;
    bronze.name = "Bronze";
    bronze.appleRate = 0.5;
    bronze.snakeLength = 5;
    bronze.snakeSpeed = 200;
    bronze.pointsToNextLevel = 20;
    this.levels.push(bronze);

    let silver = new Level();
    silver.appleQnty = 3;
    silver.name = "Silver";
    silver.appleRate = 0.8;
    silver.snakeLength = 3;
    silver.snakeSpeed = 100;
    silver.pointsToNextLevel = 30;
    this.levels.push(silver);

    let gold = new Level();
    gold.appleQnty = 1;
    gold.name = "Gold";
    gold.appleRate = 0.9;
    gold.snakeLength = 5;
    gold.snakeSpeed = 80;
    gold.pointsToNextLevel = 40;
    this.levels.push(gold);
  }
  static addApples(apples: Apple[], currentLevel: Level) {
    let appleIndex = currentLevel.snake.collide(apples);
    if (appleIndex > -1) {
      currentLevel.snake.increaseLength();
      apples = apples.splice(appleIndex, 1);
      currentLevel.addPoints();
    }
    if (apples.length <= currentLevel.appleQnty) {
      apples.push(new Apple());
    }
  }
  private nextLevel() {
    this.currentLevel = this.levels.shift();
    this.currentLevel.showLevel();
    this.currentLevel.initSnake();
  }
  private addEventListener() {
    document.addEventListener(
      "keydown",
      function(e) {
        this.currentLevel.keyEvent(e);
      }.bind(this),
      false
    );
  }
}
