import { Point } from "../js/Point";
import * as settings from "../js/Settings";
import { expect } from "chai";
import { Snake } from "../js/Snake";
import { DirectionRight } from "../js/IDirection";
describe("When snake is initialized", () => {
  it("should contain currentPoint and direction right", () => {
    let point = new Point(0, 0);
    let snake = new Snake(point, 5);
    expect(snake.currentPoint).to.be.equal(point);
    expect(snake.direction.constructor).to.be.equal(DirectionRight);
  });
});
describe("When snake started to move right", () => {
  it("should contain 5 elements", () => {
    let point = new Point(0, 0);
    let snake = new Snake(point, 5);
    expect(snake.length).to.be.equal(5);
    snake.move();
    expect(snake.trail[0].x).to.be.equal(settings.SNAKE_SIZE);
    expect(snake.trail[0].y).to.be.equal(0);
  });
});
describe("When snake is full developed", () => {
  it("should contain 5 elements", () => {
    let point = new Point(0, 0);
    let snake = new Snake(point, 5);
    expect(snake.length).to.be.equal(5);
    for (let i = 0; i < 5; i++) {
      snake.move();
    }
    expect(snake.trail[0].x).to.be.equal(settings.SNAKE_SIZE);
    expect(snake.trail[1].x).to.be.equal(settings.SNAKE_SIZE * 2);
    expect(snake.trail[2].x).to.be.equal(settings.SNAKE_SIZE * 3);
    expect(snake.trail[3].x).to.be.equal(settings.SNAKE_SIZE * 4);
    expect(snake.trail[4].x).to.be.equal(settings.SNAKE_SIZE * 5);
    expect(snake.trail[0].y).to.be.equal(0);
    expect(snake.trail[1].y).to.be.equal(0);
    expect(snake.trail[2].y).to.be.equal(0);
    expect(snake.trail[3].y).to.be.equal(0);
    expect(snake.trail[4].y).to.be.equal(0);
  });
});
