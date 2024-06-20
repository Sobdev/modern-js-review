// Objects - Destructuring one of more objects

const product = {
    name: 'Tablet',
    price: 300,
    discount: true
}

const client = {
    name: 'Adri',
    premium: true,
    address: {
        street: 'Calle Polvoranca'
    }
}


// Object inside another object, spread operator

// 1. Good old example

// const cart = {
//     quantity: 1,
//     product
// }

// console.log(cart.product.name)

// 2. Best way

// const cart = {
//     quantity: 1,
//     ...product // Right there, using spread operator!
// }

// console.log(cart.name)

// 3. Lets merge product and client in a same Object 

// 3.1 Option one

// const newerObject = {
//     product: {...product},
//     client: {...client}
// }

// console.log(newerObject)

// 3.2 Option two

// const newerObject = {
//     ...product,
//     ...client
// }

// console.log(newerObject)

// 3.3 Extra option three

const newerObject = Object.assign(product, client)

console.log(newerObject)
