const FullScreen = function (fullscreen_id_selector) {
    const fullscreen_element = document.getElementById(fullscreen_id_selector)
    fullscreen_element.innerHTML = `<div id="screen-maximize" class="screen-icon"></div><div id="screen-minimize" class="screen-icon"></div>`

    const fullscreen = {
        element: document.documentElement,
        icon_maximize: document.getElementById('screen-maximize'),
        icon_minimize: document.getElementById('screen-minimize')
    }

    fullscreen.openFullscreen = function () {
        if (fullscreen.element.requestFullscreen) {
            fullscreen.element.requestFullscreen()
        } else if (fullscreen.element.webkitRequestFullscreen) { /* Safari */
            fullscreen.element.webkitRequestFullscreen()
        } else if (fullscreen.element.msRequestFullscreen) { /* IE11 */
            fullscreen.element.msRequestFullscreen()
        }
    }

    fullscreen.closeFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
    }

    fullscreen.toggle = function () {
        if (document.fullscreenElement)
            fullscreen.closeFullscreen()
        else
            fullscreen.openFullscreen()
    }

    fullscreen.icon_maximize.addEventListener('click', fullscreen.toggle)
    fullscreen.icon_minimize.addEventListener('click', fullscreen.toggle)

    fullscreen.draw_icon = function () {
        if (!document.fullscreenElement) {
            fullscreen.icon_maximize.classList.remove('screen-icon-hide')
            fullscreen.icon_minimize.classList.add('screen-icon-hide')
        } else {
            fullscreen.icon_maximize.classList.add('screen-icon-hide')
            fullscreen.icon_minimize.classList.remove('screen-icon-hide')
        }
    }

    fullscreen.element.addEventListener('fullscreenchange', () => {
        fullscreen.draw_icon()
    })

    fullscreen.draw_icon()

    return fullscreen
}