/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Platform } from 'react-native';
import styles from './styles';
import CustomText from 'app/components/CustomText';
import VectorIcon from 'app/components/VectorIcon';
import AutoHeightImage from 'react-native-auto-height-image';

export default function Header(props) {
  return (
    <View style={[styles.container]}>
      <View
        style={{
          width: '65%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* {props.leftIcon && props.leftIcon === 'arrow-back' ? (
          <BackButton
            onPress={props.leftAction}
            style={[Platform.OS === 'ios' && { padding: 13 }]}
          />
        ) : ( */}
        <VectorIcon
          groupName={props.leftGroupName}
          name={props.leftIcon}
          size={25}
          color="#fff"
          handler={props.leftAction}
        />
        <View style={[styles.textContainer]}>
          <CustomText styles={styles.headerText} content={props.headerLabel} />
        </View>
      </View>
      <View
        style={{
          width: '35%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        {!props.logo && (
          <AutoHeightImage
            width={80}
            resizeMode="contain"
            source={require('app/assets/EMT_B.png')}
          />
        )}
        {/* {props.rightIcon && (
          <VectorIcon
            groupName={props.rightGroupName}
            name={props.rightIcon}
            size={25}
            color="#FFF"
            handler={props.rightAction}
            style={{ marginLeft: 20, paddingTop: 10 }}
          />
        )} */}
      </View>
    </View>
  );
}
