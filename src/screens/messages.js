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

const Messages = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Messages</Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#003580',
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              borderWidth: 1,
              borderColor: '#003580',
              width: 120,
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              In progress
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              borderWidth: 1,
              borderColor: '#003580',
              width: 120,
            }}>
            <Text style={{textAlign: 'center', color: '#003580'}}>History</Text>
          </View>
          <View></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            paddingHorizontal: 32,
          }}>
          <Image
            source={require('../assets/images/yacht_2.png')}
            style={{width: 60, height: 60, borderRadius: 60}}
          />
          <Space width={16} />
          <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                Muhammad,
              </Text>
              <Space width={4} />
              <Text style={{fontSize: 16, color: 'black'}}>
                971-50-123-4567
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#093373'}}>
                Luxury 60 Feet Majesty YACHT{' '}
              </Text>
            </View>
          </View>
        </View>
        <Space height={8} />
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            borderStyle: 'solid',
          }}></View>
        <Space height={8} />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            paddingHorizontal: 32,
          }}>
          <Image
            source={require('../assets/images/yacht_2.png')}
            style={{width: 60, height: 60, borderRadius: 60}}
          />
          <Space width={16} />
          <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                Muhammad,
              </Text>
              <Space width={4} />
              <Text style={{fontSize: 16, color: 'black'}}>
                971-50-123-4567
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#093373'}}>
                Luxury 60 Feet Majesty YACHT{' '}
              </Text>
            </View>
          </View>
        </View>
        <Space height={8} />
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            borderStyle: 'solid',
          }}></View>
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

export default Messages;
