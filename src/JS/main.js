const inputField = document.querySelector("#input")
const submit = document.querySelector("#submit")
const mainTaskDiv = document.querySelector("#task")
const editButton = document.querySelector("#edit")

DISPLAY_USER_TASKS()
// Checks if the userInput is an empty string or not
function checkIfAnInvalidString(string){
    if (string.length === 0){
        // console.log(`Empty string`);
        return true 
    } else {
        return false
    }
}

function editButtons(taskID){

}

// Create a new input with a checkboxe
function createUserTask(userTaskLabel){
    const inputDiv = document.createElement("div")
    inputDiv.style.display = "flex"
    inputDiv.style.backgroundColor = "#353535"
    inputDiv.style.padding = "0.5rem 1rem"
    inputDiv.style.border = "0.1rem solid #737373"
    inputDiv.style.borderRadius = "0.5rem"
    inputDiv.style.gap = "1rem"
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
    let storeArray = JSON.parse(localStorage.getItem("userDetailsArray")) || [] // Unpacking the array because it is stored as a string


    storeArray.push(dataObject)

    // Conver the JSON object into a string
    let stringObject = JSON.stringify(storeArray) // packing the array

    // console.log(dataObject)
    localStorage.setItem("userDetailsArray",`${stringObject}`)
}

function DISPLAY_USER_TASKS(){

    mainTaskDiv.innerHTML = ''
    // Get data from Local Storage of the browser

    const getLocalStorage = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    console.log(getLocalStorage);
    
    getLocalStorage.forEach(element => {
        createUserTask(element.task)
    });
}


submit.addEventListener('click',()=>{
    const userTask = inputField.value
    const validOrInvalid = checkIfAnInvalidString(userTask)
    
    if (validOrInvalid === false){
        // console.log(userTask);
        // new createUserTask(userTask)
        new storeObjectsAsStringLocally(Math.random(),userTask)
    }
    DISPLAY_USER_TASKS()
    inputField.value = null
    console.log(validOrInvalid);
})

// createUserTask()





