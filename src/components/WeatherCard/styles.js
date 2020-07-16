import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayTransparent};
  width: ${metrics.screenWidth}px;
`;

export const IconContainer = styled.View`
  align-self: center;
  padding: 10px;
`;

export const TextCity = styled.Text`
  font-family: 'Helvetica';
  font-size: 26px;
  padding: 10px;
  color: ${colors.yellow};
`;

export const TextMainTemp = styled.Text`
  font-family: 'Helvetica';
  font-size: 60px;
  font-weight: bold;
  padding: 5px;
  color: ${colors.yellow};
`;

export const TextDescription = styled.Text`
  font-family: 'Helvetica';
  font-size: 26px;
  padding: 10px;
  color: ${colors.yellow};
`;
