import React from 'react';
import { Text } from 'react-native';

export default function CustomText(props) {
  return (
    <Text
      numberOfLines={props.lineNumbers}
      ellipsizeMode={props.ellipseMode}
      style={[{ fontFamily: 'Roboto-Regular' }, props.styles]}
      onPress={props.handler && props.handler}>
      {props.content}
    </Text>
  );
}
