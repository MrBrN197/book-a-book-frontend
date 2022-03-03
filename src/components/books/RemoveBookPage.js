import { useSelector } from 'react-redux';
import BookView from './BookView';
import Carousel from '../views/Carousel';

const RemoveBook = () => {
  const { data: books } = useSelector((state) => state.booksReducer);

  const handleClick = () => {

  };

  // const style = {
  //   height: '100%',
  //   width: '100%',
  // };

  return (
    <Carousel>
      {books.map(({
        id, title, author, image,
      }) => (
        <div key={id}>
          <div>
            <BookView
              title={title}
              author={author}
              image={image}
            />
          </div>
          <button type="button" onClick={handleClick}>Delete Book</button>
        </div>
      ))}
    </Carousel>
  );
};

export default RemoveBook;
