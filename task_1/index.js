var unit_price = 5000;
var quantity = 0;

var total_stock = 10;
var remaining_stock = total_stock;

var increment_button = document.getElementById("increment-button");
var decrement_button = document.getElementById("decrement-button");
var add_to_cart_button = document.getElementById("add-to-cart-button");

var love_icon = document.getElementById("love_button");
var total_amount_element = document.getElementById("total-amount");
var remaining_stock_element = document.getElementById("remaining-stock");
var total_stock_element = document.getElementById("total-stock");
var quantity_element = document.getElementById("quantity");

for (var i = 0; i < document.querySelectorAll(".unit_price").length; i++) {
  document.querySelectorAll(".unit_price")[i].textContent = "৳ " + unit_price;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ love button functionality
love_icon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
var Islove = false;
love_icon.addEventListener("click", function () {
  Islove = !Islove;
  love_icon.innerHTML = Islove
    ? `<i class="fa-solid fa-heart"></i>`
    : `<i class="fa-regular fa-heart"></i>`;
});

var total_amount = unit_price * quantity;
total_amount_element.textContent = "$ " + total_amount;

total_stock_element.textContent = total_stock;
remaining_stock_element.textContent = remaining_stock;
quantity_element.textContent = quantity;

//+++++++++++++++++++++++++++++++++++increment and decrement button functionality
increment_button.addEventListener("click", function () {
  if (quantity < total_stock) {
    quantity++;
    remaining_stock--;
    total_amount = unit_price * quantity;
    quantity_element.textContent = quantity;
    remaining_stock_element.textContent = remaining_stock;
    total_amount_element.textContent = "$ " + total_amount;
  }
});
decrement_button.addEventListener("click", function () {
  if (quantity > 0) {
    quantity--;
    remaining_stock++;
    total_amount = unit_price * quantity;
    quantity_element.textContent = quantity;
    remaining_stock_element.textContent = remaining_stock;
    total_amount_element.textContent = "$ " + total_amount;
  }
});

// +++++++++++++++++++++++++++++++++Add to cart button functionality++++++++++
const popup = document.querySelector("#popup");
add_to_cart_button.addEventListener("click", function () {
  popup.classList.remove("opacity-0");
  popup.classList.add("opacity-100");
  setTimeout(() => {
    popup.classList.remove("opacity-100");
    popup.classList.add("opacity-0");
  }, 2000);
});
