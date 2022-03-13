import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bonjour le monde', () => {
  render(<App />);
  const h1Element = screen.getByText(/Bonjour/i);
  expect(h1Element).toBeInTheDocument();
});
