/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Listening for "start game" button to be clicked

// Listening for interactive keyboard to be clicked

// Listening for physical keyboard to be pressed (For Exceeds only)

let game;

$("#btn__reset").on("click", function () {
    game = new Game();
    game.startGame();
    game.resetGame();
})



$("#qwerty .key").on("click", function (e) {

    game.handleInteraction(e);

})
