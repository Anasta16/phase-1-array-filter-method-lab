// Code your solution here

// const drivers = ['Bobby', "Sammy", "Sally", "Annette", " Sarah", "Bobby", "bobby"]

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    }, 
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

function findMatching(drivers, name) {
    return drivers.filter(
        (driver) => driver.toLowerCase() === name.toLowerCase()
        )
}

// console.log(findMatching(drivers, 'bobby'))

function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) =>
     driver.startsWith(letters))
     
 }

 function matchName(drivers, name) {
    return drivers.filter((driver) => {
        return driver.name === name
    }
)
}