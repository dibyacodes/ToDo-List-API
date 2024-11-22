import getLocalStorage from "./localStore.js";
import { displayIfNotNull } from "./main.js";

// Lets the user remove tasks on completion. Should remove it completely from the local storage
export default function removeUserFromLocalStorage(userElement) {
    const getItemFromLocalstorage = getLocalStorage()
    getItemFromLocalstorage.forEach(element => {
        if (userElement === element.userId) {
            let indexElement = getItemFromLocalstorage.indexOf(element)
            getItemFromLocalstorage.splice(indexElement, 1)

            let modifiedArray = JSON.stringify(getItemFromLocalstorage)
            localStorage.setItem("userDetailsArray", `${modifiedArray}`)
        }
    });

    if (getItemFromLocalstorage.length === 0) {
        displayIfNotNull()
        localStorage.clear()
    }
}