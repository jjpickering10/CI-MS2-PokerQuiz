let darkTheme = localStorage.getItem('darkTheme')

if (darkTheme === 'on') {
    darkMode();
} else if (darkTheme === null) {
        disableDarkMode();
}


const darkToggle = document.querySelector('.toggle-button')

function darkMode() {
    document.body.classList.add('dark')
    localStorage.setItem('darkTheme', 'on')
}

function disableDarkMode() {
    document.body.classList.remove('dark')
    localStorage.setItem('darkTheme', null)
}



darkToggle.addEventListener('click', () => {
    darkTheme = localStorage.getItem('darkTheme')
    
    if (darkTheme !== 'on'){
    darkMode()
} else {
    disableDarkMode();
}
})