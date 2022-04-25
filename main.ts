input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
        basic.pause(100)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
