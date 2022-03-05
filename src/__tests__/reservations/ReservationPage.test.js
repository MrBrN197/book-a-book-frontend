import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import ReservationsPage from '../../components/reservations/ReservationsPage';
import { getCurrentUser } from '../../components/auth/user';

jest.mock('../../components/auth/user');
jest.mock('react-redux');
const reservations = {
  data: [
    {
      id: 7,
      reservation_date: '2022-03-18T04:15:00.000Z',
      city: 'Warsaw',
      book_id: 1,
      user_id: 1,
    },
    {
      id: 8,
      reservation_date: '2022-03-18T02:18:00.000Z',
      city: 'Warsaw',
      book_id: 2,
      user_id: 1,
    },
  ],
};

const books = {
  data: [
    {
      id: 1,
      title: 'A Song Of Ice and Fire',
      author: 'George R.R Martin',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376738412l/18337259.jpg',
      description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin’s stunning series is destined to stand as one of the great achievements of imaginative fiction.',
      price: '14.95',
      rating: '4.44',
      genre: 'Fantasy',
      created_at: '2022-03-02T22:45:40.451Z',
      updated_at: '2022-03-02T22:45:40.451Z',
    },
    {
      id: 2,
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY475_.jpg',
      description: "Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. Gale has escaped. Katniss's family is safe. Peeta has been captured by the Capitol. District 13 really does exist. There are rebels. There are new leaders. A revolution is unfolding.",
      price: '16.25',
      rating: '4.06',
      genre: 'Fiction',
      created_at: '2022-03-02T22:45:40.466Z',
      updated_at: '2022-03-02T22:45:40.466Z',
    },
  ],
};

describe('Tests for ReservationsPage Component', () => {
  test('test Reservation Page renders properly', () => {
    getCurrentUser.mockReturnValue({ id: 1 });
    useDispatch.mockReturnValue(() => {});
    useSelector.mockReturnValue({ reservationsReducer: reservations.data, booksReducer: books });
    render(
      <Router>
        <ReservationsPage />
      </Router>,
    );
    expect(screen.getByTestId('map-notice')).toBeInTheDocument();
    expect(screen.getAllByText('Warsaw')).toHaveLength(2);
    expect(screen.getByText('Suzanne Collins')).toBeInTheDocument();
  });
});
