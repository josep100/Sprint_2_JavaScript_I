import { buy, cleanCart, removeFromCart, calculateTotal, applyPromotionsCart, cart, generateCartHTML } from "./shop.js";
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { MotionPathPlugin } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/MotionPathPlugin.min.js";

gsap.registerPlugin(MotionPathPlugin);

const btns_addCart = document.getElementsByClassName("add-to-cart");
const countProduct = document.getElementById("count_product");
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

    const product = event.target.closest(".product-card");
    const productImg = product.querySelector("img");
    const cartIcon = document.querySelector("#cart-button i");
    const imgRect = productImg.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    countProduct.textContent = cart.length;

    // Calcula posiciones absolutas en el documento
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const productX = imgRect.left + scrollX + imgRect.width / 2;
    const productY = imgRect.top + scrollY + imgRect.height / 2;
    const cartCenterX = cartRect.left + cartRect.width / 2;
    const cartCenterY = cartRect.top + cartRect.height / 2;

    const isCartFixed = getComputedStyle(cartIcon).position === "fixed";
    const targetLeft = cartCenterX + (isCartFixed ? 0 : scrollX);
    const targetTop  = cartCenterY + (isCartFixed ? 0 : scrollY);

    // Crear clon
    const flyingImg = productImg.cloneNode(true);
    flyingImg.classList.add('flying-img');
    document.body.appendChild(flyingImg);

    // Posicionar clon en la posición inicial
    gsap.set(flyingImg, {
        position: "absolute",
        left: productX,
        top: productY,
        xPercent: -50,
        yPercent: -50,
        width: imgRect.width,
        height: imgRect.height,
        zIndex: 9999,
        pointerEvents: "none",
    });

    // Animar hacia el carrito
      gsap.to(flyingImg, {
          duration: 1,
          left: targetLeft,
          top: targetTop,
          scale: 0.2,
          opacity: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            flyingImg.remove();

            // Efecto rebote del carrito
            gsap.fromTo(cartIcon, 
              { scale: 1 }, 
              { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.inOut' }
            );
          }
      });

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
        countProduct.textContent = cart.length;
        applyPromotionsCart();
        printCart(); 
  }

  if (e.target.classList.contains('btn-more')) {
    buy(e.target.dataset.id);
    countProduct.textContent = cart.length;
    applyPromotionsCart();
    printCart();
  }
});


