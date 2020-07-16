import React from 'react';
import { render } from 'react-native-testing-library';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render an button', () => {
    const { getByText } = render(<Button>Teste</Button>);

    expect(getByText('Teste')).toBeTruthy();
  });
});
