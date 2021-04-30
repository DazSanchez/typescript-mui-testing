import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

xtest('it should render', () => {
  const wrapper = render(<App />);
  wrapper.debug();
});
