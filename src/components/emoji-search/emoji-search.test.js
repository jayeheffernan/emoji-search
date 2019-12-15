import React from 'react';
import { render } from '@testing-library/react';
import EmojiSearch from './';

test('renders without crashing', () => {
  render(<EmojiSearch />);
});
