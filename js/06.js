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

const { name } = product

const { name: clientName, address: { street } } = client

console.log(name)
console.log(clientName)
console.log(street)
