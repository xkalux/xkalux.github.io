'use strict'
const x = `    <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 576 512">
<path fill="#6c757d"
    d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
</svg>`
const GameAudio = function (audio_id_selector) {
    const audio_element = document.getElementById(audio_id_selector)
    audio_element.innerHTML = `<div id="audio-off" class="audio-icon"></div><div id="audio-on" class="audio-icon"></div>`

    const audio = {
        clip: new Audio('./src/audio/_Antonio-Vivaldi-Summer_01.mp3'),
        icon_on: document.getElementById('audio-on'),
        icon_off: document.getElementById('audio-off')
    }
    audio.clip.loop = true
    audio.toggle = function () {
        if (audio.icon_on.classList.contains('audio-hide')) {
            audio.icon_on.classList.remove('audio-hide')
            audio.icon_off.classList.add('audio-hide')
            audio.clip.play()
        } else {
            audio.icon_off.classList.remove('audio-hide')
            audio.icon_on.classList.add('audio-hide')
            audio.clip.pause()
        }
    }

    audio.icon_on.classList.add('audio-hide')

    audio.icon_on.addEventListener('click', audio.toggle)
    audio.icon_off.addEventListener('click', audio.toggle)

    return audio
}