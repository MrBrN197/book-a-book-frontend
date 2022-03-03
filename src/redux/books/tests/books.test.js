import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, { createBook, deleteBook, fetchBooks } from '../books';
import * as API from '../../../api/books-api';

jest.mock('../../../api/books-api');
let store = createStore(reducer, applyMiddleware(thunk));

describe('booksReducer', () => {
  beforeEach(() => {
    API.deleteBook.mockReturnValue({});
    API.createBook.mockImplementation((book) => ({ data: book }));
    API.getBooks.mockReturnValue(Promise.resolve({ data: new Array(3).fill({}) }));
    store = createStore(reducer, applyMiddleware(thunk));
  });

  test('the default value of the booksReducer', () => {
    const defaultValue = reducer(undefined, {});
    expect(defaultValue.state).toBe('loading');
    expect(defaultValue.data).toEqual([]);
  });

  test('reducer functions correctly when fetchBooks a book', async () => {
    await store.dispatch(fetchBooks());
    expect(API.getBooks).toHaveBeenCalledTimes(1);
    expect(store.getState().data).toHaveLength(3);
  });

  test('reducer functions correctly when adding a book', async () => {
    const book = { author: 'George R.R Martin' };
    await store.dispatch(createBook(book));
    expect(API.createBook).toHaveBeenCalledTimes(1);
    expect(store.getState().data).toHaveLength(1);
    expect(store.getState().data[0].author).toBe('George R.R Martin');
  });

  test('reducer functions correctly when removing a book', () => {
    store.dispatch(deleteBook(1));
    expect(API.deleteBook).toHaveBeenCalledTimes(1);
  });
});
