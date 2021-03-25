import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('renders App with React', () => {
  render(<App />);
  const linkElement = screen.getByText(/App with React/);
  expect(linkElement).toBeInTheDocument();
});
