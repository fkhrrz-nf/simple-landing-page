document.querySelectorAll('.contact>.info').forEach((e) => {
    e.addEventListener('click', () => {
        if (e.getAttribute('data-target') == 'current') {
            location.href = e.getAttribute('data-link')
        } else {
            window.open(e.getAttribute('data-link'))
        }
    })
})

document.querySelectorAll('.nav>span').forEach((e) => {
    e.addEventListener('click', () => {
        document.getElementById(e.getAttribute('data-target')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})