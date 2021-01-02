import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { navigationRef } from './NavigationService';
//Components
import Home from 'app/screens/Home';
import EDIC from 'app/screens/EDIC';
import LiveMarket from 'app/screens/LiveMarket';
import MyAccount from 'app/screens/MyAccount';
import PaperTrade from 'app/screens/PaperTrade';
import Services from 'app/screens/ServicesAndCourses';
import Watchlist from 'app/screens/WatchList';
import SnackbarContainer from '../components/SnackbarContainer/SnackbarContainer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    profileImgContainer: {
      marginLeft: 8,
      height: 80,
      width: 80,
      borderRadius: 40,
    },
    profileImg: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
  });

  let userName = 'Asim Bakhtiyar';

  const CustomDrawerContent = (props) => (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: '#161c28',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}>
      <View style={[styles.containHeader]}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            textAlign: 'right',
            margin: 10,
          }}>
          EaseMyTrade
        </Text>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TouchableHighlight
            style={[
              styles.profileImgContainer,
              { borderColor: 'green', borderWidth: 1 },
            ]}>
            <Image
              source={{
                uri:
                  'https://scontent.fpat2-2.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/22007942_1868350363180425_3989667243575815444_n.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=og0QJYv9IBsAX8Rgcyi&_nc_ht=scontent.fpat2-2.fna&tp=27&oh=3e9d173fcab1e345156ba581779cce6d&oe=601700CB',
              }}
              style={styles.profileImg}
            />
          </TouchableHighlight>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                padding: 20,
                paddingBottom: 5,
              }}>
              {' '}
              {userName}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                textAlign: 'center',
              }}>
              asimbakhtiyar@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <DrawerItemList {...props} />
      <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
          margin: 10,
        }}
      />
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Icon name="logout" size={25} color="#fff" />
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            paddingLeft: 20,
          }}>
          Logout
        </Text>
      </View>
    </DrawerContentScrollView>
  );

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: 'transparent',
          },
          activeTintColor: '#083eab',
          inactiveTintColor: '#fff',
          style: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 60,
            backgroundColor: '#161c28',
          },
          showIcon: true,
          showLabel: true,
        }}>
        <Tab.Screen
          name="HomeTab"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="PaperTrade"
          component={PaperTrade}
          options={{
            tabBarLabel: 'Paper Trade',
            tabBarIcon: ({ color, size }) => (
              <Icon name="description" size={30} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-bag" size={30} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            tabBarLabel: 'Watchlist',
            tabBarIcon: ({ color, size }) => (
              <Icon name="collections-bookmark" size={30} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={MyAccount}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={30} color="#fff" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: '#3d4e6f',
            labelStyle: { fontSize: 15 },
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={TabNavigator}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Home
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Live Market"
            component={LiveMarket}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Live Market
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="insert-chart-outlined" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="EDIC"
            component={EDIC}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  EDIC
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="message" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Courses/Services"
            component={Services}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Courses / Services
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="shopping-bag" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="PaperTrade"
            component={PaperTrade}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Paper Trade
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="description" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Open Demat Account"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Open Demat Account
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="local-atm" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Videos"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Videos
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="video-library" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Screener"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Screener/ Wix
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="speed" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Wallet"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Wallet
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="account-balance-wallet" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="ReferEarn"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text style={{ fontFamily: 'Roboto-Regular', color: '#fff' }}>
                  Refer & Earn
                </Text>
              ),
              drawerIcon: ({ tintColor }) => (
                <Icon name="share" size={25} color="#fff" />
              ),
            }}
          />
          <Drawer.Screen
            name="Disclaimer"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: '#fff',
                    fontSize: 15,
                  }}>
                  Disclaimer
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="About Us"
            component={Home}
            options={{
              drawerLabel: () => (
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: '#fff',
                    fontSize: 15,
                  }}>
                  About us
                </Text>
              ),
            }}
          />
        </Drawer.Navigator>

        {/* <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Login"
              component={Home}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <Stack.Screen
              name="Verify Login"
              component={Home}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <Stack.Screen
              name="Forgot Password"
              component={Home}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <Stack.Screen
              name="Create Password"
              component={Home}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
          </Stack.Navigator> */}
      </NavigationContainer>
      <SnackbarContainer />
    </>
  );
}
