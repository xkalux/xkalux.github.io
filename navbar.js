const dropdown = document.querySelector('#navbarNav')

dropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        dropdown.classList.toggle("show")
    })
})