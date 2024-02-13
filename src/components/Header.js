import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../path-to-your-header-component/Header'; // Update the path to match the actual location of your Header component

test('displays the text "hello from the Header!"', () => {
  render(<Header />);
  const headerText = screen.getByText('hello from the Header!');
  expect(headerText).toBeInTheDocument();
});

