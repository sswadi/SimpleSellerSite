const input = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const inventoryItems = document.querySelectorAll(".inventory-item");

console.log("************");

input.addEventListener("input", function() {
  const searchValue = input.value.trim().toLowerCase();

  // Loop through each inventory item
  inventoryItems.forEach(function(item) {
    const productName = item.querySelector(".product-name").textContent.toLowerCase();

    // Check if the search value matches the product name
    if (productName.includes(searchValue)) {
      item.style.display = "block"; // Display the matching item
    } else {
      item.style.display = "none"; // Hide non-matching items
    }
  });
});
