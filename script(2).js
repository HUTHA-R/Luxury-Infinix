const mainImg = document.getElementById('main-img');
const smallImg1 = document.getElementById("small-img1");
const smallImg2 = document.getElementById("small-img2");
const smallImg3 = document.getElementById("small-img3");
const smallImg4 = document.getElementById("small-img4");
const smallImg5 = document.getElementById("small-img5");
const smallImg6 = document.getElementById("small-img6");
const smallImg7 = document.getElementById("small-img7");
const smallImg8 = document.getElementById("small-img8");
const smallImg9 = document.getElementById("small-img9");
// cart 
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartSidebar = document.querySelector('.cart-sidebar');
const cartItemsContainer = document.querySelector('.cart-items');
const totalElement = document.querySelector('.total');
const overlay = document.querySelector('.overlay');
// quantity buttons
const decreaseQuantityButton = document.querySelector('.decrease-quantity');
const increaseQuantityButton = document.querySelector('.increase-quantity');
const quantityInput = document.getElementById('quantity');
// checkout modal
const checkoutButton = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModalButton = document.getElementById('closeModal');
const orderDetailsList = document.getElementById('orderDetailsList');
// pay via card
const paymentMethodSelect = document.getElementById('paymentMethod');
const cardPaymentOptions = document.getElementById('cardPaymentOptions');



function toggleCartSidebar() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartToggle = document.querySelector('.cart-toggle');
    const overlay = document.querySelector('.overlay');
  
    cartSidebar.classList.toggle('active');
    cartToggle.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const cartToggle = document.querySelector('.cart-toggle');
    const overlay = document.querySelector('.overlay');
  
    cartToggle.addEventListener('click', toggleCartSidebar);
    overlay.addEventListener('click', function () {
      const cartSidebar = document.querySelector('.cart-sidebar');
      const cartToggle = document.querySelector('.cart-toggle');
      const overlay = document.querySelector('.overlay');
  
      cartSidebar.classList.remove('active');
      cartToggle.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  
// JavaScript for Toggle Functionality
function toggleSideMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const menuToggle = document.querySelector('.menu-toggle');
  
    sideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }

// cart
// document.addEventListener('DOMContentLoaded', function() {
  
//     document.querySelector('.open-sidebar-btn').addEventListener('click', function() {
//         cartSidebar.classList.toggle('open');
//         overlay.classList.toggle('open');
//     });

//     overlay.addEventListener('click', function() {
//         cartSidebar.classList.remove('open');
//         overlay.classList.remove('open');
//     });

//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', function() {
//             const productId = this.getAttribute('data-product-id');
//             const productImage = this.getAttribute('data-product-image');
//             const productName = this.getAttribute('data-product-name');
//             const productPrice = parseFloat(this.getAttribute('data-product-price'));
            
//             const existingProductIndex = cart.findIndex(item => item.id === productId);
            
//             if (existingProductIndex > -1) {
//                 cart[existingProductIndex].quantity += 1;
//             } else {
//                 cart.push({ id: productId, image: productImage, name: productName, price: productPrice, quantity: 1 });
//             }

//             updateCart();
//             saveCart();
//         });
//     });

//     function updateCart() {
//         cartItemsContainer.innerHTML = '';
//         let total = 0;

//         cart.forEach(item => {
//             const cartItem = document.createElement('li');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <img src="${item.image}" class="cart-item-image" alt="Product Image">
//                 <div class="cart-item-details">
//                     <span class="cart-item-name">${item.name}</span>
//                     <div class="cart-item-controls">
//                         <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
//                         <span class="cart-item-quantity">${item.quantity}</span>
//                         <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
//                     </div>
//                     <span class="cart-item-price">£ ${(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//                 <button class="remove-btn" data-id="${item.id}">Remove</button>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//             total += item.price * item.quantity;
//         });

//         totalElement.textContent = `Total: £${total.toFixed(2)}`;
//         addEventListeners();
//     }

//     function addEventListeners() {
//         document.querySelectorAll('.quantity-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 const action = this.getAttribute('data-action');
//                 const productId = this.getAttribute('data-id');
//                 const productIndex = cart.findIndex(item => item.id === productId);

//                 if (productIndex > -1) {
//                     if (action === 'increase') {
//                         cart[productIndex].quantity += 1;
//                     } else if (action === 'decrease') {
//                         cart[productIndex].quantity -= 1;
//                         if (cart[productIndex].quantity <= 0) {
//                             cart.splice(productIndex, 1);
//                         }
//                     }
//                     updateCart();
//                     saveCart();
//                 }

//             });
//         });

//         document.querySelectorAll('.remove-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 const productId = this.getAttribute('data-id');
//                 const productIndex = cart.findIndex(item => item.id === productId);

//                 if (productIndex > -1) {
//                     cart.splice(productIndex, 1);
//                     updateCart();
//                     saveCart();
//                 }
//             });
//         });
//     }

//     function saveCart() {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }

//     // Initial call to update cart from localStorage
//     updateCart();
// });
document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // const cart = []; // Initialize cart as an empty array

    // Select elements
    const openSidebarBtn = document.querySelector('.open-sidebar-btn');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.overlay');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    const quantity = quantityInput.value;

    // Open cart sidebar
    openSidebarBtn.addEventListener('click', function() {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    // Close cart sidebar when clicking on overlay
    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
    decreaseQuantityButton.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    increaseQuantityButton.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });
    // Add to cart button functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productImage = this.getAttribute('data-product-image');
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));
            const quantity = quantityInput.value;
            
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({ id: productId, image: productImage, name: productName, price: productPrice, quantity: 1*quantity });
            }
            updateCart();
            saveCart();
        });
    });

    // Update cart items display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" class="cart-item-image" alt="Product Image">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <span class="cart-item-price">£ ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        totalElement.textContent = `Total: £${total.toFixed(2)}`;
        addEventListeners();
    }

    // Add event listeners to quantity buttons and remove buttons
    function addEventListeners() {
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                const productId = this.getAttribute('data-id');
                const productIndex = cart.findIndex(item => item.id === productId);

                if (productIndex > -1) {
                    if (action === 'increase') {
                        cart[productIndex].quantity += 1;
                    } else if (action === 'decrease') {
                        cart[productIndex].quantity -= 1;
                        if (cart[productIndex].quantity <= 0) {
                            cart.splice(productIndex, 1);
                        }
                    }
                    updateCart();
                    saveCart();
                }
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productIndex = cart.findIndex(item => item.id === productId);

                if (productIndex > -1) {
                    cart.splice(productIndex, 1);
                    updateCart();
                    saveCart();
                }
            });
        });
    } 
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Initial call to update cart
    updateCart();
});


// open checkout page
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkoutBtn').addEventListener('click', function () {
        // Redirect to checkout page
        window.location.href = 'index(98).html';
    });

});

// checkout form
document.addEventListener('DOMContentLoaded', function() {
    // Fetch cart items from localStorage or any other source
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderDetailsList = document.getElementById('orderDetailsList');

    // Function to display order details dynamically
    function displayOrderDetails(cart) {
        // Clear existing content
        orderDetailsList.innerHTML = '';

        // Calculate total amount
        let totalAmount = 0;

        // Iterate through cart items and display each item
        cart.forEach(cartItem => {
            const listItem = document.createElement('li');
            listItem.textContent = `${cartItem.name} x ${cartItem.quantity} - $${(cartItem.quantity * cartItem.price).toFixed(2)}`;
            orderDetailsList.appendChild(listItem);
            // Add item total to total amount
            totalAmount += cartItem.quantity * cartItem.price;
        });

        // Display total amount
        const totalListItem = document.createElement('li');
        totalListItem.textContent = `Total: $${totalAmount.toFixed(2)}`;
        orderDetailsList.appendChild(totalListItem);
    }

    // Display order details if on checkout page
    if (window.location.pathname.includes('checkout.html')) {
        displayOrderDetails(cart);
    }

    // pay via card options
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const cardPaymentOptions = document.getElementById('cardPaymentOptions');

    paymentMethodSelect.addEventListener('change', function() {
        const selectedPaymentMethod = this.value;

        if (selectedPaymentMethod === 'card') {
            cardPaymentOptions.style.display = 'block';
        } else {
            cardPaymentOptions.style.display = 'none';
            // Optionally reset or clear fields in cardPaymentOptions
        }
    });
});
// product card smalling and enlarging image

smallImg1.onclick = function () {
    mainImg.src = smallImg1.src;
}

smallImg2.onclick = function () {
    mainImg.src = smallImg2.src;
}

smallImg3.onclick = function () {
    mainImg.src = smallImg3.src;
}

smallImg4.onclick = function () {
    mainImg.src = smallImg4.src;
}

smallImg5.onclick = function () {
    mainImg.src = smallImg5.src;
}

smallImg6.onclick = function () {
    mainImg.src = smallImg6.src;
}

smallImg7.onclick = function () {
    mainImg.src = smallImg7.src;
}
smallImg8.onclick = function () {
    mainImg.src = smallImg8.src;
}
smallImg9.onclick = function () {
    mainImg.src = smallImg9.src;
}












