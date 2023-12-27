'use strict'

const ScoreBoard = function (score_id_selector, scoreboard_id_selector, fn_replay = () => { }, maxKeepScore = 20) {
    const storage = 'local-data'
    const score_element = document.getElementById(score_id_selector)
    const score_board_element = document.getElementById(scoreboard_id_selector)
    score_board_element.innerHTML = `<div id="leaderboard"></div><div id="top3"></div>`

    const leaderboard = document.getElementById('leaderboard')
    const top3_element = document.getElementById('top3')

    const score_board = {
        icon_trophy: `<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 576 512">
        <path fill="#ca6702" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>`,
        icon_medal: `<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
        <path fill="#ca6702" d="M4.1 38.2L106.4 191.5c11.2-11.6 23.7-21.9 37.3-30.6L68.4 48h64.5l54.9 91.5c15.8-5.5 32.4-9.1 49.6-10.6l-6.1-10.1L169.3 15.5C163.5 5.9 153.1 0 141.9 0H24.6C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6zm276.6 80.5l-6.1 10.1c17.2 1.5 33.8 5.2 49.6 10.6L379.2 48h64.5L368.4 160.9c13.6 8.7 26.1 19 37.3 30.6L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0H370.1c-11.2 0-21.7 5.9-27.4 15.5L280.8 118.7zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-257.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L180.7 304c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L252.3 386c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L302.4 355c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4l-19.2-38.9z"/></svg>`,
        score: score_element,
        top3element: top3_element,
        player_name: ''
    }

    score_board.getPlayerScore = function () {
        return score_board.score.innerHTML
    }

    score_board.SaveName = function (node) {
        score_board.player_name = node.value
    }

    score_board.SaveScore = function () {
        const score = score_board.getPlayerScore()
        if (score_board.player_name !== '') {
            if (score > 0 && typeof (Storage) !== "undefined") {
                let scores = score_board.loadScore()
                const player = scores.filter(e => e.name === score_board.player_name.toLowerCase().trim())[0]
                if (typeof player !== 'undefined') {
                    if (score > player.score)
                        scores.map(e => {
                            if (e.name === score_board.player_name)
                                e.score = score
                            else
                                e.score
                        })
                } else {
                    scores.push({
                        name: score_board.player_name.trim(),
                        score: score
                    })
                }
                localStorage[storage] = btoa(JSON.stringify(scores))
            }
            score_board.loadTop3()
        }
        score_board.clear()
        fn_replay()
    }

    score_board.loadScore = function () {
        let scores = [{ name: 'Xkalux', score: 9999 }]
        if (typeof (Storage) !== "undefined") {
            if (typeof localStorage[storage] !== 'undefined')
                scores = JSON.parse(atob(localStorage[storage]))
        }
        scores.sort(function (a, b) { return b.score - a.score })

        return scores.slice(0, maxKeepScore)
    }

    score_board.loadTop3 = function () {
        const scores = score_board.loadScore()
        const length = scores.length > 3 ? 3 : scores.length
        let html = `Top 3 : Players
        <div id="top3-list">`
        for (let i = 0; i < length; i++) {
            const icon = i === 0 ? score_board.icon_trophy : score_board.icon_medal
            html += `<p class='top3-item'>${icon} ${scores[i].name}</p>`
        }
        html += '</div>'
        score_board.top3element.innerHTML = html
    }


    score_board.loadScoreBoard = function (showSaveButton = true) {
        const scores = score_board.loadScore()

        var html = "<div class='title'>LeaderBoard</div><div><ol class=\"b-scores\">"
        for (var j = 0; j < scores.length; j++) {
            html += "<li class=\"row\">"
            const _name = `<div class="col underline"><p class='text-start'>${scores[j].name}</p></div>`
            const _score = `<div class="col underline"><p class='text-end'>${scores[j].score}</p></div>`
            html += "<div class='col'></div>" + _name + _score + "<div class='col'></div><\/li>"
        }
        html += "<\/ol><div>"

        if (showSaveButton)
            html += `<div class='score-board-action'>
            <input class="input" maxlength="8" onchange="score_board.SaveName(this)" autofocus="autofocus" placeholder="Enter your name" type="text">
            <button class="button" onclick="score_board.SaveScore()">Save/Restart</button>
            </div>`
        // document.querySelector('#leaderboard').innerHTML = html
        leaderboard.innerHTML = html
    }

    score_board.clear = function () {
        leaderboard.innerHTML = ''
    }

    score_board.loadTop3()

    return score_board
}