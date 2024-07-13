const express = require('express');
const fs = require('fs');

const app = express();

// Endpoint to search for books by title
app.get('/search', (req, res) => {
  const { title } = req.query;

  // Read the books.json file
  fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the data');
      return;
    }

    // Parse the JSON data
    const books = JSON.parse(data);

    // Filter the books based on the search query
    const results = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));

    // Send the filtered results as the response
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
