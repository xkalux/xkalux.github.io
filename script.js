const score_board_element = document.getElementById('score-board')
const distance_element = document.getElementById("distValue")
const audio_element = document.getElementById("game-audio")

// const game = new Game('leaderboard')
const hamberger = new Hamburger('.material-design-hamburger button', '#world')
const loading = new Loading('loading', hamberger, () => { })
const game_audio = new GameAudio(audio_element)
const score_board = new ScoreBoard(distance_element, score_board_element, replay)

const loadScoreBoard = score_board.loadScoreBoard

const is_back_forward = performance.getEntriesByType("navigation").filter((e) => e.type === "back_forward")[0]
if (is_back_forward) {
    if (!loading.classList.contains('loading--hide')) {
        loadingElement.classList.add('loading--hide')
    }
}