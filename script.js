document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let query = document.getElementById('searchInput').value.trim();
    if (query !== '') {
        // Implement search function here (e.g., call a backend API)
        console.log('Performing search for: ' + query);
        // You can proceed to fetch search results and update UI here
    } else {
        alert('Please enter a search query');
    }
});
const express = require('express');
const app = express();

// Example data (can be replaced with actual data from a database)
const data = [
    { id: 1, title: 'Sample Item 1', content: 'This is the content of sample item 1.' },
    { id: 2, title: 'Sample Item 2', content: 'This is the content of sample item 2.' },
    // Add more items as needed
];

// Endpoint to handle search requests
app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase(); // Assuming 'q' is the query parameter
    const results = data.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );
    res.json(results);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
