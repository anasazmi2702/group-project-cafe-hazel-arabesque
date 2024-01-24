let cart = [];

function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  let totalPrice = 0;

  for (const item of cart) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    totalPrice += item.price;
  }

  const totalElement = document.getElementById('total-price');
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
function checkout() {
    // Implement the checkout logic here
    alert('Checkout functionality will be implemented in the future.');
  }
  
  function resetCart() {
    cart = [];
    updateCart();
  }