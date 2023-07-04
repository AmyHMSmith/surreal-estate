import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
