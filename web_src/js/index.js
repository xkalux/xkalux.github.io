import { initGoogleIdentity, isLogin, getProfile } from "./google.account.min.js"
import { renderSubjectList } from "./profile.min.js"
import { renderSlidesList } from "./slides.min.js"
import { xClassAPI } from "./class-api.min.js"
import { handleLogin } from "./login.min.js"
import { renderTetris } from "./tetris.min.js"
import { initTetris } from "./tetris-game.min.js"
window.onload = async () => {

    const xclassAPI = new xClassAPI('AKfycbze7_2ulvGRaT4Mb_BMrUPzNRwTLa_TvWiOfTdqGqM6mz5Nf2ZIwZbW0P5gIuhcvDi77g')

    handleLogin(initGoogleIdentity, isLogin, getProfile)

    renderTetris(xclassAPI, document.querySelector('#tetris'), getProfile, initTetris)

    const profile = document.querySelector('#nav-profile')
    function loadsubject() {
        renderSubjectList(getProfile, xclassAPI, document.querySelector('#profile'))
        profile.removeEventListener('click', loadsubject)
    }
    profile.addEventListener('click', loadsubject)

    const slides = document.querySelector('#nav-slides')
    function loadslide() {
        renderSlidesList(xclassAPI, document.querySelector('#slides'))
        slides.removeEventListener('click', loadslide)
    }
    slides.addEventListener('click', loadslide)


    document.querySelector('#Hello-World').remove()
    window.location.hash = "#game"

}