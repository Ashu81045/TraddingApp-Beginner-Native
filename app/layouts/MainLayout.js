import React from 'react';
import { View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
export default function MainLayout(props) {
  const Container = props.whiteBackground ? View : ImageBackground;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0760DF' }}>
      <Container
        style={[
          styles.container,
          { backgroundColor: '#161c28' },
          props.containerStyles,
        ]}>
        <View style={[styles.header, props.headerStyles]}>{props.Header}</View>
        <View style={[styles.content, props.contentStyles]}>
          {props.Content}
        </View>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: '#000516',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 0,
  },
});
