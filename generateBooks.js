const fs = require('fs');

const titles = ["1984", "To Kill a Mockingbird", "Harry Potter", "The Great Gatsby", "The Catcher in the Rye", "The Hobbit"];
const authors = ["George Orwell", "Harper Lee", "J.K. Rowling", "F. Scott Fitzgerald", "J.D. Salinger", "J.R.R. Tolkien"];
const genres = ["Dystopian", "Fiction", "Fantasy", "Classic", "Young Adult"];

const books = [];

for (let i = 1; i <= 10000; i++) {  // Generate 10,000 book entries
    const book = {
        id: i,
        title: titles[Math.floor(Math.random() * titles.length)],
        author: authors[Math.floor(Math.random() * authors.length)],
        genre: genres[Math.floor(Math.random() * genres.length)]
    };
    books.push(book);
}

fs.writeFile('books.json', JSON.stringify(books, null, 4), (err) => {
    if (err) throw err;
    console.log('books.json has been saved with 10,000 entries');
});
