import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import booksReducer, { fetchBooks } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

// Initialize Books
store.dispatch(fetchBooks());

export default store;
