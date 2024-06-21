const tech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT.JS', 'NODE.JS', 'NEST.JS', 'TYPESCRIPT']

// // Initial value of the index ; do it till i is less than 5... ; ingrease

// for (let i = 0; i < 5; i++) {
//     console.log(tech[i])

// }

// // Initial value of the index ; do it till i is less than tech length... ; ingrease

// for (let i = 0; i < tech.length; i++) {
//     console.log(tech[i])
// }

// forEach VS map...

// tech.forEach((tech) => {
//     console.log(tech)

// })

// tech.map((tech) => {
//     console.log(tech)

// })

// Seems like they both does the same but map generates a new array...

const arrayForEach = tech.forEach((tech) => {
    return tech

}) // returns undefined

const arrayMap = tech.map((tech) => {
    return tech

}) // returns all the elements of the array in a newer one, map is the best with ReactJS

console.log(arrayForEach)
console.log(arrayMap)

