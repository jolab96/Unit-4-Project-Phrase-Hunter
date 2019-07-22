/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // if letter block is blank add an "li" class named "space" or else, add a class of hide letter
        for (let i = 0; i < this.phrase.length; i++) {
            let letterBlock = this.phrase[i];

            if (letterBlock === ' ') {
                const $space = $(`<li class="space"> </li>`)
                $('#phrase ul').append($space);
            }
            else {
                const $letterBlock = $(`<li class ="hide letter ${letterBlock}" > ${letterBlock}</li>`);
                $('#phrase ul').append($letterBlock);
            }

        }
    }

    checkLetter(letter) {

        return (this.phrase.includes(letter)); // checks to see if the letter selected matches the letter in the phrase
    }

    showMatchedLetter(letter) {
        $(`#phrase ul .${letter}`).addClass('show').removeClass('hide');


    }

}
{
    
}

