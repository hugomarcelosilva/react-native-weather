import React from 'react';
import { render } from 'react-native-testing-library';

import Loading from '../../components/Loading';

describe('Loading component', () => {
  it('should be able to render an loading view', () => {
    const { UNSAFE_getByType } = render(<Loading />);

    expect(UNSAFE_getByType('View')).toBeTruthy();
  });
});
