input.onButtonPressed(Button.A, function () {
    aPressed += 1
    basic.showNumber(aPressed)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    bPressed += 1
    basic.showNumber(bPressed)
    led.stopAnimation()
})
let bPressed = 0
let aPressed = 0
aPressed = 0
bPressed = 0
