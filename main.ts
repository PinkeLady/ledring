modules.button4.onEvent(jacdac.ButtonEvent.Up, function () {
    basic.setLedColors(0x000000, 0x000000, 0x000000)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pixel += 1
    if (pixel == 8) {
        pixel = 0
    }
    if (pixel == 0) {
        modules.led1.setPixelColor(0, farbe)
    } else {
        modules.led1.setPixelColor(0, 0x000000)
    }
    if (pixel == 1) {
        modules.led1.setPixelColor(1, farbe)
    } else {
        modules.led1.setPixelColor(1, 0x000000)
    }
    if (pixel == 2) {
        modules.led1.setPixelColor(2, farbe)
    } else {
        modules.led1.setPixelColor(2, 0x000000)
    }
    if (pixel == 3) {
        modules.led1.setPixelColor(3, farbe)
    } else {
        modules.led1.setPixelColor(3, 0x000000)
    }
    if (pixel == 4) {
        modules.led1.setPixelColor(4, farbe)
    } else {
        modules.led1.setPixelColor(4, 0x000000)
    }
    if (pixel == 5) {
        modules.led1.setPixelColor(5, farbe)
    } else {
        modules.led1.setPixelColor(5, 0x000000)
    }
    if (pixel == 6) {
        modules.led1.setPixelColor(6, farbe)
    } else {
        modules.led1.setPixelColor(6, 0x000000)
    }
    if (pixel == 7) {
        modules.led1.setPixelColor(7, farbe)
    } else {
        modules.led1.setPixelColor(7, 0x000000)
    }
})
modules.button4.onEvent(jacdac.ButtonEvent.Down, function () {
    zäler += 1
    if (zäler == 5) {
        zäler = 0
    }
    if (zäler == 0) {
        farbe = basic.rgb(51, 0, 51)
    } else if (zäler == 1) {
        farbe = basic.rgb(255, 51, 153)
    } else if (zäler == 2) {
        farbe = basic.rgb(102, 0, 204)
    } else if (zäler == 3) {
        farbe = basic.rgb(51, 255, 255)
    } else if (zäler == 4) {
        farbe = basic.rgb(255, 255, 51)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    modules.led1.setPixelColor(0, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(1, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(2, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(3, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(4, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(5, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(6, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(7, 0xff0000)
    basic.pause(2000)
    modules.led1.setPixelColor(8, 0xff0000)
    basic.pause(2000)
})
let zäler = 0
let farbe = 0
let pixel = 0
pixel = -1
farbe = basic.rgb(255, 0, 0)
zäler = -1
basic.forever(function () {
	
})
