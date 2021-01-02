import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import Header from '../../components/Header';
import styles from './styles';
import MainLayout from 'app/layouts/MainLayout';

export default function LiveMarket({ navigation }) {
  const handleBackButton = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const Headercontent = (
    <Header
      headerLabel="Live Market"
      headerStyle={styles.textStyles}
      leftGroupName={'MaterialIcons'}
      leftIcon={'arrow-back'}
      leftAction={() => handleBackButton()}
    />
  );
  const bodyContent = (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
        LIVE MARKET SCREEN
      </Text>
    </View>
  );
  return (
    <MainLayout
      Header={Headercontent}
      Content={bodyContent}
      headerStyles={{ minHeight: 80 }}
      contentStyles={{ flex: 1 }}
      navigation={navigation}
    />
  );
}
