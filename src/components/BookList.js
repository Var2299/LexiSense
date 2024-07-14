// src/components/BookList.js

import React from 'react';
import './BookList.css'; // Import CSS styles

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder.jpg'} alt={book.volumeInfo.title} />
          <div className="book-details">
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
