const fs = require('fs');
const { recommendBooks } = require('./ai/recommender');

const books = JSON.parse(fs.readFileSync('./mock/sampleBooks.json'));
const patron = JSON.parse(fs.readFileSync('./mock/samplePatron.json'));

console.log(`Hello, ${patron.name}!`);
const recs = recommendBooks(patron, books);

console.log("Recommended books:");
recs.forEach(b => console.log(`- ${b.title}`));
