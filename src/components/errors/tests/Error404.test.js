import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error404 from '../Error404';

test('renders error page correctly', async () => {
  render(
    <BrowserRouter>
      <Error404 />
    </BrowserRouter>,
  );
  // expect(screen.findByText(/[404 Error] Path/i)).toBeInTheDocument();
  expect(screen.getByText(/404.*does not exist/i)).toBeInTheDocument();
  // expect(screen.getByText(/[404 Error] Path/i)).toBeInTheDocument();
});
