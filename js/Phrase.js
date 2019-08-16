class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    //adds phrase to the display
    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul')
        console.log(this.phrase)
        this.phrase.split('').forEach((character) => {
            const phraseLetter = document.createElement('li')
            if (character !== ' ') { 
                phraseLetter.className = 'letter'
            } else {
                phraseLetter.className = 'space'
            }
            phraseLetter.textContent = character
            phraseList.appendChild(phraseLetter)
        })
    }

    //iterates through phrase and determins if any letters match selected letter
    checkLetter(guess) {
        let correctGuess = 0
        this.phrase.split('').forEach((character, index) => {
            if (character === guess) {
                correctGuess += 1
                this.showMatchedLetter(index)
            } 
        })
        return !(correctGuess <= 0)
    }
    
    //removes the letter class from a matched letter
    showMatchedLetter(matchedLetter) {
        const letterList = Array.from(document.querySelectorAll('#phrase li'))
        letterList[matchedLetter].className = ''
    }

}