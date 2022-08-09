// Find which row is next in line


// When a button is pressed, place the text of the button in 
// the next available box
activeRow = 1
optionButtons = document.querySelectorAll(".optionBtns")
optionButtons.forEach(button => button.addEventListener("click", () => {
    if (button.id === "") {
        row = document.getElementById(`${activeRow}`)
        box1 = row.getElementsByClassName("box1")[0]
        box2 = row.getElementsByClassName("box2")[0]
        box3 = row.getElementsByClassName("box3")[0]
        box4 = row.getElementsByClassName("box4")[0]
        box5 = row.getElementsByClassName("box5")[0]
        if (box1.textContent === "") {box1.textContent = button.textContent}
        else if (box2.textContent === "") {box2.textContent = button.textContent}
        else if (box3.textContent === "") {box3.textContent = button.textContent}
        else if (box4.textContent === "") {box4.textContent = button.textContent}
        else if (box5.textContent === "") {box5.textContent = button.textContent}
    }
}))

  // Add a backspace button to remove the most recent input
backspaceBtn = document.getElementById("backspace")
backspaceBtn.addEventListener("click", () => {
    row = document.getElementById(`${activeRow}`)
    box1 = row.getElementsByClassName("box1")[0]
    box2 = row.getElementsByClassName("box2")[0]
    box3 = row.getElementsByClassName("box3")[0]
    box4 = row.getElementsByClassName("box4")[0]
    box5 = row.getElementsByClassName("box5")[0]
    if (box5.textContent !== "") {box5.textContent = ""}
    else if (box4.textContent !== "") {box4.textContent = ""}
    else if (box3.textContent !== "") {box3.textContent = ""}
    else if (box2.textContent !== "") {box2.textContent = ""}
    else if (box1.textContent !== "") {box1.textContent = ""}
})

// When a test button is selected, check the order of the inputs
        // If the input is in the exact spot, add a green background
testBtn = document.getElementById("test")
testBtn.addEventListener("click", () => {
    row = document.getElementById(`${activeRow}`)
    box1 = row.getElementsByClassName("box1")[0]
    box2 = row.getElementsByClassName("box2")[0]
    box3 = row.getElementsByClassName("box3")[0]
    box4 = row.getElementsByClassName("box4")[0]
    box5 = row.getElementsByClassName("box5")[0]
    userInput = [box1.textContent, box2.textContent, box3.textContent, box4.textContent, box5.textContent]
    answer = ["test", "test2", "test3", "test4", "test5"]
    for (i = 0; i < 5; i++) {
        if (answer[i] === userInput[i]) {
            activeBox = `box${i+1}`
            row.getElementsByClassName(activeBox)[0].classList.add("completelyCorrect")
        } else {
            for (j = 0; j < 5; j++) {
                if (answer[j] === userInput[i]) {
                    activeBox = `box${i+1}`
                    row.getElementsByClassName(activeBox)[0].classList.add("partiallyCorrect")
                }
            }
        }
    }
    activeRow++
})
        
        // If the input is in the order but not the right spot,
        // add a yellow background

// When the correct order is inputted, disable the buttons

// Share button that copies the results into a simple sharable box