import 'react-native';
import React from 'react';
import App from '../App';
import { act, render, fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});
