let cart = [];

function addToCart(name, price) {
cart.push({ name, price });
alert(name + " added to cart!");

displayCart();
}

function displayCart() {
const cartDiv = document.getElementById("cart");
cartDiv.innerHTML = "<h2>Cart</h2>";

cart.forEach(item => {
cartDiv.innerHTML += "<p>" + item.name + " - ₦" + item.price + "</p>";
});
}
