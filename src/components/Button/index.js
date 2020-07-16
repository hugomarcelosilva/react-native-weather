import React from 'react';

import { Container, Text } from './styles';

export default function Button(props) {
  return (
    <Container onPress={props.onPress} {...props.style}>
      <Text {...props.textStyle}>{props.children}</Text>
    </Container>
  );
}

Button.defaultProps = {
  onPress: () => {},
};
