input.onButtonPressed(Button.A, function () {
    speed += 5
    setMotor(Math.constrain(speed, 0, 180))
})
function initMotor () {
    speed = 77
    setMotor(speed)
}
input.onButtonPressed(Button.B, function () {
    speed += -5
    setMotor(Math.constrain(speed, 0, 180))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    initMotor()
})
function setMotor (数値: number) {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 数値)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 数値)
}
let speed = 0
initMotor()
basic.forever(function () {
    basic.showNumber(speed)
})
