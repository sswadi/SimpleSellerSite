// Client-side JavaScript code for handling search functionality

// Function to perform search
function performSearch() {
    // Get the search query
    const searchQuery = document.getElementById('search-input').value;
  
    // Make an AJAX request to the server to fetch search results
    fetch(`/search?query=${searchQuery}`)
      .then(response => response.json())
      .then(results => displayResults(results))
      .catch(error => console.error(error));
  }
  
  // Function to display search results
  function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
  
    if (results.length === 0) {
      resultsContainer.innerHTML = 'No results found.';
    } else {
      for (const result of results) {
        // Create a card element for each result and append it to the results container
        const card = document.createElement('div');
        card.classList.add('card');
  
        // Customize the card content based on your requirements (e.g., Business name, MRP, SP, QTY, logo)
        const cardContent = `
          <h3>${result.businessName}</h3>
          <p>MRP: ${result.MRP}</p>
          <p>SP: ${result.SP}</p>
          <p>Quantity: ${result.quantity}</p>
          <img src="${result.logo}" alt="Logo">
        `;
  
        card.innerHTML = cardContent;
        resultsContainer.appendChild(card);
      }
    }
  }
  
  // Event listener for search button click
  document.getElementById('search-button').addEventListener('click', performSearch);
  