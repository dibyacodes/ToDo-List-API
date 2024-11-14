export default function changeStatusOfCompletedTasks(inputElement){
    if (inputElement instanceof HTMLInputElement){
        if (inputElement.checked == true){
            let LocalStorage = getLocalStorage()

            console.log(inputElement.getAttribute("id"));
            
        }
    }
}