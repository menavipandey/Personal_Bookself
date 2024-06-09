import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const isBookInBookshelf = bookshelf.some(item => item.key === book.key);
    if (!isBookInBookshelf) {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    } else {
      alert('This book is already in your bookshelf!');
    }
  };

  return (
    <div>
      <BookSearch onAddToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
