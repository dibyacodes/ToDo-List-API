import getLocalStorage from "./localStore.js"
import {checkIfAnInvalidString,displayIfNotNull} from "./main.js"

const inputField = document.querySelector("#input")

const ParentEditButton = document.querySelector("#edit")

// Edit task and then store it to the local storage.
export default function editUserTask(targetID) {
    let UserLocalStorage = getLocalStorage()
    let localStorageIdForTheTaskButton = targetID.getAttribute("id")

    let taskElement

    UserLocalStorage.forEach((element) => {
        if (localStorageIdForTheTaskButton == element.userId) {
            taskElement = element
            inputField.value = taskElement.task
            submit.style.display = "none"
            ParentEditButton.style.display = "block"
        }
    })

    ParentEditButton.addEventListener('click', () => {
        let InvalidEdit = checkIfAnInvalidString(inputField.value)

        if (InvalidEdit) {
            inputField.value = null
        } else {
            taskElement.task = inputField.value
            let modifiedList = JSON.stringify(UserLocalStorage)
            localStorage.setItem("userDetailsArray", modifiedList)
            displayIfNotNull()
            submit.style.display = "block"
            ParentEditButton.style.display = 'none'
        }
    })
}