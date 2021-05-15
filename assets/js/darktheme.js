let darkTheme = localStorage.getItem('darkTheme')


const darkToggle = document.querySelector('.toggle-button')

function darkMode() {
    document.body.classList.add('dark')
    localStorage.setItem('darkTheme', 'on')
}

function disableDarkMode() {
    document.body.classList.remove('dark')
    localStorage.setItem('darkTheme', null)
}

if (darkTheme === 'on') {
    darkMode();
}

darkToggle.addEventListener('click', () => {
    darkTheme = localStorage.getItem('darkTheme')
    
    if (darkTheme !== 'on'){
    darkMode()
} else {
    disableDarkMode();
}
})





// document.querySelector('.toggle-button').addEventListener('click', () => {
//     document.body.classList.toggle('dark')
// })
