import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Space from '../../components/Space';
import {Image} from 'react-native-elements';
import {Pressable} from 'react-native';
import YachtCard from '../../components/YachtCard';

const Filter = ({navigation}) => {
  return (
    <View style={{margin: 16}}>
      <TouchableOpacity>
        <View style={styles.searchWidget}>
          <Image
            source={require('../../assets/images/point.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchLabel}>Dubai, United Arab Emirates</Text>
        </View>
      </TouchableOpacity>
      <Space height={20} />
      <View style={styles.searchItems}>
        <TouchableOpacity>
          <View style={styles.searchWidget}>
            <Text style={styles.searchItem}>Dates</Text>
          </View>
        </TouchableOpacity>
        <Space width={8} />
        <TouchableOpacity>
          <View style={styles.searchWidget}>
            <Text style={styles.searchItem}>Guests</Text>
          </View>
        </TouchableOpacity>
        <Space width={8} />
        <TouchableOpacity>
          <View style={styles.searchWidget}>
            <Text style={styles.searchItem}>More Filters</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Space height={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontSize: 20}}>100+ Boats Available</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/sort.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Space height={10} />
        <YachtCard
          onPress={() => {
            navigation.navigate('Info');
          }}
        />
        <Space height={30} />
        <YachtCard
          onPress={() => {
            navigation.navigate('Info');
          }}
        />
        <Space height={30} />
        <YachtCard
          onPress={() => {
            navigation.navigate('Info');
          }}
        />
        <Space height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    overflow: 'scroll',
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
  topSection: {
    height: 260,
    backgroundColor: '#246bbc',
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
    marginRight: 8,
  },
  locationText: {
    paddingHorizontal: 8,
  },
  location: {
    color: '#ffffff',
  },
  label: {
    paddingLeft: 16,
  },
  searchField: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    marginVertical: 16,
    marginHorizontal: 8,
    width: 20,
    height: 20,
  },
  searchLabel: {
    marginVertical: 16,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  carousel: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  card: {
    height: 340,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 170,
  },
  cardInfo: {
    padding: 10,
  },
  searchWidget: {
    backgroundColor: '#f5f5f5',
    borderColor: '#A9B4BE',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchItem: {
    margin: 8,
    color: 'black',
    fontSize: 16,
  },
  drawerButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  drawerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  drawer: {
    width: 0,
    backgroundColor: '#f1f1f1',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    overflow: 'hidden',
    position: 'relative',
  },
  drawerItem: {
    paddingVertical: 8,
  },
  drawerItemText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Filter;
