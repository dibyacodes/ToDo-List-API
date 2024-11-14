import getLocalStorage from "./localStore.js"

// accept inputs in an object and stores it as string in local storage
export default function storeObjectsAsStringLocally(uId, userTaskString) {
    // Gets All the Data in an Object
    let dataObject = {
        userId: uId, // stored as a number ID
        task: `${userTaskString}`,
        completedStatus: false //default state of the task is set to false
    }

    // Checks existing values from the web localstorage
    let storeArray = getLocalStorage() // Unpacking the array because it is stored as a string

    storeArray.push(dataObject)

    // Conver the JSON object into a string
    let stringObject = JSON.stringify(storeArray) // packing the array

    localStorage.setItem("userDetailsArray", `${stringObject}`)
}