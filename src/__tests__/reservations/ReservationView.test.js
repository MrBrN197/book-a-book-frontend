import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../../redux/configureStore';
import ReservationView from '../../components/reservations/ReservationView';

const book = {
  id: 1,
  title: 'A Song Of Ice and Fire',
  author: 'George R.R Martin',
  image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376738412l/18337259.jpg',
  description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin’s stunning series is destined to stand as one of the great achievements of imaginative fiction.',
  price: '14.95',
  rating: '4.44',
  genre: 'Fantasy',
};

const reservation = {
  id: 1,
  reservation_date: '2022-05-14T14:30:00.000Z',
  city: 'Lagos',
  user_id: 1,
  book_id: 1,
};

describe('Tests for ReservationView Component', () => {
  test('Check if HTML element is on the page', () => {
    render(
      <Provider store={store}>
        <Router>
          <ReservationView reservation={reservation} book={book} userId={reservation.user_id} />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('map-book-title')).toBeInTheDocument();
    expect(screen.getByText('A Song Of Ice and Fire')).toBeInTheDocument();
    expect(screen.getByText('Lagos')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
