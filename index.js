// the code quality here is not good maybe.

const taskList = document.querySelector(`#taskList`)
const div = document.createElement("div")
div.setAttribute("class", "classDiv")

let userIdInput = 10; // the API has multiple users recognised by an id as because the entire API is returned in an array

async function getUserTaskUsingTheId() {

    let apiResponse = await fetch("https://jsonplaceholder.typicode.com/todos")

    try {
        let apiResponseToJSON = await apiResponse.json()  // get the response in JSON

        apiResponseToJSON.forEach((user) => {
            //For each is use because WE WILL HAVE TO CREATE AN INPUT FIELD FOR EACH TASK

            let userInputForCompletedTasks = document.createElement("input") // for checkbox
            let taskName = document.createElement("label") // for the task title
            let taskId = user.id // for accessing every userEntry
            user.completed = false //default task status
            let inputDiv = document.createElement("div")
            

            const removeTaskOnCompletion = () => {
                user.completed = true

                if (user.completed === true){
                    inputDiv.remove()
                }
            }

            if (user.userId === userIdInput) {
                inputDiv.setAttribute("class", "inputDiv")
                
                taskName.innerHTML = user.title // Task name
                userInputForCompletedTasks.setAttribute("type", "checkbox")
                userInputForCompletedTasks.setAttribute("id", taskId)

                inputDiv.appendChild(userInputForCompletedTasks)
                inputDiv.appendChild(taskName)

                div.appendChild(inputDiv)
                taskList.appendChild(div)
            }

            // CHECKBOX CLICK RESPONSE

            userInputForCompletedTasks.addEventListener("click", () => {
                setTimeout(() => {
                    removeTaskOnCompletion()
                }, 1000);
            })
        });
    } catch (error) {
        console.log(error);
    }
}

getUserTaskUsingTheId()
