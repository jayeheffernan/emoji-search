import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from './';

test('renders without crashing', () => {
  render(<SearchInput value="" onChange={() => null}/>);
});
