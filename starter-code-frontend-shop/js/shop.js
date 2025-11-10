// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
import { products } from '../data/products.js';

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
export const cart = [];

const total = 0;




const searchProducts = (id) => {
    return products.find((product) => product.id === parseInt(id));
}

const searchCart = (id) => {
    return cart.find((product) => product.id === parseInt(id));
}
// Exercise 1
export const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const productToAdd = searchProducts(id);
    const existingProductInCart = searchCart(productToAdd.id);

    if(!existingProductInCart){
        cart.push({...productToAdd, quantity: 1});
    } else {
        existingProductInCart.quantity += 1;
    }
}



// Exercise 2
export const cleanCart = () =>  {
    cart.splice(0, cart.length);
}

// Exercise 3
export const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
     return cart.reduce((total, producto) => {
        const subtotal = producto.subtotalWithDiscount
            ? producto.subtotalWithDiscount
            : producto.price * producto.quantity;
        return (total + subtotal).toFixed(2);
    }, 0);
}

// Exercise 4
export const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"

    cart.forEach((producto) => {
         if(producto.offer){
            if(producto.offer && (producto.quantity >= producto.offer.number)){
                producto.subtotalWithDiscount = producto.price * producto.quantity * (1 - producto.offer.percent / 100);
            }
         }
    });

}




// ** Nivell II **

// Exercise 7
export const removeFromCart = (id) => {
    const productRemove = searchCart(id);

    if (!productRemove) return; 

    if (productRemove.quantity > 1) {
        productRemove.quantity -= 1;
        if (productRemove.quantity === 2 || productRemove.quantity === 9)
            delete productRemove.subtotalWithDiscount;
    } else {
        const index = cart.findIndex(item => item.id === Number(id));
        if (index !== -1) cart.splice(index, 1);
    } 
};

export function generateCartHTML(cart) {
  const html = cart.map(producto => `
    <tr>
      <td><img src='./images/${producto.image}' style="max-width: 35px; height: auto;"></img></td>
      <td class="text-truncate">${producto.name}</td>
      <td>${producto.price.toFixed(2)}</td>
      <td>
        <span class="btn-less btn btn-sm" data-id="${producto.id}">−</span>
        <span class="quantity">${producto.quantity}</span>
        <span class="btn-more btn btn-sm" data-id="${producto.id}">+</span>
      </td>
      <td>
        ${producto.subtotalWithDiscount
          ? `${producto.subtotalWithDiscount.toFixed(2)} (${producto.offer.percent}%)`
          : (producto.price * producto.quantity).toFixed(2)}
      </td>
    </tr>
  `).join('');

  // 🧱 Devuelve el HTML y el total, pero NO toca el DOM
  return html;
}





