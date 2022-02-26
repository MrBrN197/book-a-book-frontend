import * as API from '../../api/books-api';

const GET_BOOKS = 'books/GET_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const DELETE_BOOK = 'books/REMOVE_BOOK';

export const fetchBooks = () => async (dispatch) => {
  const books = await API.getBooks();
  if (books) {
    dispatch({
      type: GET_BOOKS,
      payload: books.data,
    });
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const createBook = (book) => async (dispatch) => {
  const newbook = await API.createBook(book);
  dispatch(addBook(newbook));
};

export const deleteBook = (id) => async (dispatch) => {
  await API.deleteBook(id);
  dispatch(removeBook(id));
};

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS: {
      return action.payload;
    }
    case ADD_BOOK: {
      const books = [...state.books, action.payload];
      return books;
    }
    case DELETE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
};

export default booksReducer;
