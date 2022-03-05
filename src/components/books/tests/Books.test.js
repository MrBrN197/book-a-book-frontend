import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Books from '../BooksPage';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ book_id: 1 }),
}));

beforeEach(() => {
  const book = {
    id: 1, title: 'The Hunger Games', author: 'Suzanne Collins', image: '',
  };
  useSelector
    .mockReturnValueOnce({ state: 'loading', data: null })
    .mockReturnValue({ state: 'ready', data: [book] });
});

test('renders BookDetails attributes correctly', async () => {
  render(<Books />, { wrapper: MemoryRouter });
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  render(<Books />, { wrapper: MemoryRouter });
  expect(screen.getByText(/The Hunger Games/i)).toBeInTheDocument();
  expect(screen.getByText(/Suzanne Collins/)).toBeInTheDocument();
  expect(screen.getByLabelText('nav-left')).toBeInTheDocument();
  expect(screen.getByLabelText('nav-right')).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
});
