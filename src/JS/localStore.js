// gets the local storage and returns an array
export default function getLocalStorage() {
    let storageFromBrowser = JSON.parse(localStorage.getItem("userDetailsArray")) || []
    return storageFromBrowser
}