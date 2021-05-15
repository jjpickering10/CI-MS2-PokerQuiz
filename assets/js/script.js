const openModals = document.querySelectorAll('[data-modal-target')
const overlay = document.getElementById('modal-overlay')

openModals.forEach(e => {
    e.addEventListener('click', () => {
        const modal = document.querySelector(e.dataset.modalTarget)
        console.log(modal)
        openModal(modal)
    })
})

function openModal(modal) {
    modal.classList.add('active')
    overlay.classList.add('active')
}




document.querySelector('.toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

