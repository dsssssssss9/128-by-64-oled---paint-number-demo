def on_button_pressed_a():
    for index in range(4):
        kitronik_VIEW128x64.drawnum(index, index)
        kitronik_VIEW128x64.refresh()
        basic.pause(200)
        kitronik_VIEW128x64.clear()
        kitronik_VIEW128x64.refresh()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index2 in range(7):
        kitronik_VIEW128x64.drawsegment(Segment_List[index2], 96)
        kitronik_VIEW128x64.refresh()
        basic.pause(200)
input.on_button_pressed(Button.B, on_button_pressed_b)

Segment_List: List[str] = []
kitronik_VIEW128x64.clear()
basic.clear_screen()
Segment_List = ["A", "B", "C", "D", "E", "F", "G"]

def on_forever():
    pass
basic.forever(on_forever)
