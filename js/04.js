// OBJECTS ...
const product = {
    name: 'Tablet',
    price: 300,
    discount: true
}

// console.log(product)
// console.log(typeof product)
// console.table(product)

// console.log(product.name)
// console.log(product.price)
// console.log(product.discount)
// console.log(product.color)


// DESTRUCTURING ... two ways of coding with the same resoults

// const priceOfProduct = product.name
// console.log(priceOfProduct)

// const { name, discount } = product
// console.log(name)
// console.log(discount)

// OBJECT LITERAL ...

const auth = true
const user = 'Adri'

// When the key and the value matches the naming 
const newObject = {
    auth,
    user
}

console.log(newObject)


// If not ...
const auth2 = false
const user2 = 'Isma'

const newObject2 = {
    auth2,
    user: user2
}

console.log(newObject2)
