function recommendBooks(patron, books) {
  return books.filter(book =>
    patron.preferences.includes(book.genre) &&
    patron.age >= book.ageRating
  );
}
module.exports = { recommendBooks };
