import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCaretRight, BsCaretLeft } from 'react-icons/bs';
import { useRef } from 'react';
import BookView from './BookView';
import styles from './Books.module.scss';

const Books = () => {
  const { data: books, state } = useSelector((state) => state.booksReducer);
  const carouselEl = useRef(null);

  if (state === 'loading') return <div>loading</div>;

  const handleClick = (dir) => {
    if (!carouselEl.current) return;
    if (dir === 'left') carouselEl.current.scrollLeft -= carouselEl.current.offsetWidth;
    else if (dir === 'right') carouselEl.current.scrollLeft += carouselEl.current.offsetWidth;
    else throw new Error('invalid value for dir');
  };

  return (
    <div className={styles.books}>
      <div ref={carouselEl} className={styles.transformed}>
        { books.map(
          ({
            id, title, author, image,
          }) => (
            <Link to={`${id}`} key={title + author}>
              <BookView
                title={title}
                author={author}
                image={image}
              />
            </Link>
          ),
        )}
      </div>
      <button className={styles['nav-left']} aria-label="nav-left" type="button" onClick={() => handleClick('left')}><BsCaretLeft /></button>
      <button className={styles['nav-right']} aria-label="nav-right" type="button" onClick={() => handleClick('right')}><BsCaretRight /></button>
    </div>
  );
};

export default Books;
