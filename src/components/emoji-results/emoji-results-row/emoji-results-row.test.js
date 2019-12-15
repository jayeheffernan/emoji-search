import React from 'react';
import { render } from '@testing-library/react';
import EmojiResultsRow from './';

test('renders without crashing', () => {
  render(<EmojiResultsRow />);
});
