input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        kitronik_VIEW128x64.drawnum(index, index)
        kitronik_VIEW128x64.refresh()
        basic.pause(200)
        kitronik_VIEW128x64.clear()
        kitronik_VIEW128x64.refresh()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index2 = 0; index2 <= 3; index2++) {
        for (let index = 0; index <= 6; index++) {
            kitronik_VIEW128x64.drawsegment(Segment_List[index], step_list[index2])
            kitronik_VIEW128x64.refresh()
            basic.pause(200)
        }
        kitronik_VIEW128x64.refresh()
        basic.pause(200)
    }
})
let Segment_List: string[] = []
let step_list: number[] = []
basic.showIcon(IconNames.Yes)
kitronik_VIEW128x64.clear()
step_list = [
0,
32,
64,
96
]
Segment_List = [
"A",
"B",
"C",
"D",
"E",
"F",
"G"
]
basic.forever(function () {
	
})
