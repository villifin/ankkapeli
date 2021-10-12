input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Target)
})
radio.setGroup(255)
