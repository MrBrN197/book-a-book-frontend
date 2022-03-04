import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import BookView from './BookView';
import Carousel from '../views/Carousel';
import styles from './RemoveBookPage.module.scss';
import { deleteBook } from '../../redux/books/books';

const RemoveBook = () => {
  const { data: books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const handleClick = (bookId) => {
    dispatch(deleteBook(bookId));
    setMessage('Succesfully Removed Book!');
    setTimeout(() => { setMessage(null); }, 3200);
  };

  return (
    <>
      {message && <span className={styles.errorMessage}>{message}</span>}
      <Carousel>
        {books.map(({
          id, title, author, image,
        }) => (
          <div key={id} className={styles.remove}>
            <BookView
              title={title}
              author={author}
              image={image}
            />
            <button type="button" className={styles.btn} onClick={() => handleClick(id)}>Delete Book</button>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default RemoveBook;
