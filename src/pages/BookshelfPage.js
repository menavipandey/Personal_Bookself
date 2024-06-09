import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(storedBooks);
  }, []);

  const removeFromBookshelf = (bookKey) => {
    const updatedBooks = books.filter(book => book.key !== bookKey);
    setBooks(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <Bookshelf books={books} onRemoveFromBookshelf={removeFromBookshelf} />
    </div>
  );
};

export default BookshelfPage;
