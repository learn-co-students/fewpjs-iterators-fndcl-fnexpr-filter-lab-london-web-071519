// Code your solution here

const findMatching = (drivers, name) => {
    const matchingDrivers = drivers.filter(driver => {
        return driver.toUpperCase() === name.toUpperCase()
    })
    return matchingDrivers
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => {
       return string.includes(driver[0])
    })
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => {
        return driver['name'] === name
    })
}