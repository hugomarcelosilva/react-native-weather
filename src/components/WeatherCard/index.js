import React from 'react';
import WeatherIcon from '../WeatherIcon';

import Temp from '../../utils/convertTemp';

import {
  Container,
  Content,
  IconContainer,
  TextCity,
  TextMainTemp,
  TextDescription,
} from './styles';

export default function WeatherCard(props) {
  const mainTemp = `${Math.round(
    Temp.kelvinToCelsius(props.data.main.temp),
    -1,
  )} °`;

  // Returns main weather according to id in brazilian portuguese
  function setDes() {
    const weatherId = props.data.weather[0].id;
    if (weatherId === '800') {
      return 'Céu limpo';
    } else {
      switch (`${weatherId}`.substring(0, 1)) {
        case '2':
          return 'Tempestade';
        case '3':
          return 'Chuvisco';
        case '5':
          return 'Chuva';
        case '6':
          return 'Neve';
        case '7':
          return 'Atmosférico';
        case '8':
          return 'Nuvens';
      }
    }
  }

  return (
    <Container>
      <Content>
        <IconContainer>
          <WeatherIcon icon={props.data.weather[0].icon} />
        </IconContainer>
        <TextCity>{props.data.name}</TextCity>
        <TextMainTemp>{mainTemp}</TextMainTemp>
        <TextDescription>{setDes()}</TextDescription>
      </Content>
    </Container>
  );
}
