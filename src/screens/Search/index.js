import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Space from '../../components/Space';
import Home from './home';
import Filter from './filter';

const Search = ({navigation}) => {
  const [isHome, setIsHome] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {isHome ? (
          <Home navigation={navigation} setStatus={setIsHome} />
        ) : (
          <Filter navigation={navigation} />
        )}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourite');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/heart.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={{fontSize: 13}}>Favourites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/message.png')}
              style={{width: 24, height: 22}}
            />
            <Text style={{fontSize: 13}}>Messages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/search_focus.png')}
              style={{width: 20, height: 22}}
            />
            <Text style={{fontSize: 13, color: '#246bbc'}}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/book.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={{fontSize: 13}}>Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{width: 15, height: 22}}
            />
            <Text style={{fontSize: 13}}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll', paddingBottom: 80},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 80,
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
});

export default Search;
