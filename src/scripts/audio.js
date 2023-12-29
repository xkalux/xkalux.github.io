'use strict'

const GameAudio = function (audio_id_selector) {
    const audio_element = document.getElementById(audio_id_selector)
    audio_element.innerHTML = `<div class="audio-icon" id='game-audio-icon'></div>`

    const audio = {
        clip: new Audio('./src/audio/_Antonio-Vivaldi-Summer_01.mp3'),
        icon: document.getElementById('game-audio-icon'),
    }
    audio.clip.loop = true
    audio.toggle = function () {
        audio.icon.classList.toggle('on')
        if (audio.icon.classList.contains('on'))
            audio.clip.play()
        else
            audio.clip.pause()
    }

    audio.icon.addEventListener('click', audio.toggle)

    return audio
}