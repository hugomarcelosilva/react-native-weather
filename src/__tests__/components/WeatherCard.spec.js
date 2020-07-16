import React from 'react';
import { render } from 'react-native-testing-library';

import WeatherCard from '../../components/WeatherCard';

describe('WeatherCard component', () => {
  it('should be able to render an loading view', () => {
    const weather = {
      name: 'Goiânia',
      weather: [],
    };

    const { getByText } = render(<WeatherCard data={weather} />);

    expect(getByText('Goiânia')).toBeTruthy();
  });
});
