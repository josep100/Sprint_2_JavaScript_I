import { buy, cleanCart, removeFromCart, calculateTotal, applyPromotionsCart, cart, generateCartHTML } from "./shop.js";

const btns_addCart = document.getElementsByClassName("add-to-cart");
const cartModal = document.getElementById("cartModal");
const clean = document.getElementById("clean-cart");
const cart_list = document.getElementById("cart_list");


// Exercise 5
const printCart = () => {
    
    const total_price = document.getElementById("total_price");
    const html = generateCartHTML(cart);
    cart_list.innerHTML = "";
    cart_list.innerHTML = html;

    const total = calculateTotal();
    total_price.textContent = total;
}

for (const btn_addCart of btns_addCart) {
    btn_addCart.addEventListener("click", (event) => {
            buy(event.target.dataset.productId);
            countProduct.textContent = cart.length;
    });
}

cartModal.addEventListener('shown.bs.modal', () => {
    printCart();
});

clean.addEventListener("click", () => {
    cleanCart();
    printCart();
});

const open_modal = () =>  {
    printCart();
}

cart_list.addEventListener('click', e => {
  if (e.target.classList.contains('btn-less')) {
        removeFromCart(e.target.dataset.id);
        applyPromotionsCart();
        printCart(); 
  }

  if (e.target.classList.contains('btn-more')) {
    buy(e.target.dataset.id);
    applyPromotionsCart();
    printCart();
  }
});


