import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /smart hashtag generator/i })).toBeInTheDocument();
});

test('renders theme toggle', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
});
