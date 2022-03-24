alarm=0
learn=0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def hraj():
 music.ring_tone(Note.C)

#send
if on_button_pressed_a:
    radio.send_value("Pípej", 1)

#save
def on_received_value(name, value):

    if name == "Pípej" and value==1:
        music.play_tone(Note.C, music.beat())