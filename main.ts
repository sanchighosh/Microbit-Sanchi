let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    control.waitMicros(1306)
    basic.showString("youWIN!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("sorry but you lose")
})
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (number == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else {
    	
    }
})
