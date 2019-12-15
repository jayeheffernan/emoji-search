import React from 'react';
import { render } from '@testing-library/react';
import EmojiResults from './';

test('renders without crashing', () => {
  render(<EmojiResults />);
});
