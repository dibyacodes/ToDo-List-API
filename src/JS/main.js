import createUserTask from "./createTask.js"
import storeObjectsAsStringLocally from "./localDataStore.js"
import getLocalStorage from "./localStore.js"

const inputField = document.querySelector("#input")
const submit = document.querySelector("#submit")
const mainTaskDiv = document.querySelector("#task")
displayIfNotNull()


// Create a new input with a checkbox


// generate a random task ID for every Task
function randomTaskId() {
    let randomTaskItemId = Math.floor(Math.random() * 10000)
    return randomTaskItemId
}


// display the list on page load if not null
export function displayIfNotNull() {
    let userTaskListOnLoad = getLocalStorage()
    if (userTaskListOnLoad.length > 0) {
        displayUserTasks()
    }
}

// Checks if the userInput is an empty string or not
export function checkIfAnInvalidString(string) {
    if (string.trim().length === 0) {
        return true
    } else {
        return false
    }
}

function displayUserTasks() {
    mainTaskDiv.innerHTML = ''

    // Get data from Local Storage of the browser
    const getLocalStorageBrowser = getLocalStorage()

    getLocalStorageBrowser.forEach(element => {
        createUserTask(element.task, element.userId)
    });
}

submit.addEventListener('click', () => {
    const userTask = inputField.value
    const validOrInvalid = checkIfAnInvalidString(userTask)

    if (validOrInvalid === false) {
        let randomId = randomTaskId()
        new storeObjectsAsStringLocally(randomId, userTask)
    }
    displayUserTasks()
    inputField.value = ''
})

displayIfNotNull()
// showCompletedTasks()

