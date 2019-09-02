// Code your solution here
function findMatching(array, string) {
    return array.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(driver => {
        return driver.toUpperCase().slice(0,2) === string.toUpperCase().slice(0,2)
 })
}

function matchName(arrayOfObjects, string) {
    return arrayOfObjects.filter(driver => {
        return driver.name.toUpperCase() === string.toUpperCase()
    })
}