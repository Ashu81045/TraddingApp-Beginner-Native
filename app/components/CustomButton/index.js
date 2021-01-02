import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import CustomText from 'app/components/CustomText';

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={0.6}
      onPress={() => {
        Keyboard.dismiss();
        props.handler ? props.handler() : {};
      }}
      disabled={props.disabled || false}>
      <ImageBackground
        source={require('app/assets/button-bg.png')}
        style={[styles.image, { opacity: props.disabled ? 0.5 : 1 }]}>
        <View style={styles.imageText}>
          <CustomText content={props.title} styles={styles.buttonText} />
        </View>
      </ImageBackground>
      {props.isLoginLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    paddingBottom: 7.5,
  },
  image: {
    width: '100%',
    height: 80,
  },
  imageText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
