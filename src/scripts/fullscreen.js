const FullScreen = function (fullscreen_id_selector) {
    const fullscreen_element = document.getElementById(fullscreen_id_selector)
    fullscreen_element.innerHTML = `<div class='fullscreen-icon maximize'></div>`

    const fullscreen = {
        element: document.documentElement,
        icon: document.querySelector('.fullscreen-icon')
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
        if (document.fullscreenElement) {
            fullscreen.closeFullscreen()
        } else {
            fullscreen.openFullscreen()
        }
        fullscreen.draw_icon()
    }

    fullscreen.icon.addEventListener('click', fullscreen.toggle)

    fullscreen.draw_icon = function () {
        fullscreen.icon.classList.remove('maximize')
        if (document.fullscreenElement)
            fullscreen.icon.classList.add('maximize')
    }


    return fullscreen
}