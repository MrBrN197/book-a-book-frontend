import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar links', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/ADD RESERVATION/i);
  expect(linkElement).toBeInTheDocument();
});
