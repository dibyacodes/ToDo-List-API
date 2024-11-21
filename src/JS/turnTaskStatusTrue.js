import getLocalStorage from "./localStore.js";

// this is an onclick function that is to be executed when the user with check a box
export default function changeTaskStatus(taskId,varElement){
    let taskList = getLocalStorage()
    varElement instanceof HTMLInputElement

    // For every new tasks completed

    for (let i=0;i<taskList.length;i++){
        if (taskList[i].userId=== taskId){
            if (varElement.checked === true){
                taskList[i].completedStatus = true;
                localStorage.setItem("userDetailsArray",JSON.stringify(taskList))
                console.log(`The id of the task clicked is ${taskList[i].userId}`,taskList[i].completedStatus);
                return taskList[i]
            } else if (varElement.checked === false){
                taskList[i].completedStatus = false;
                localStorage.setItem("userDetailsArray",JSON.stringify(taskList))
                return taskList[i]
            }
        }
    }
}

