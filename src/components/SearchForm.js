// SearchForm.js

import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or API call with searchTerm
    fetchBooks(searchTerm); // Example function to fetch books based on searchTerm
  };

  const fetchBooks = async (searchTerm) => {
    try {
      // Example: Perform API call or fetch logic
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = await response.json();
      onSearch(data.items); // Pass fetched data to parent component
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <input
        type="text"
        style={{
          padding: '12px',
          fontSize: '1rem',
          border: '2px solid #007bff',
          borderRadius: '4px',
          outline: 'none',
          width: '300px',
          marginRight: '10px', // Space between input field and button
          backgroundColor: '#e3f2fd', // Matching background color
          color: '#333' // Text color for input field
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          fontSize: '1rem',
          backgroundColor: '#007bff', // Matching background color
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
