import { Point } from "../js/Point";
import * as settings from "../js/Settings";
import { expect } from "chai";
describe("When point is initialized with x value greater than canvas width", () => {
  it("should return value minus canvas width ", () => {
    let point = new Point(settings.CANVAS_WIDTH + 10, 0);
    expect(point.x).to.be.equal(10);
  });
});
describe("When point is initialized with x value equals canvas width", () => {
  it("should return value minus canvas width ", () => {
    let point = new Point(settings.CANVAS_WIDTH, 0);
    expect(point.x).to.be.equal(0);
  });
});
describe("When point is initialized with x value less than 0", () => {
  it("should return value width minus value ", () => {
    let point = new Point(-10, 0);
    expect(point.x).to.be.equal(settings.CANVAS_WIDTH - 10);
  });
});
describe("When point is initialized with x value equals 0", () => {
  it("should return value width minus value ", () => {
    let point = new Point(0, 0);
    expect(point.x).to.be.equal(0);
  });
});
describe("When point is initialized with x value between 0 and canvas width", () => {
  it("should return value width minus value ", () => {
    let point = new Point(settings.CANVAS_WIDTH / 2, 0);
    expect(point.x).to.be.equal(settings.CANVAS_WIDTH / 2);
  });
});

describe("When point is initialized with y value greater than canvas height", () => {
  it("should return value minus canvas width ", () => {
    let point = new Point(0, settings.CANVAS_HEIGHT + 10);
    expect(point.y).to.be.equal(10);
  });
});
describe("When point is initialized with y value equals canvas height", () => {
  it("should return value minus canvas width ", () => {
    let point = new Point(0, settings.CANVAS_HEIGHT);
    expect(point.y).to.be.equal(0);
  });
});
describe("When point is initialized with y value between 0 and canvas height", () => {
  it("should return value minus canvas width ", () => {
    let point = new Point(0, settings.CANVAS_HEIGHT / 2);
    expect(point.y).to.be.equal(settings.CANVAS_HEIGHT / 2);
  });
});
describe("When point is initialized with y value equals 0", () => {
  it("should return value height minus value ", () => {
    let point = new Point(0, 0);
    expect(point.y).to.be.equal(0);
  });
});
describe("When point is initialized with y value less than 0", () => {
  it("should return value height minus value ", () => {
    let point = new Point(0, -10);
    expect(point.y).to.be.equal(settings.CANVAS_HEIGHT - 10);
  });
});
