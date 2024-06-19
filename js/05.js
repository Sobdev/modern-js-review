// Objects - Manipulation

const product = {
    name: 'Tablet',
    price: 300,
    discount: true
}

// Re-do a value
prudct.discount = false

// Add a new fresh value
product.image = 'image.png'

// Delete an old one
delete product.price

console.log(product)

// if you use Object.free() or Object.seal() you can protect your object with any way to rewrite it