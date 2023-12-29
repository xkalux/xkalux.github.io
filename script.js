const hamberger = new Hamburger('.material-design-hamburger button', '#world')
const loading = new Loading('loading', hamberger, () => { })
const game_audio = new GameAudio('game-audio')
const score_board = new ScoreBoard('distValue', 'score-board', replay, 15)
const fullscreen = new FullScreen('fullscreen')

const loadScoreBoard = score_board.loadScoreBoard
const clearScoreBoard = score_board.clear

const is_back_forward = performance.getEntriesByType("navigation").filter((e) => e.type === "back_forward")[0]
if (is_back_forward) {
    if (!loading.classList.contains('loading--hide')) {
        loadingElement.classList.add('loading--hide')
    }
}

document.getElementById('start-game-btn').addEventListener('click', () => {
    if (!isStart) {
        isStart = true
        clearScoreBoard()
        replay()
        document.getElementById('start-game-btn').style.display = 'none'
        fullscreen.openFullscreen()
        fullscreen.draw_icon()
    }
})