const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3002;

// Load data
const patrons = JSON.parse(fs.readFileSync('./patrons.json'));
const books = JSON.parse(fs.readFileSync('./books.json'));

function recommendBooks(patron, books) {
  return books.filter(book =>
    patron.preferences.includes(book.genre) &&
    book.ageRestriction <= patron.age
  );
}

app.get('/recommend/:id', (req, res) => {
  const patron = patrons.find(p => p.id === req.params.id);
  if (!patron) {
    return res.status(404).json({ error: 'Patron not found' });
  }

  const recommendations = recommendBooks(patron, books);
  res.json({ name: patron.name, recommendations });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
