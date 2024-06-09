import React from 'react';
import BookCard from './BookCard';

const Bookshelf = ({ books, onRemoveFromBookshelf }) => {
  return (
    <div className="bookshelf">
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.key} book={book} onRemoveFromBookshelf={onRemoveFromBookshelf} />
        ))
      ) : (
        <p>No books in your bookshelf. Add some!</p>
      )}
    </div>
  );
};

export default Bookshelf;
