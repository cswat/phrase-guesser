const startBtn = document.getElementById('btn__reset')
const keyboard = document.getElementById('qwerty')

var game;

document.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Start Game') {
        game = new Game()
        game.startGame()
    } else if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        const selectedKey = e.target
        game.handleInteraction(selectedKey)
    }
})
