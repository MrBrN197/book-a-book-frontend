import { useDispatch, useSelector } from 'react-redux';
import BookView from './BookView';
import Carousel from '../views/Carousel';
import styles from './RemoveBookPage.module.scss';
import { deleteBook } from '../../redux/books/books';

const RemoveBook = () => {
  const { data: books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const handleClick = (bookId) => {
    dispatch(deleteBook(bookId));
    alert(`Removed Book With Id ${bookId}`);
  };

  return (
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
  );
};

export default RemoveBook;
