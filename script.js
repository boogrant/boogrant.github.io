function search() {
    // Get the input value
    var query = document.getElementById('searchInput').value;
    
    // Here, you would typically perform an AJAX request to your server to fetch search results
    // For simplicity, let's just log the search query to the console
    console.log('Search query:', query);
    
    // You can then update the UI with the search results
    // For demonstration, let's update the UI with a sample result
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '<p>Showing results for: <strong>' + query + '</strong></p>';
}
