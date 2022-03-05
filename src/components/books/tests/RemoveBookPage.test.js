import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RemoveBookPage from '../RemoveBookPage';

jest.mock('react-redux');

global.alert = jest.fn();

describe('RemoveBookPage', () => {
  const book = {
    id: 0,
    title: 'A song of ice and fire',
    author: 'George R.R Martin',
    image: 'https://image.com',
  };
  const books = [book];
  beforeEach(() => {
    useSelector.mockReturnValue({ data: books, state: 'loading' });
    useDispatch.mockReturnValue(() => {});
  });

  test('that RemoveBookPage renders correctly', () => {
    render(<RemoveBookPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/a song of ice and fire/i)).toBeInTheDocument();
    expect(screen.getByText(/George R.R martin/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('that clicking delete button calls dispatch', () => {
    render(<RemoveBookPage />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText(/Delete Book/i));
    expect(useDispatch).toHaveBeenCalledTimes(1);
  });
});
