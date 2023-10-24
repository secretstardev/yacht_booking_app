import {Image} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import WelcomeScreen from '../screens/welcome';
import FavouritesScreen from '../screens/favourites';
import MessagesScreen from '../screens/messages';
import BookingsScreen from '../screens/bookings';
import ProfileScreen from '../screens/profile';
import HomeScreen from '../screens/home';

const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      activeColor="#246bbc"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/images/heart_focus.png')} />
            ) : (
              <Image source={require('../assets/images/heart.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/images/message_focus.png')} />
            ) : (
              <Image source={require('../assets/images/message.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/images/search_focus.png')} />
            ) : (
              <Image source={require('../assets/images/search.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/images/book_focus.png')} />
            ) : (
              <Image source={require('../assets/images/book.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/images/profile_focus.png')} />
            ) : (
              <Image source={require('../assets/images/profile.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBar;
