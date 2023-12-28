
const countdown_panel = document.querySelector('.countdown-panel')

const openFullscreen = function () {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen()
    }
    countdown_panel.classList.toggle('hide')
}

const countdown = new CountDown('#timeLeft', '#endTime', '#timeInput', '#timeBtn', openFullscreen)

Clock('#ClockDisplay').showTime()

new Markdown()

const inputMarkdown = document.querySelector('.CodeMirror')
const previewMarkdown = document.querySelector('.js-preview')



inputMarkdown.classList.toggle('hide')
// countdown_panel.classList.toggle('hide')

const keyFn = (e) => {
    const key = e.key
    switch (key) {
        case 'Insert':
            inputMarkdown.classList.toggle('hide')
            break
        case 'Home':
            countdown_panel.classList.toggle('hide')
            break
        default:
            break
    }
}

window.addEventListener('keyup', (e) => keyFn(e))