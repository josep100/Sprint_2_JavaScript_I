// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const productToAdd = products.find((product) => product.id === parseInt(id));
    const existingProductInCart = cart.find((item) => item.id === productToAdd.id);

    if(!existingProductInCart){
        cart.push({...productToAdd, quantity: 1});
    } else {
        existingProductInCart.quantity += 1;
    }
}

// Exercise 2
const cleanCart = () =>  {
    cart.splice(0, cart.length);
}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    const sumaTotal = cart.reduce((total, producto) => {
        if(producto.quantity > 1){
                total += (producto.quantity * producto.price);
        }else{
            total += producto.price
        }

        return total;
    },0);

    return sumaTotal;
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"

    cart.forEach((producto) => {
         if(producto.offer){
            if(producto.offer && producto.quantity >= producto.offer.number){
                producto.subtotalWithDiscount = producto.price * producto.quantity * (1 - producto.offer.percent / 100);
            }
         }
    });

}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}

const btns_addCart = document.getElementsByClassName("add-to-cart");

for (const btn_addCart of btns_addCart) {
    btn_addCart.addEventListener("click", (event) => {
            buy(event.target.dataset.productId);
    });
}
