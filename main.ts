input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(y, 4 - y)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
