import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding: 5px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
