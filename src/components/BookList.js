import React, { useState, useEffect } from 'react';
import './BookList.css'; // Import CSS styles
import Sentiment from 'sentiment';

const BookList = ({ books }) => {
  const [booksWithSentiment, setBooksWithSentiment] = useState([]);

  useEffect(() => {
    const analyzeSentiment = () => {
      const sentiment = new Sentiment();
      const booksWithAnalysis = books.map(book => {
        const description = book.volumeInfo.description || '';
        const result = sentiment.analyze(description);
        return { ...book, sentiment: result };
      });
      setBooksWithSentiment(booksWithAnalysis);
    };

    if (books.length > 0) {
      analyzeSentiment();
    }
  }, [books]);

  // Function to get emoji based on sentiment score
  const getSentimentEmoji = (score) => {
    if (score > 3) {
      return '😍'; // Very positive
    } else if (score > 0) {
      return '😊'; // Positive
    } else if (score === 0) {
      return '😐'; // Neutral
    } else if (score >= -3) {
      return '😕'; // Negative
    } else {
      return '😡'; // Very negative
    }
  };

  return (
    <div className="book-list">
      {booksWithSentiment.map(book => (
        <div key={book.id} className="book">
          <img src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder.jpg'} alt={book.volumeInfo.title} />
          <div className="book-details">
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.description}</p>
            <p>
              Sentiment: {book.sentiment.score} {getSentimentEmoji(book.sentiment.score)}
            </p>
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
