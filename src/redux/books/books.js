import * as API from '../../api/books-api';

export const GET_BOOKS = 'books/GET_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const DELETE_BOOK = 'books/REMOVE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const fetchBooks = () => async (dispatch) => {
  try {
    const books = await API.getBooks();
    if (books) {
      dispatch({
        type: GET_BOOKS,
        payload: books.data,
      });
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const newbook = await API.createBook(book);
    dispatch(addBook(newbook.data));
    return true;
  } catch {
    return false;
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const removed = await API.deleteBook(id);
    if (removed) dispatch(removeBook(id));
    return true;
  } catch {
    return false;
  }
};

const initialState = { data: [], state: 'loading' };

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS: {
      return { data: action.payload, state: 'ready' };
    }
    case ADD_BOOK: {
      const books = [...state.data, action.payload];
      return { data: books, state: 'ready' };
    }
    case DELETE_BOOK: {
      return { data: state.data.filter((book) => book.id !== action.payload), state: 'ready' };
    }
    default:
      return state;
  }
};

export default booksReducer;
