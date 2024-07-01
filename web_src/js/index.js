import { initGoogleIdentity, isLogin, getProfile } from "./google.account.min.js"
import { renderSubjectList } from "./profile.min.js"
import { renderSlidesList } from "./slides.min.js"
import { xClassAPI } from "./class-api.min.js"
import { handleLogin } from "./login.min.js"
import { renderTetris } from "./tetris.min.js"
import { initTetris } from "./tetris-game.min.js"
import { renderActions } from "./actions.min.js"
window.onload = async () => {

    const xclassAPI = new xClassAPI('AKfycbwxPhmTvnrcWKF5lE9LHtzMMmjregvcn_0onZpnaKhwx-YlxVmev356s3l5pP9_5_ehfw')

    handleLogin(initGoogleIdentity, isLogin, getProfile)

    renderTetris(xclassAPI, document.querySelector('#tetris'), getProfile, initTetris)

    renderActions(document.querySelector('#actions-element'))

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