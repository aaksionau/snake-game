import { Game } from "./Game";
import { Snake } from "./Snake";
let game;
window.onload = function() {
  game = new Game();
  game.draw();
};
