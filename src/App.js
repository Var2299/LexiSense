import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [headingText, setHeadingText] = useState('Book Search');

  // Function to handle changing the heading text
  useEffect(() => {
    const headings = [
      'Discover Books',
      'Explore Authors',
      'Find Your Favorites',
      'Read Recommendations',
      'Uncover Bestsellers',
      'Dive Into Genres',
      'Top Picks For You',
      'Literary Treasures',
      'New Arrivals',
      'Book Adventures',
      'Page Turners Await',
      'Bookworm Paradise',
      'Literary Escapes',
      'Timeless Classics',
      'Hidden Gems',
      'Must-Read Novels'
    ];
    
    let index = 0;

    const interval = setInterval(() => {
      setHeadingText(headings[index]);
      index = (index + 1) % headings.length;
    }, 3000); // Change heading every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (data) => {
    setBooks(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff' }}>{headingText}</h1>
          <div className="search-form-container">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
        <BookList books={books} />
      </header>
    </div>
  );
}

export default App;
