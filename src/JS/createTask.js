import removeUserFromLocalStorage from "./removeTask.js"
import editUserTask from "./editTasks.js"
import { displayIfNotNull } from "./main.js"
import changeTaskStatus from "./turnTaskStatusTrue.js"
import getLocalStorage from "./localStore.js"

const mainTaskDiv = document.querySelector("#task")

export default function createUserTask(userTaskLabel, divId) {
    let getTasks = getLocalStorage()

    const inputDiv = document.createElement("div")
    inputDiv.setAttribute("class", "userInputDiv")
    inputDiv.setAttribute("id", divId)

    const divForEditAndRemoveButton = document.createElement("div")
    divForEditAndRemoveButton.setAttribute("class", "editAndRemoveButton")

    // Defining the edit button
    const editButton = document.createElement("button")
    editButton.setAttribute("class", "edit")
    editButton.innerHTML = `Edit`

    // Defining the remove button
    const removeButton = document.createElement("button")
    removeButton.setAttribute("class", "remove")
    removeButton.style.backgroundColor = "red"
    removeButton.style.color = "white"
    removeButton.style.fontWeight = "bold"
    removeButton.innerHTML = `Remove`


    const divForInputAndLabel = document.createElement("div")
    divForInputAndLabel.setAttribute("class", "divForInputAndLabel")

    const inputElement = document.createElement("input")
    inputElement.setAttribute("class", divId)
    inputElement.setAttribute("type", "checkbox")
    inputElement.setAttribute("name", "userTasks")


    // In case a task is completed and the user checks the box
    inputElement.addEventListener('click', () => {
        changeTaskStatus(divId, inputElement)
        labelChange(labelElement, inputElement)
    })

    const labelElement = document.createElement("label")

    labelElement.textContent = `${userTaskLabel}`
    labelElement.setAttribute("for", "task")
    labelElement.setAttribute("class", "taskLabel")

    // Defining what will the edit and remove buttons do

    // Remove Button
    removeButton.addEventListener('click', () => {
        removeUserFromLocalStorage(divId)
        displayIfNotNull()
    })

    // Edit Button
    editButton.addEventListener('click', (event) => {
        let mainDiv = event.target
        editUserTask(mainDiv.parentElement.parentElement)
    })

    // When the tasks completedStatus is marked true in the local storage

    for (let i = 0; i < getTasks.length; i++) {
        if (getTasks[i].completedStatus === true && getTasks[i].userId == inputElement.getAttribute("class")) {
            // console.log(inputElement);
            inputElement.checked = true
            labelChange(labelElement, inputElement)
        }
    }


    divForInputAndLabel.appendChild(inputElement)
    divForInputAndLabel.appendChild(labelElement)
    divForEditAndRemoveButton.appendChild(removeButton)
    divForEditAndRemoveButton.appendChild(editButton)
    inputDiv.appendChild(divForInputAndLabel)
    inputDiv.appendChild(divForEditAndRemoveButton)
    mainTaskDiv.appendChild(inputDiv)
}


function labelChange(targetElement, triggerElement) {
    if (triggerElement.checked === true) {
        targetElement.style.textDecoration = "line-through"
    } else if (triggerElement.checked === false){
        targetElement.style.textDecoration = "none"
    }
}