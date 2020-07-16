import React from 'react';
import { render } from 'react-native-testing-library';

import Home from '../../';

jest.mock('@react-native-community/geolocation', () => {
  return {
    getCurrentPosition: jest.fn(),
  };
});

describe('Home Page', () => {
  it('should contains button to update the search for location weather', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Atualizar')).toBeTruthy();
  });
});
