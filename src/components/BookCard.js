import React from 'react';

const BookCard = ({ book, onAddToBookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      {onAddToBookshelf && <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>}
      {onRemoveFromBookshelf && <button onClick={() => onRemoveFromBookshelf(book.key)}>Remove from Bookshelf</button>}
    </div>
  );
};

export default BookCard;
