class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0
        this.phrases = [
            'lunchbox',
            'grapefruit',
            'dance off',
            'turnkey',
            'chocolate milk'
        ]
        this.activePhrase = null
    }

    //starts game: removes overlay and populates phrase
    startGame() {
        const gameOverlay = document.getElementById('overlay')
        gameOverlay.style.display = 'none'
        this.activePhrase = new Phrase(this.getRandomPhrase())
        this.activePhrase.addPhraseToDisplay()
    }

    //generates random phrase from list of phrases and initializes Phrase
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * Math.floor(this.phrases.length))]
        return randomPhrase
    }

    //takes in selected letters and checks them against phrase
    handleInteraction(object) {
        const selectedLetter = object
        selectedLetter.className = 'chosen'
        if (this.activePhrase.checkLetter(selectedLetter.textContent)) {
            this.checkForWin()
        } else {
            this.removeLife()
        }
    }

    //checks if any DOM elements have className of letter
    checkForWin() {
        //returns true or false if player has guessed all letters
        const hiddenLetters = document.getElementsByClassName('letter')
        if (hiddenLetters.length <= 0) {
            this.gameOver('win')
        }
    }

    //removes a heart for each wrong answer
    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard li')
        if (hearts.length > 1) {
            hearts[0].parentNode.removeChild(hearts[0])
        } else {
            this.gameOver('lose')
        }
    }

    //reset functionality
    resetGame() {
        //reset keyboard
        const selectedKeys = Array.from(document.getElementsByClassName('chosen'))
        selectedKeys.forEach((key) => {
            key.className = ''
        })
        //re-add hearts based on hearts remaining
        const heartsLeft = document.querySelectorAll('.tries')
        const heart = document.querySelector('.tries')
        for (let i=0; i<(5-heartsLeft.length); i++) {
            console.log(i)
            const newHeart = heart.cloneNode(true)
            heart.parentNode.appendChild(newHeart)
        }
        //remove existing phrase
        const phraseLetters = document.querySelector('#phrase ul')
        while (phraseLetters.hasChildNodes()) {   
            phraseLetters.removeChild(phraseLetters.firstChild) 
        }
    }

    //unhides overlay, displays win or lose message, and resets game state
    gameOver(condition) {
        const gameOverlay = document.getElementById('overlay')
        gameOverlay.style.display = ''
        if (condition === 'lose') {
            gameOverlay.className = 'lose'
            this.resetGame()
        } else {
            gameOverlay.className = 'win'
            this.resetGame()
            }
        }
    }
