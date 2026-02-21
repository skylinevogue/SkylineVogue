let cart = [];

function addToCart(name, price) {
cart.push({ name, price });
alert(name + " added to cart!");

displayCart();
}

function displayCart() {

const cartItemsDiv = document.getElementById("cartItems");
let total = 0;

cartItemsDiv.innerHTML = "";

cart.forEach(item => {
cartItemsDiv.innerHTML +=
"<p>" + item.name + " - ₦" + item.price.toLocaleString() + "</p>";

total += item.price;
});

document.getElementById("cartTotal").innerText =
"Total: ₦" + total.toLocaleString();
}

function payWithPaystack() {

var totalAmount = document.getElementById("total").innerText;

if (totalAmount == 0) {
alert("Your cart is empty!");
return;
}

var handler = PaystackPop.setup({
key: "pk_live_784c7a25820d77a2601eb73e0989efb382bdec4d", // 🔥 Replace this
email: "customer@email.com", // You can improve this later
amount: totalAmount * 100, // convert Naira to Kobo
currency: "NGN",

callback: function(response) {
alert("Payment successful! Ref: " + response.reference);
},

onClose: function() {
alert("Transaction cancelled.");
}
});

handler.openIframe();
}
