import { render, screen } from '@testing-library/react';
import BookView from './BookView';

test('renders BookView', () => {
  render(<BookView title="The Hunger Games" author="Suzanne Collins" image="https://image.com" />);
  expect(screen.getByText(/The Hunger Games/i)).toBeInTheDocument();
  expect(screen.getByText(/Suzanne Collins/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
});
