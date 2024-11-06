const inputField = document.querySelector("#input")
const submit = document.querySelector("#submit")
const mainTaskDiv = document.querySelector("#task")
const editButton = document.querySelector("#edit")

retrieveAndDisplayTaskList()
// Checks if the userInput is an empty string or not
function checkIfAnInvalidString(string){
    if (string.length === 0){
        // console.log(`Empty string`);
        return true 
    } else {
        return false
    }
}

// Create a new input with a checkbox
function createUserTask(userTaskLabel){
    const inputDiv = document.createElement("div")
    const inputElement = document.createElement("input")
    inputElement.setAttribute("class","usertask")
    inputElement.setAttribute("type","checkbox")
    const labelElement = document.createElement("label")
    labelElement.textContent = `${userTaskLabel}`
    labelElement.setAttribute("for","task")

    inputDiv.appendChild(inputElement)
    inputDiv.appendChild(labelElement)
    mainTaskDiv.appendChild(inputDiv)
}

// accept inputs in an object and stores it as string in local storage
function storeObjectsAsStringLocally(uId,userTaskString){
    // Gets All the Data in an Object
    let dataObject = {
        userId : `${uId}`,
        task : `${userTaskString}`
    }

    // Checks existing values from the web localstorage
    let storeArray = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    console.log(storeArray);

    storeArray.push(dataObject)

    // Conver the JSON object into a string
    let stringObject = JSON.stringify(storeArray)

    // console.log(dataObject)
    localStorage.setItem("userDetailsArray",`${stringObject}`)
}
// Get the task from the localeStorage and display it in the frontEnd
function retrieveAndDisplayTaskList(){

    // Bring the valeus from the local storage
    const accessValuesFromTheLocalStorage = JSON.parse(localStorage.getItem("userDetailsArray")) || []// returns an array

    for (let i=0; i<accessValuesFromTheLocalStorage.length; i++){
        const elementTask = accessValuesFromTheLocalStorage[i]
        createUserTask(elementTask.task)
    }
    
    // console.log(accessValuesFromTheLocalStorage[0].task);
    
}

submit.addEventListener('click',()=>{
    const userTask = inputField.value
    const validOrInvalid = checkIfAnInvalidString(userTask)
    
    if (validOrInvalid === false){
        console.log(userTask);
        // new createUserTask(userTask)
        new storeObjectsAsStringLocally(Math.random(),userTask)
        retrieveAndDisplayTaskList()
    }
    inputField.value = null
    console.log(validOrInvalid);
})

// createUserTask()
// retrieveAndDisplayTaskList()





