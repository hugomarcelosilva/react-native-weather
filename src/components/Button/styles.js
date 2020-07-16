import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.TouchableOpacity`
  width: 200px;
  height: 46px;
  background-color: ${colors.blue};
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;
