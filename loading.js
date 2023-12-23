const loading = document.getElementById('loading')
loading.style.visibility = 'hidden'

const listA = document.getElementsByTagName('a')

for (let index = 0; index < listA.length; index++) {
    const element = listA[index]
    // const dropdown = element.parentElement.parentElement.parentElement.getElementsByClassName('.dropdown-toggle')

    element.addEventListener('click', () => {
        loading.style.visibility = 'visible'
        // if (dropdown !== undefined) {
        //     console.log(dropdown.nodeName)
        // }
    })
}