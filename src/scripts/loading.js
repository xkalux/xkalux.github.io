'use strict'

const Loading = function (loading_selector, hamberger, onClick = () => { }) {
    const loadingElement = document.getElementById(loading_selector)
    const listA = document.getElementsByTagName('a')


    loadingElement.innerHTML = `<h5 class="">Launching <strong id="loading-site-text">your site</strong><br>
                        <small>It might take a while. Thank you for holding strong.</small>
                        </h5>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>`

    const displaySiteElement = document.getElementById('loading-site-text')
    const toggle = () => {
        loadingElement.classList.toggle('loading--hide')
        hamberger.toggle()
        onClick()
    }

    for (const a of listA) {
        if (a.href.includes("#") || a.target === 'blank')
            continue

        a.addEventListener('click', () => {
            displaySiteElement.innerHTML = a.innerHTML
            toggle()
        })
    }

    return loadingElement
}