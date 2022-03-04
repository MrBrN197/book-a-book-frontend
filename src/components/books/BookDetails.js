import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { CgChevronRightO } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa';
import styles from './BookDetails.module.scss';

const BookDetails = () => {
  const { book_id: bookId } = useParams();
  const { state, data: books } = useSelector((state) => state.booksReducer);
  if (state === 'loading') return <div>Loading</div>;
  const book = books.find((b) => b.id === parseInt(bookId, 10));
  if (!book) return <div>Book does not exist</div>;

  const numStars = Math.round(parseInt(book.rating, 10));
  const stars = new Array(numStars).fill(0).map((_, idx) => idx);

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.image}>
          <img src={book.image} alt={book.title} />
          <Link to="/reservations/new" state={{ book_id: parseInt(bookId, 10) }} className={styles.reserveBtn}>
            <span>Reserve</span>
            <CgChevronRightO size="1.5em" />
          </Link>
        </div>
        <div className={`flex justify-between ${styles.details} mobile-only`}>
          <div>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
          </div>
          <div className="flex-col justify-between">
            <span className={styles.stars}>
              {stars.map((i) => <FaStar key={i} />)}
            </span>
            <span className={styles.price}>
              $
              {book.price}
            </span>
          </div>
        </div>
      </main>
      <aside className={`desktop-only ${styles.desc}`}>
        <div className={`flex justify-between ${styles.details} desktop-only`}>
          <div>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
          </div>
          <div className="flex-col justify-between">
            <span className={styles.stars}>
              {stars.map((i) => <FaStar key={i} />)}
            </span>
            <span className={styles.price}>
              $
              {book.price}
            </span>
          </div>
        </div>
        <div>
          <span className={styles.badge}>{book.genre}</span>
          <p>{book.description}</p>
        </div>
      </aside>
    </div>
  );
};

export default BookDetails;
