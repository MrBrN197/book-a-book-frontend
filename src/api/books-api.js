import axios from 'axios';

const BASE_URL = 'https://book-a-book-api.herokuapp.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getBooks = async () => {
  const response = await api.get('/books');
  return response.data;
};

export const createBook = async (book) => {
  const response = await api.post('/books', book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await api.delete(`/books/${id}`);
  return response.status === 204;
};
