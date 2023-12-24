const loading_site = document.getElementById('loading-site')
const loading = document.getElementById('loading')
loading.style.visibility = 'hidden'

const listA = document.getElementsByTagName('a')

for (let index = 0; index < listA.length; index++) {
    const element = listA[index]

    if (element.href.includes("#") || element.target === '_blank')
        continue

    element.addEventListener('click', () => {
        const scoreBoard = document.getElementById("scoreboard")
        scoreBoard.style.visibility = 'hidden'
        loading.style.visibility = 'visible'
        loading_site.innerHTML = element.innerHTML.trim()
    })
}