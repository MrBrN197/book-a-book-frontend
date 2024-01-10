import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookDetails from '../BookDetails';

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
  render(<BookDetails />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  render(<BookDetails />, { wrapper: MemoryRouter });
  expect(screen.getByText(/The Hunger Games/)).toBeInTheDocument();
  expect(screen.getByText(/Suzanne Collins/)).toBeInTheDocument();
});

test('BookDetails Reserve link is visible', async () => {
  render(<BookDetails />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  render(<BookDetails />, { wrapper: MemoryRouter });
  expect(screen.getByRole('link')).not.toBeDisabled();
  expect(screen.getByRole('link')).toHaveTextContent('Reserve');
});
