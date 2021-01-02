import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import Header from '../../components/Header';
import styles from './styles';
import MainLayout from 'app/layouts/MainLayout';

export default function Home({ navigation }) {
  const handleBackButton = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const Headercontent = (
    <Header
      headerLabel="Home"
      headerStyle={styles.textStyles}
      leftGroupName={'MaterialIcons'}
      leftIcon={'dehaze'}
      leftAction={() => navigation.openDrawer()}
      rightGroupName={'MaterialCommunityIcons'}
    />
  );
  const bodyContent = (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
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
