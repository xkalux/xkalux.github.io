'use strict'

const Hamburger = function (hamburger_icon_selector, game_anvas_selector) {

  const hamburger = {}
  const gameCanvas = document.querySelector(game_anvas_selector)

  hamburger.toggle = function () {
    gameCanvas.classList.toggle('blur')
    const hamburger__icons = document.getElementsByClassName("material-design-hamburger__icon")
    for (const element of hamburger__icons) {
      element.parentNode.nextElementSibling.classList.toggle('menu--on')
      const child = element.childNodes[1].classList
      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow')
        child.add('material-design-hamburger__icon--from-arrow')
      } else {
        child.remove('material-design-hamburger__icon--from-arrow')
        child.add('material-design-hamburger__icon--to-arrow')
      }
    }
  }
  // console.log(document.querySelector(hamburger_icon_selector))
  document.querySelector(hamburger_icon_selector).addEventListener(
    'click', hamburger.toggle)

  return hamburger
}