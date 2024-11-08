const inputField = document.querySelector("#input")
const submit = document.querySelector("#submit")
const mainTaskDiv = document.querySelector("#task")
const editButton = document.querySelector("#edit")
displayIfNotNull()

// generate a random task ID for every Task
function randomTaskId(){
    let randomTaskItemId = Math.floor(Math.random()*10000)
    return randomTaskItemId
}


// display the list on page load if not null
function displayIfNotNull(){
    let userTaskListOnLoad = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    if (userTaskListOnLoad.length > 0){
        displayUserTasks()
    }
}

// Checks if the userInput is an empty string or not
function checkIfAnInvalidString(string){
    if (string.length === 0){
        return true 
    } else {
        return false
    }
}

// Create a new input with a checkbox
function createUserTask(userTaskLabel,divId){
    const inputDiv = document.createElement("div")
    inputDiv.setAttribute("class","userInputDiv")
    inputDiv.setAttribute("id",divId)
    
    const divForEditAndRemoveButton = document.createElement("div")
    divForEditAndRemoveButton.setAttribute("class","editAndRemoveButton")
    
    
    // Defining the edit button
    const editButton = document.createElement("button")
    editButton.setAttribute("id","edit")
    editButton.innerHTML = `Edit`
    
    // Defining the remove button
    const removeButton = document.createElement("button")
    removeButton.setAttribute("id","remove")
    removeButton.innerHTML = `Remove`
    
    
    const divForInputAndLabel = document.createElement("div")
    divForInputAndLabel.setAttribute("class","divForInputAndLabel")
    const inputElement = document.createElement("input")
    
    inputElement.setAttribute("class","usertask")
    inputElement.setAttribute("type","checkbox")
    inputElement.setAttribute("name","userTaskInput")
    const labelElement = document.createElement("label")
    
    labelElement.textContent = `${userTaskLabel}`
    labelElement.setAttribute("for","task")
    labelElement.setAttribute("class","taskLabel")
    
    // Defining what will the edit and remove buttons do
    
    // Remove Button
    removeButton.addEventListener('click',()=>{
        console.log(`Clicked On ${removeButton.innerHTML}`);
        removeUserFromLocalStorage(divId)
        displayIfNotNull()
    })
    
    // Edit Button
    editButton.addEventListener('click',()=>{
        console.log(`Clicked On ${editButton.innerHTML}`);
    })
    
    divForInputAndLabel.addEventListener('click',(event)=>{
        console.log(event.target)
        // delete event.target
        inputElement.checked = true
    })
    
    divForInputAndLabel.appendChild(inputElement)
    divForInputAndLabel.appendChild(labelElement)
    divForEditAndRemoveButton.appendChild(removeButton)
    divForEditAndRemoveButton.appendChild(editButton)
    inputDiv.appendChild(divForInputAndLabel)
    inputDiv.appendChild(divForEditAndRemoveButton)
    mainTaskDiv.appendChild(inputDiv)
}

// accept inputs in an object and stores it as string in local storage
function storeObjectsAsStringLocally(uId,userTaskString){
    // Gets All the Data in an Object
    let dataObject = {
        userId : uId, // stored as a number ID
        task : `${userTaskString}`,
        completedStatus : false
    }
    
    // Checks existing values from the web localstorage
    let storeArray = JSON.parse(localStorage.getItem("userDetailsArray")) || [] // Unpacking the array because it is stored as a string
    
    storeArray.push(dataObject)
    
    // Conver the JSON object into a string
    let stringObject = JSON.stringify(storeArray) // packing the array
    
    localStorage.setItem("userDetailsArray",`${stringObject}`)
}

function displayUserTasks(){
    mainTaskDiv.innerHTML = ''
    
    // Get data from Local Storage of the browser
    const getLocalStorage = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    
    getLocalStorage.forEach(element => {
        createUserTask(element.task,element.userId)
    });
}

// Lets the user remove tasks on completion. Should remove it completely from the local storage
function removeUserFromLocalStorage(userElement){
    const getItemFromLocalstorage = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    getItemFromLocalstorage.forEach(element => {
        if (userElement === element.userId){
            console.log(element);
            let indexElement = getItemFromLocalstorage.indexOf(element)
            console.log(indexElement);
            getItemFromLocalstorage.splice(indexElement,1)
            
            let modifiedArray = JSON.stringify(getItemFromLocalstorage)
            localStorage.setItem("userDetailsArray",`${modifiedArray}`)
        }
        if (getItemFromLocalstorage.length == 0){
            displayIfNotNull()
            localStorage.clear()
        }
    });
    
    
}

submit.addEventListener('click',()=>{
    const userTask = inputField.value
    const validOrInvalid = checkIfAnInvalidString(userTask)
    
    if (validOrInvalid === false){
        let randomId = randomTaskId()
        new storeObjectsAsStringLocally(randomId,userTask)
    }
    displayUserTasks()
    inputField.value = ''
})

displayIfNotNull()




