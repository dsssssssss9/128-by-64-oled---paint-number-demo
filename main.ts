// Display Posistion number ( 0-3) in matching posistion
input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.clear()
    for (let index = 0; index <= 3; index++) {
        // character posistions from 0 - LHS to 3 - RHS
        // 
        kitronik_VIEW128x64.drawnum(index, index)
        kitronik_VIEW128x64.refresh()
        basic.pause(200)
        kitronik_VIEW128x64.clear()
        kitronik_VIEW128x64.refresh()
    }
})
// display each segment ( A - G )  in each of the 4 main posistions across the display
// *NOTE* this is pixel posistion NOT Column number!
// 
input.onButtonPressed(Button.B, function () {
    kitronik_VIEW128x64.clear()
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 <= 3; index2++) {
            kitronik_VIEW128x64.drawsegment(Segment_List[index], step_list[index2])
            kitronik_VIEW128x64.refresh()
            basic.pause(200)
        }
    }
    kitronik_VIEW128x64.refresh()
    basic.pause(200)
})
let Segment_List: string[] = []
let step_list: number[] = []
basic.showIcon(IconNames.Yes)
kitronik_VIEW128x64.clear()
// List of screen posistions ( Columns? )
// 
step_list = [
0,
32,
64,
96
]
// List of 7-Segment Display Segment "Names"
// 
// https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_Segment_Display_with_Labeled_Segments.svg
Segment_List = [
"A",
"B",
"C",
"D",
"E",
"F",
"G"
]
