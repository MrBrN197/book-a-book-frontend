import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import booksReducer, { fetchBooks } from './books/books';
import reservationsReducer from './reservation/reservations';

const reducer = combineReducers({
  booksReducer,
  reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

// Initialize Books
store.dispatch(fetchBooks());

export default store;
