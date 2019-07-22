/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Listening for "start game" button to be clicked
$("#btn__reset").on("click", function () {
    game = new Game();
    game.startGame();
    game.resetGame();
})

$("#qwerty .key").on("click", function (e) {
    game.handleInteraction(e);
})
