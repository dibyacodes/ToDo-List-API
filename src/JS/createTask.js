import changeStatusOfCompletedTasks from "./taskStatus.js"
import removeUserFromLocalStorage from "./removeTask.js"
import editUserTask from "./editTasks.js"
import { displayIfNotNull } from "./main.js"


const mainTaskDiv = document.querySelector("#task")

export default function createUserTask(userTaskLabel, divId) {
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
    removeButton.innerHTML = `Remove`
    
    
    const divForInputAndLabel = document.createElement("div")
    divForInputAndLabel.setAttribute("class", "divForInputAndLabel")
    const inputElement = document.createElement("input")

    
    inputElement.setAttribute("class", "usertask")
    inputElement.setAttribute("type", "checkbox")
    inputElement.setAttribute("name", "userTaskInput")

    changeStatusOfCompletedTasks(inputElement)
    

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

    divForInputAndLabel.appendChild(inputElement)
    divForInputAndLabel.appendChild(labelElement)
    divForEditAndRemoveButton.appendChild(removeButton)
    divForEditAndRemoveButton.appendChild(editButton)
    inputDiv.appendChild(divForInputAndLabel)
    inputDiv.appendChild(divForEditAndRemoveButton)
    mainTaskDiv.appendChild(inputDiv)
}