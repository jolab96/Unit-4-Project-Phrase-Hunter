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
                let $space = $(`<li class="space"> </li>`)
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
{/* <div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>

     */}

