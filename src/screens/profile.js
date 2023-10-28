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

import Space from '../components/Space';

const Profile = () => {

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Profile</Text>
        </View>
        <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
          <View style={[styles.float, {alignItems: 'center', padding: 16}]}>
            <View>
              <View style={styles.float}>
                <Image
                  source={require('../assets/images/avatar.png')}
                  style={{width: 50, height: 50, borderRadius: 30}}
                />
                <View style={{paddingLeft: 16}}>
                  <Text
                    style={{
                      color: '#093373',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Illia Fedenko
                  </Text>
                  <Text style={{color: '#5A5A5A'}}>Click view and edit</Text>
                </View>
              </View>
            </View>
            <Image
              source={require('../assets/images/forward.png')}
              style={{width: 10, height: 20}}
            />
          </View>
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Favourites</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/message.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Messages</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/list.png')}
              style={{width: 30, height: 30, marginRight: 2}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Listings</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/booking.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Bookings</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/setting.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>App settings</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/contact.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Contact us</Text>
          </View>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: 'center'
            }}>
            <Image
              source={require('../assets/images/logout.png')}
              style={{width: 32, height: 30}}
            />
            <Space width={16} />
            <Text style={{fontSize: 18}}>Log out</Text>
          </View>
          <Space height={8} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Profile;
