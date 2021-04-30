import { render } from '@testing-library/react';
import React from 'react';
import Index from '.';

test('it should render', () => {
  const wrapper = render(<Index />);

  wrapper.getByText('Hello react');
});
