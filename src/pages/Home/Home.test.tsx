import { render } from '@testing-library/react';
import { test } from 'vitest';

import { Component as Home } from './index';

test('should render sample', () => {
  render(<Home />);
});
