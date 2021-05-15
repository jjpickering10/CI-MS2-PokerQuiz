const openModals = document.querySelectorAll('[data-modal-target')
const overlay = document.getElementById('overlay')

openModals.forEach(e => {
    e.addEventListener('click', () => {
        const modal = document.querySelector(e.dataset.modalTarget)
        console.log(modal)
    })
})




document.querySelector('.toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

