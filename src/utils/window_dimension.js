const TABLET_SIZE = 1000

function checkIsASmartphone() {
    return window.screen.width <= TABLET_SIZE
}

export {
    checkIsASmartphone
}