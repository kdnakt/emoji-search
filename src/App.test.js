import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
});
