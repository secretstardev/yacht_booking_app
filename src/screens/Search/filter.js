import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  PanResponder,
} from 'react-native';

import Space from '../../components/Space';
import TextButton from '../../components/TextButton';
import YachtCard from '../../components/YachtCard';
import GuestFilter from './GuestFilter';
import MoreFilter from './MoreFilter';

const Filter = ({navigation, setScrollStatus}) => {
  const [filterGuest, setFilterGuest] = useState(false);
  const drawerRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const topBarAnimation = useRef(new Animated.Value(0)).current;
  const [showSortingSection, setShowSortingSection] = useState(false);
  const [location, setLocation] = useState('');
  const sliderRef = useRef(null);
  const [slideEnabled, setSlideEnabled] = useState(true);
  const handleSortIconClick = () => {
    setShowSortingSection(!showSortingSection);
  };

  const handleOutsideClick = () => {
    setShowSortingSection(false);
  };

  const openDrawer = () => {
    handleOutsideClick(false);
    setDrawerOpen(true);
    setScrollStatus(false);
    setSlideEnabled(false);

    Animated.parallel([
      Animated.timing(topBarAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(drawerAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const OpenGuestFilter = () => {
    setFilterGuest(true);
    openDrawer();
  };
  const OpenMoreFilter = () => {
    setFilterGuest(false);
    openDrawer();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(topBarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setDrawerOpen(false);
      setScrollStatus(true);
      setSlideEnabled(true);
    });
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const topBarHeight = topBarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // Disable scrolling for the main screen
      setScrollStatus(false);
      console.log("false");
    },
    onPanResponderRelease: () => {
      console.log("true");
      // Enable scrolling for the main screen
      setScrollStatus(true);
    },
  });

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={styles.container}>
        <Animated.View style={[styles.topBar, {height: topBarHeight}]}>
          <Text style={styles.topBarText}>
            {filterGuest ? 'Number of Guest' : 'Search Yachts'}
          </Text>
        </Animated.View>
        <View style={{flex: 1, margin: 16}}>
          <TouchableOpacity>
            <View style={[styles.searchWidget, {backgroundColor: '#f5f5f5'}]}>
              <Image
                source={require('../../assets/images/point.png')}
                style={styles.searchIcon}
              />
              <TextInput
                style={{fontWeight: 'bold', padding: 0, width: '80%'}}
                value={location}
                placeholder="Dubai, United Arab Emirates "
                onChangeText={setLocation}
              />
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
            <TouchableOpacity onPress={OpenGuestFilter}>
              <View style={styles.searchWidget}>
                <Text style={styles.searchItem}>Guests</Text>
              </View>
            </TouchableOpacity>
            <Space width={8} />
            <TouchableOpacity onPress={OpenMoreFilter}>
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
            <Text style={{color: 'black', fontSize: 20}}>
              100+ Boats Available
            </Text>
            <View style={{position: 'relative'}}>
              <TouchableOpacity onPress={handleSortIconClick}>
                <Image
                  source={require('../../assets/images/sort.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
              {showSortingSection ? (
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 120,
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    zIndex: 1,
                    borderRadius: 10,
                    borderColor: 'black',
                    backgroundColor: '#ffffff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 15,
                  }}>
                  <TouchableOpacity
                    onPress={handleSortIconClick}
                    style={{
                      borderBottomColor: 'rgba(0,0,0,0.75)',
                      borderBottomWidth: 1,
                      padding: 8,
                    }}>
                    <Text style={{fontSize: 16, color: 'black'}}>Newest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSortIconClick}
                    style={{
                      borderBottomColor: 'rgba(0,0,0,0.75)',
                      borderBottomWidth: 1,
                      padding: 8,
                    }}>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      Highest Price
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSortIconClick}
                    style={{padding: 8}}>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      Lowest Price
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
          <Space height={10} />
          <YachtCard enable={slideEnabled}/>
          <Space height={30} />
          <YachtCard enable={slideEnabled}/>
          <Space height={30} />
          <YachtCard enable={slideEnabled}/>
        </View>
        {drawerOpen && (
          <View style={styles.drawerOverlay}>
            <Animated.View
              style={[
                styles.drawerContent,
                {transform: [{translateX: drawerTranslateX}]},
              ]}
              ref={drawerRef}>
              <View style={styles.drawerTopBar}>
                <Text style={styles.drawerTopBarText}></Text>
              </View>
              <ScrollView
                ref={sliderRef}
                {...panResponder.panHandlers}
                style={styles.drawerBody}>
                {filterGuest ? (
                  <GuestFilter closeDrawer={closeDrawer} />
                ) : (
                  <MoreFilter closeDrawer={closeDrawer} />
                )}
              </ScrollView>
            </Animated.View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 12,
  },
  topBarText: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainScreen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1,
  },
  drawerContent: {
    backgroundColor: 'white',
    width: '84%',
    height: '100%',
  },
  drawerTopBar: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerTopBarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerBody: {
    flexGrow: 1,
    overflow: 'scroll',
    // paddingBottom: 160,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 16,
    flex: 1,
    // padding: 10,
  },

  searchWidget: {
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
});

export default Filter;
