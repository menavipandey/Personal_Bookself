import React, { useState } from 'react';
import BookCard from './BookCard';

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      const data = await response.json();
      setResults(data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search for a book" />
      <div>
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
