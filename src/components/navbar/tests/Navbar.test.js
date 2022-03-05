import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('renders navbar links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(screen.getByText(/BOOKS/i)).toBeInTheDocument();
  expect(screen.getByText(/MY RESERVATIONS/i)).toBeInTheDocument();
  expect(screen.getByText(/ADD BOOK/i)).toBeInTheDocument();
  expect(screen.getByText(/DELETE BOOK/i)).toBeInTheDocument();
  expect(screen.getByText(/RESERVE BOOK/i)).toBeInTheDocument();
});
