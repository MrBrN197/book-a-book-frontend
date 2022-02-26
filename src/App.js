import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './redux/books/books';



const App = () => {
  const dispatch = useDispatch()
  const BOOKS = useSelector(state => state.booksReducer)

  useEffect(() => {
    dispatch(fetchBooks);
  }, []);


return (<div>Book A Book</div>);
}

export default App;
