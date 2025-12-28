document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Enter Your Name"]').value;
  const phone = document.querySelector('input[placeholder="Enter Your Phone no"]').value;
  const email = document.querySelector('input[placeholder="Enter Your Email"]').value;
  const address = document.querySelector('input[placeholder="Enter Your Address"]').value;
  const payment = document.getElementById("payment").value;

  const selectedBooks = Array.from(
    document.querySelectorAll('.books input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const bookPrices = {
    "Eat that Frog": 180,
    "Ikigai": 120,
    "The 5AM Club": 200,
    "Think Like a Monk": 100,
    "Rich Dad Poor Dad": 170,
    "The Monk Who Sold His Ferrari": 200,
    "The Magic Mindset": 200,
    "Secret": 180,
    "Sherlock Holmes": 300,
    "Think and Grow Rich": 170,
    "The Power of Your Subconscious Mind": 190,
    "The Magic of Thinking Big": 160
  };

  let total = 0;
  selectedBooks.forEach(book => total += bookPrices[book]);

  const orderData = {
    name,
    phone,
    email,
    address,
    payment,
    selectedBooks,
    total,
    date: new Date().toLocaleDateString("en-GB")
  };

  // Save order details
  localStorage.setItem("orderDetails", JSON.stringify(orderData));

  // Redirect to success page
  window.location.href = "order successful.html";
});
