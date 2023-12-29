'use strict'

const AMPM = (hour) => {
    let session = "AM"
    if (hour == 0)
        hour = 12

    if (hour > 12) {
        hour -= 12
        session = "PM"
    }
    return session
}
const EndTime = (timestamp) => {
    const end = new Date(timestamp)
    return {
        hour: end.getHours(),
        minutes: end.getMinutes(),
        seconds: end.getSeconds(),
        session: AMPM(end.getHours())
    }
}

class ELEMENT {
    constructor(selector) {
        this.element = document.querySelector(selector)
    }
    get value() {
        return this.element.value
    }
    set value(v) {
        this.element.value = v
    }
    get innerHTML() {
        if (this.element !== null)
            return this.element.innerHTML
    }
    set innerHTML(data) {
        if (this.element !== null)
            this.element.innerHTML = data
    }
    get classList() {
        if (this.element !== null)
            return this.element.classList
    }
}

class CountDown {
    initelement(timeLeftSelector, endTimeSelector, inputSelector, buttonSelector) {
        this.intervalTimer = null
        this.secondsLeft = 0
        this.timeLeftText = new ELEMENT(timeLeftSelector)
        this.endTimeText = new ELEMENT(endTimeSelector)
        this.endTimeText.innerHTML = ''
        this.input = new ELEMENT(inputSelector)
        this.input.element.type = 'number'
        this.button = new ELEMENT(buttonSelector)
        this.displayTimeLeft(0)
    }

    constructor(timeLeftSelector, endTimeSelector, inputSelector, buttonSelector, callback = () => { }, minMode = true) {
        this.mode = minMode
        this.initelement(timeLeftSelector, endTimeSelector, inputSelector, buttonSelector)
        this.button.element?.addEventListener('click', () => {
            this.setTime(this.input.element.value)
            callback()
        })
    }

    _setTime(seconds) {
        if (this.mode)
            seconds *= 60
        clearInterval(this.intervalTimer)
        this.secondsLeft = seconds
        return seconds
    }

    setTime(seconds) {
        this._setTime(seconds)
        this.timer()
    }

    _calculateEndTime(seconds) {
        const now = Date.now()
        return now + seconds * 1000
    }

    timer() {
        // const now = Date.now()
        const end = this._calculateEndTime(this.secondsLeft) //now + this.secondsLeft * 1000
        this.displayTimeLeft(this.secondsLeft)
        this.displayEndTime(end)
        this.countdown(end)
    }

    displayTimeLeft(secondsLeft) {
        const minutes = Math.floor((secondsLeft % 3600) / 60)
        const seconds = secondsLeft % 60

        this.timeLeftText.innerHTML = `<div class='timeleft-label'>Time Left</div><div class='countdown'><ul>
            <li><span>${zeroPadded(minutes)}</span>Minutes</li>
            <li class='seconds'><span>${zeroPadded(seconds)}</span>Seconds</li>
            </ul></div>`
    }



    displayEndTime(timestamp) {
        const end = EndTime(timestamp)
        this.endTimeText.innerHTML = `End time: ${hourConvert(end.hour)}:${zeroPadded(end.minutes)}:${zeroPadded(end.seconds)} ${end.session}`
    }

    countdown(end) {
        this.intervalTimer = setInterval(() => {
            const secondsLeft = Math.round((end - Date.now()) / 1000)

            if (secondsLeft === 0)
                this.endTimeText.innerHTML = '-'

            if (secondsLeft < 0) {
                clearInterval(this.intervalTimer)
                return
            }

            this.displayTimeLeft(secondsLeft)
        }, 1000)
    }
}
function zeroPadded(num) {
    // 4 --> 04
    return num < 10 ? `0${num}` : num
}

function hourConvert(hour) {
    // 15 --> 3
    return (hour % 12) || 12
}



const Clock = (selector) => {
    const element = new ELEMENT(selector)
    const clock = {}
    clock.showTime = () => {
        const date = new Date()
        let h = date.getHours() // 0 - 23
        let m = date.getMinutes() // 0 - 59
        let s = date.getSeconds() // 0 - 59
        let session = AMPM(h)
        h = (h < 10) ? "0" + h : h
        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s

        const time = `<span class='clock-time'>${h}</span>:<span class='clock-time'>${m}</span>:<span class='clock-time'>${s}</span>${session}`
        element.innerHTML = time

        setTimeout(clock.showTime, 1000)
    }
    return clock
}