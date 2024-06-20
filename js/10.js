const tech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT.JS', 'NODE.JS']

// console.table(tech)
console.log(tech)

// Lets add new positions to the array
// tech[4] = 'NEST.JS'


// tech.push('NEST.JS')
// Mutate means that the original array its modified. doesitmutate.xyz .push() mutates the array

// const newArray = [...tech, 'NEXT.JS']
// If you do that, you just create a new Array with the new string the array does not mutate

// .shift() mutates and delets the first value of the array, .pop() does the same but with the last value.

// const tech2 = tech.filter(function (tech) {
//     if (tech === 'HTML') {
//         return tech
//     }
// })

// console.table(tech2) // It renders just HTML

// const tech2 = tech.filter(function (tech) {
//     if (tech !== 'HTML') {
//         return tech
//     }
// })

// console.table(tech2) // It renders all but not HTML

// The best way to add a new element to the collection

const tech2 = tech.map(function (tech) {
    if (tech === 'NODE.JS') {
        return 'NEST.JS'
    } else {
        return tech
    }
})