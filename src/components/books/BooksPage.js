import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookView from './BookView';
import Carousel from '../views/Carousel';

const Books = () => {
  const { data: books, state } = useSelector((state) => state.booksReducer);
  if (state === 'loading') return <div>loading</div>;

  return (
    <Carousel>
      { books.map(
        ({
          id, title, author, image,
        }) => (
          <Link to={`/books/${id}`} key={id}>
            <BookView
              title={title}
              author={author}
              image={image}
            />
          </Link>
        ),
      )}
    </Carousel>
  );
};

export default Books;
