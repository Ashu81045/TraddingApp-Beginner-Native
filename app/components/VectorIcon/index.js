import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

/*
  * Example Icon

  <VectorIcon
    groupName={'Entypo'}
    name={'attachment'}
    size={25}
    color="#000"
    handler={() => { console.log('clicked') }}
  />

*/

const VectorIcons = {
  MaterialIcons,
  EvilIcons,
  Entypo,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Zocial,
  Octicons,
  SimpleLineIcons,
  AntDesign,
  Fontisto,
};

const VectorIcon = ({ groupName, name, size, color, style, handler }) => {
  let Icon = VectorIcons[groupName];
  return (
    <Icon
      name={name}
      size={size}
      style={style}
      color={color}
      onPress={handler && handler}
    />
  );
};

export default VectorIcon;
