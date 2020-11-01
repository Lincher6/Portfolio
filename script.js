const animation = () => {
    let elementsLeft
    let elementsRight
    let windowHeight

    const init = () => {
        elementsLeft = document.querySelectorAll('.hiddenLeft')
        elementsRight = document.querySelectorAll('.hiddenRight')
        windowHeight = window.innerHeight
    }

    const checkPosition = () => {
        elementsLeft.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.remove('hiddenLeft')
                element.style.animation = 'popUp'
                element.style.animationDuration = '1s'
            }
        })

        elementsRight.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                setTimeout(() => {
                    element.classList.remove('hiddenRight')
                    element.style.animation = 'popUp'
                    element.style.animationDuration = '1s'

                }, 500)
            }
        })

    }

    init()
    checkPosition()

    document.addEventListener('scroll', checkPosition)
    document.addEventListener('resize', init)
}

animation()