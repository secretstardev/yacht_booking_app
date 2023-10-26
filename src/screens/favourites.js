import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Button,
} from 'react-native';
import Space from '../components/space';
import TextButton from '../components/TextButton';
import Slider from 'rn-range-slider';

const App = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerTranslateX = useRef(new Animated.Value(200)).current;
  const maskOpacity = useRef(new Animated.Value(0)).current;

  const [value, setValue] = React.useState(0);

  const onValueChange = (newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    Animated.parallel([
      Animated.timing(drawerTranslateX, {
        toValue: drawerOpen ? 300 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(maskOpacity, {
        toValue: drawerOpen ? 0 : 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hideDrawer = () => {
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
        <Text style={styles.drawerButtonText}>
          {drawerOpen ? 'Number of Guests' : 'Number of Guests'}
        </Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Animated.View
          style={[
            styles.mask,
            {
              opacity: maskOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [
                {
                  translateX: drawerTranslateX,
                },
              ],
              zIndex: 100,
            },
          ]}>
          {!isFilter ? (
            <View style={{padding: 16}}>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/forward.png')}
                    style={{height: 16}}
                  />
                </TouchableOpacity>
              </View>
              <Space height={32} />
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Number of Passengers
              </Text>
              <Space height={32} />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 32,
                }}>
                <TouchableOpacity style={{height: 22}}>
                  <Image
                    source={require('../assets/images/minus.png')}
                    style={{height: 25}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    width: 60,
                    height: 30,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderWidth: 2,
                    borderColor: '#246bbc',
                    borderRadius: 4,
                  }}>
                  <Text style={{textAlign: 'center'}}>12</Text>
                </View>
                <TouchableOpacity style={{height: 22}}>
                  <Image
                    source={require('../assets/images/plus.png')}
                    style={{height: 25}}
                  />
                </TouchableOpacity>
              </View>
              <Space height={32} />
              <View
                style={{
                  borderStyle: 'dashed',
                  borderWidth: 1.5,
                  borderColor: '#246bbc',
                }}></View>
              <Space height={32} />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextButton title="Search" style={{height: 40}} />
                </View>
              </View>
            </View>
          ) : (
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 1}}>
                  <Image
                    source={require('../assets/images/forward.png')}
                    style={{marginTop: 10, height: 16}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    flex: 0,
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#246bbc',
                  }}>
                  Filter By
                </Text>
              </View>
              <Space height={16} />
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#246bbc'}}>
                  Type
                </Text>
                <Space height={4} />
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="Motorboat"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="Sailboat"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="Catamaran"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                </View>
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="RIB"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="Yacht"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="Houseboat"
                    style={{width: 84, height: 30}}
                    isOutline={false}
                  />
                </View>
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="Jetski"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                </View>
              </View>
              <View>
                {/* <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#246bbc'}}>
                  Price per hour ($)
                </Text> */}
                <Space height={4} />
                <View
                  style={{
                    paddingLeft: 8,
                  }}>
                  
                </View>
              </View>
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#246bbc'}}>
                  Duration
                </Text>
                <Space height={4} />
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="2 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="3 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="4 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                </View>
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="5 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={false}
                  />
                  <TextButton
                    title="6 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <TextButton
                    title="8 hrs"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#246bbc'}}>
                  Captain
                </Text>
                <Space height={4} />
                <View
                  style={{
                    paddingLeft: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextButton
                    title="Captain"
                    style={{width: 84, height: 30}}
                    isOutline={false}
                  />
                  <TextButton
                    title="No Captain"
                    style={{width: 84, height: 30}}
                    isOutline={true}
                  />
                  <View style={{width: 84}}></View>
                </View>
              </View>
            </View>
          )}
        </Animated.View>
        <TouchableOpacity onPress={hideDrawer} style={styles.mainContent}>
          {/* <Text>Main Content</Text> */}
          <Image
            source={require('../assets/images/yacht_1.png')}
            style={{width: 600, height: 200}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  contentContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  drawer: {
    width: 360,
    backgroundColor: '#f1f1f1',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    overflow: 'hidden',
    position: 'relative',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;
