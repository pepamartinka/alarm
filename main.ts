let alarm = 0
let learn = 0
function on_button_pressed_a() {
    
}

input.onButtonPressed(Button.A, on_button_pressed_a)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
})
function hraj() {
    music.ringTone(Note.C)
}

// send
if (on_button_pressed_a) {
    radio.sendValue("Pípej", 1)
}

// save
function on_received_value(name: any, value: any) {
    if (name == "Pípej" && value == 1) {
        music.playTone(Note.C, music.beat())
    }
    
}

