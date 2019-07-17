/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game { // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases();
        this.activePhrase = null
        // Track the number of missed guesses, initially set to 0
        // Store array of phrases
        // Initially there is no phrase chosen


    }

    createPhrases() {
        let phrases = [
            new Phrase("coding is awesome"),
            new Phrase("i love Project Athena"),
            new Phrase("verizon is the best"),
            new Phrase("never give up"),
            new Phrase("anything is possible")
        ]
        return phrases

    }

    // method that selects a random phrase
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomPhrase]

    }


    // method initializing game
    // retreiving random phrase
    // displaying phrase with objects hidden

    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }


    // METHOD THAT CONTROLS MOST OF THE GAME LOGIC
    //     // Store the value of what the user cliked

    //     // Disable whichever letter the user chose (Can't be chosen again)

    //     // If the chosen letter matches a letter in the phrase (checkLetter())...
    //     // Give it the "chosen" class (Highlights the letter in whatever color you choose... Css or JS)
    //     // Show the matched letter: Un-hides the letter object (showMatchedLetter())
    //     // If the user has won (checkForWin()) ...
    //     // Ends game (gameOver())

    //     // Otherwise/else (letter does NOT match)...
    //     // Give it the "wrong" class (Highlights the letter in whatever color you choose... Css or JS)
    //     // Remove 1 life

    handleInteraction(e) {
        let letter = $(e.target).text();
        $(e.target).prop('disabled', true);
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            $(e.target).addClass('chosen');

            if (this.checkForWin()) {
                this.gameOver()
            }
        }
        else {
            this.removeLife()
            $(e.target).addClass('wrong')
        }

    }





    // METHOD THAT CHECKS IF USER HAS WON
    // Check if there are no more hidden letters in the phrase ul
    // return true or false

    checkForWin() {

        if ($('#phrase ul .hide').length === 0) {
            return true;
        }
        else {
            return false;
        }
    }




    // // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
    // //     // Storing all the "lives" (The heart icons)
    // //     // Points to which heart based on how many misses 
    // //     // Replaces that heart image with the "lost" heart image
    // //     // Missed guesses is incremented by 1

    // //     // If missed guesses is the maximum amount...
    // //     // Ends game(gameOver())


    gameOver() {
        $('#overlay').show();
        if (this.checkForWin()) {
            $('#game-over-message').text('You Win!');
            $('#overlay').addClass('win');

        }
        else {
            $('#game-over-message').text('You Lose!');
            $('#overlay').addClass('lose');
        }
        $('#phrase ul').empty()


    }


    // // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
    // //     // Leaves game screen and goes back to overlay

    // //     // If user has max misses, they lose and...
    // //     //Display losing message
    // //     // Gives overlay losing class name and styles
    // //     // Otherwise/else...
    // //     // Display winning message
    // //     // Gives overlay winning class name and styles (Star Wars Victory pic)
    // //            

    removeLife() {
        $('img')[this.missed].src = 'images/lostheart.png'
        this.missed++;
        if (this.missed === 5) {
            this.gameOver()
        }

    }

    resetGame() {
        $('#qwerty .key').prop('disabled', false);
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = 'images/liveheart.png');
        $('#qwerty .key').removeClass('chosen');
        $('#qwerty .key').removeClass('wrong');
    }
}