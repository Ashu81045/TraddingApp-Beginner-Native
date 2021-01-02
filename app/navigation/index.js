import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import NavigationStack from './NavigationStack';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slide1 from 'app/assets/Slide1.jpg';
import Slide2 from 'app/assets/Slide3.jpg';
import Slide3 from 'app/assets/Slide4.jpg';
import { hideWelcomeScreen } from 'app/store/actions/welcomeScreenActions';
import CustomButton from 'app/components/CustomButton';
import CustomText from '../components/CustomText';

const slides = [
  {
    key: 1,
    title: "ALLEN's unique pedagogy delivered through your phone",
    text:
      "Get India's best & most experienced faculties as your mentor for your competitive preparation.",
    image: <Slide2 />,
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'Steer your exam preparation the right way',
    text:
      'Learn through interactive live sessions, video lectures and practice materials.',
    image: <Slide1 />,
    backgroundColor: '#fff',
  },
  {
    key: 3,
    title: 'Evaluate your performance through periodic tests',
    text:
      'Practice and get 360 degree insight and analysis of your test performance.',
    image: <Slide3 />,
    backgroundColor: '#fff',
  },
];

export default function Navigation() {
  // State
  const [slide, setSlide] = useState(0);

  // Redux Props
  const dispatch = useDispatch();
  const showWelcomeScreen = useSelector((state) =>
    get(state, 'welcomeScreenReducer.visible', {}),
  );

  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.image}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    dispatch(hideWelcomeScreen());
  };

  if (!showWelcomeScreen) {
    return (
      <>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          onSlideChange={(index) => setSlide(index)}
          onSkip={_onDone}
          showSkipButton={slide !== 2 && true}
          showNextButton={slide !== 2 && true}
          showDoneButton={false}
          renderSkipButton={() => (
            <View style={styles.actionButtons}>
              <CustomText
                content="SKIP"
                styles={{
                  color: '#0000004D',
                  fontWeight: 'bold',
                }}
              />
            </View>
          )}
          renderNextButton={() =>
            Platform.OS === 'android' && (
              <View style={styles.actionButtons}>
                <CustomText
                  content="NEXT"
                  styles={{ color: '#EE5636', fontWeight: 'bold' }}
                />
              </View>
            )
          }
          dotStyle={slide === 2 ? styles.displayNone : styles.inactiveColor}
          activeDotStyle={slide === 2 ? styles.displayNone : styles.activeColor}
        />
        {slide === 2 && (
          <CustomButton
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: '#FFF',
            }}
            title="Get started"
            handler={() => {
              _onDone();
            }}
          />
        )}
      </>
    );
  } else {
    return <NavigationStack />;
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '900',
    color: '#00000080',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#2A2A2A',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtons: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeColor: { backgroundColor: '#707070' },
  inactiveColor: { backgroundColor: '#0000004D' },
  displayNone: { display: 'none' },
});
