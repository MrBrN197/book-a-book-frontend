import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { CgChevronRightO } from 'react-icons/cg';
import styles from './BookDetails.module.scss';
import Error404 from '../errors/Error404';

const BookDetails = () => {
  const { book_id: bookId } = useParams();
  const { state, data: books } = useSelector((state) => state.booksReducer);
  if (state === 'loading') return <div>Loading</div>;
  const book = books.find((b) => b.id === parseInt(bookId, 10));
  if (!book) return <Error404 />;

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.image}>
          <img src={book.image} alt={book.title} />
        </div>
      </main>
      <aside>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <Link to="/reservations/new" state={{ book_id: parseInt(bookId, 10) }} className={styles['btn-primary']}>
          <span>Reserve</span>
          <CgChevronRightO size="1.5em" />
        </Link>
      </aside>
    </div>
  );
};

export default BookDetails;
