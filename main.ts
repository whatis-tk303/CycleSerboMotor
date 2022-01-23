input.onButtonPressed(Button.A, function () {
    speed += 5
    initMotor(Math.constrain(speed, 0, 180))
})
function initMotor (数値: number) {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 数値)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 数値)
}
input.onButtonPressed(Button.B, function () {
    speed += -5
    initMotor(Math.constrain(speed, 0, 180))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    speed = 77
    initMotor(speed)
})
let speed = 0
speed = 77
initMotor(speed)
basic.forever(function () {
    basic.showNumber(speed)
})
